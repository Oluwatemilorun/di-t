<template>
	<v-fade-transition>
		<div>
			<v-data-table v-model="selected" :headers="headers" :items="users" item-key="id" :search="search" :select-all="selectAll" :loading="loading" :pagination.sync="pagination">
				<template slot="items" slot-scope="props">
					<tr @click="props.expanded = !props.expanded">
						<td>
							<v-checkbox v-model="props.selected" primary hide-details ></v-checkbox>
						</td>
						<!-- <td v-for="(val, index) in headers" v-bind:key="index">
							{{ props.item[val.value] }}
							
						</td> -->
						<td>{{ props.item.name }}</td>
						<td>{{ props.item._id }}</td>
						<td>{{ props.item.username }}</td>
						<td>{{ props.item.email }}</td>
						<td>{{ props.item.phone }}</td>
						<td>{{ props.item.balance }}</td>
						<td>{{ props.item.gamesPlayed.length }}</td>
						<td>{{ props.item.gamesCreated.length }}</td>
						<td>{{ props.item.transactions.length }}</td>
						<td>
							<v-chip v-if="props.item.isActivated" color="green darken-3" text-color="white">
								<v-avatar>
									<v-icon>mdi-account-circle</v-icon>
								</v-avatar>
								Active
							</v-chip>
							<v-chip v-else color="red darken-3" text-color="white">
								<v-avatar>
									<v-icon>mdi-account-off</v-icon>
								</v-avatar>
								Inactive
							</v-chip>
						</td>
						<td>{{ props.item.date }}</td>
					</tr>
				</template>
				<template slot="expand" slot-scope="props">
					<v-card flat>
						<v-btn :loading="deleteLoading" color="error" @click.stop="deleteAlert = true">Delete</v-btn>
						<v-btn color="blue darken-2" @click="disableUser(props.item._id)">Deactivate</v-btn>
					</v-card>
				</template>
				
				<v-dialog slot-scope="props" v-model="deleteAlert" persistent max-width="290">
					<v-card>
						<v-card-text>Are you sure you want to delete this user? User will be deleted permanently.</v-card-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn color="grey darken-3" :loading="disableLoading" flat @click.native="dialog = false">cancel</v-btn>
							<v-btn color="red darken-3" flat @click.native="deleteUser(props.item._id)">delete user</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>

				<div slot="no-results" :value="true" class="text-center-xs">
					Your search for "{{ search }}" found no results.
				</div>
			</v-data-table>
		</div>
    </v-fade-transition>
</template>


<script>

import axios from 'axios';

export default {
	props: ['showSnackbar'],
	data () {
		return {
			search: "",
			selectAll: true,
			loading: false,
			selected: [],
			pagination: {},
			headers: [
				{ text: "Full Name", align: "left", sortable: true, value: "name" },
				{ text: "User ID", align: "left", sortable: true, value: "_id" },
				{ text: "Username", align: "left", sortable: true, value: "username" },
				{ text: "E-mail", value: "email" },
				{ text: "Phone no", value: "phone" },
				{ text: "Balance", value: "balance" },
				{ text: "No of Games Played", value: "gamesPlayed", sortable: true },
				{ text: "No of Games Created", value: "gamesCreated", sortable: true },
				{ text: "No of Transactions", value: "transactions", sortable: true },
				{ text: "Status", align: "left", value: "isActivated" },
				{ text: "Date Joined", value: "date" }
			],
			users: [],
			totalUsers: 0,
			disableLoading: false,
			deleteLoading: false,
			deleteAlert: false
		}
	},
	watch: {
		pagination: {
			handler () {
				this.getUsers()
					.then(data => {
						this.users = data.items
						this.totalUsers = data.total
					})
			},
			deep: true
		}
	},
	methods: {
		getUsers () {
			this.loading = true;
			return new Promise((resolve, reject) => {
				axios.get('/admin/getUsers')
				.then((res) => {
					this.loading = false;
					if (res.data.state == 'OK') {
						let items = res.data.payload;
							const { sortBy, descending, page, rowsPerPage } = this.pagination
							const total = res.data.payload.length
		
							if (this.pagination.sortBy) {
								items = items.sort((a, b) => {
									const sortA = a[sortBy]
									const sortB = b[sortBy]
									
									if (descending) {
										if (sortA < sortB) return 1
										if (sortA > sortB) return -1
										return 0
									} else {
										if (sortA < sortB) return -1
										if (sortA > sortB) return 1
										return 0
									}
								});
							}
		
							if (rowsPerPage > 0) {
								items = items.slice((page - 1) * rowsPerPage, page * rowsPerPage)
							}
							resolve({
								items,
								total
							});
					}
					else {
						this.showSnackbar('Error loading resources', 'red accent-1');
					}
				})
				.catch((err) => {
					console.log(err);
					this.loading = false;
					this.showSnackbar('An error occured. Network error', 'red accent-1');
				});
			});
		},
		deleteUser (id) {
			this.deleteLoading = true;
			axios.post('/admin/delete', { id: id })
				.then(res => {
					this.deleteLoading = false;
					
					if (res.data.state == 'OK') {
						this.showSnackbar('User deleted successfully', 'green darken-1');
						this.getUsers()
							then(data => {
								this.users = data.items
								this.totalUsers = data.total
							});
					}
					else {
						this.showSnackbar('User could not be deleted, try again later', 'red accent-1');
					}
				})
				.catch(err => {
					console.log(err);
					this.showSnackbar('User could not be deleted, try again later', 'red accent-1');
				});
		},
		disableUser (id) {
			this.disableLoading = true;
			axios.post('/admin/disable-user', { id: id })
				.then(res => {
					this.disableLoading = false;

					if (res.data.state == 'OK') {
						this.showSnackbar('User disable successfully', 'green darken-1');
						this.getUsers()
							then(data => {
								this.users = data.items
								this.totalUsers = data.total
							});
					}
					else {
						this.showSnackbar('User not disabled', 'red accent-1');
					}
				})
				.catch(err => {
					this.disableLoading = false;
					this.showSnackbar('User not disabled', 'red accent-1');
				});
		}
	}
}
</script>
