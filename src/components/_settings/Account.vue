<template>
	<v-slide-x-transition mode="out-in">
		<v-container fluid fill-height>
			<v-layout align-center justify-center="">
				<v-card width="300" color="transparent" flat>
					<v-layout align-center justify-center mb-3>
						<v-tooltip right>
							<v-avatar
								size="120"
								color="accent"
								class="elevation-2"
								slot="activator"
							>
								<img src="/static/img/avatar/avatar-00.png" alt="admin">
							</v-avatar>
							<span>click to change avatar</span>
						</v-tooltip>
					</v-layout>
						
					<h3 class="text-xs-center display-2 capitalize" primary-title>
						{{user.name}}
						<v-btn flat icon color="grey darken-1" @click.stop="nameDialog = true">
							<v-icon>mdi-pen</v-icon>
						</v-btn>
					</h3>
					<p class="text-xs-center headline">
						{{user.username}}
						<v-btn flat icon color="grey darken-1" @click.stop="usernameDialog = true">
							<v-icon>mdi-pen</v-icon>
						</v-btn>
					</p>
					<p class="text-xs-center">
						{{user.email}} | {{user.adminLevel}} | {{user.dateCreated}}
					</p>
				</v-card>
			</v-layout>
			<v-dialog
				v-model="usernameDialog"
				persistent
				max-width="500px"
				transition="dialog-transition"
			>
				<v-card>
					<v-card-title primary-title class="headline">
						Change username
					</v-card-title>
					<v-container>
						<v-form v-model="usernameValid">
							<v-text-field
								name="username"
								placeholder="Username"
								id="username-update"
							></v-text-field>
						</v-form>
					</v-container>
						
					<v-card-actions>
						<v-btn color="grey darken-3" flat @click.stop="usernameDialog = false">cancel</v-btn>
						<v-spacer></v-spacer>
						<v-btn color="primary" :loading="isUpdating" :disabled="!usernameValid" @click.native="updateProfile('username')">Update</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
			<v-dialog
				v-model="nameDialog"
				persistent
				max-width="500px"
				transition="dialog-transition"
			>
				<v-card>
					<v-card-title primary-title class="headline">
						Change fullname
					</v-card-title>
					<v-container>
						<v-form value="nameValid">
							<v-text-field
								name="fullname"
								placeholder="Fullname"
								id="fullname-update"
								v-model="update_name"
								:rules="updateRules"
							></v-text-field>
						</v-form>
					</v-container>
						
					<v-card-actions>
						<v-btn color="grey darken-3" flat @click.stop="nameDialog = false">cancel</v-btn>
						<v-spacer></v-spacer>
						<v-btn color="primary" :loading="isUpdating" :disabled="!nameValid" @click.native="updateProfile('name')">Update</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
		</v-container>
	</v-slide-x-transition>
</template>

<script>

import axios from 'axios';

export default {
	props: ['user', 'showLoader', 'showSnackbar'],
	data () {
		return {
			usernameDialog: false,
			nameDialog: false,
			usernameValid: false,
			nameValid: false,
			isUpdating: false,
			update_name: '',
			update_username: '',
			update_avatar: '',
			updateRules: [
				v => !!v || 'Update field can\'t be empty',
			]
		}
	},
	methods: {
		updateProfile (field) {
			this.isUpdating = true
			axios.post(`/admin/update-admin/${field}`, { [field]: this[`update_${field}`] })
				.then(res => {
					this.isUpdating = false;
					if (res.data.state == 'OK') {
						this.usernameDialog = false;
						this.nameDialog = false;
						this.showSnackbar(`${field} updated successfully`, 'green darken-1');
					}
				})
				.catch(err => {
					console.log(err);
					this.isUpdating = false;
					this.showSnackbar(`Error updating ${field}`, 'red accent-1');
				});
		}
	}
}
</script>
