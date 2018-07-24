<template>
	<v-fade-transition>
        <div fill-height>
			<v-container>
				<v-layout row wrap align-center>
					<v-flex>
						<strong>Total Categories</strong>
						<v-chip color="accent" text-color="black">
							<strong>{{categories.length}}</strong>
						</v-chip>
					</v-flex>
					<!-- <v-flex sm12 lg3>
						<v-text-field flat name="search" label="Search questions" single-line hide-details prepend-icon="mdi-magnify"></v-text-field>
					</v-flex> -->
					<!-- <v-spacer></v-spacer> -->
					<v-flex sm2>
						<v-btn flat icon :color="!isGrid ? 'primary' : 'grey'" @click.stop="isGrid = false">
							<v-icon>mdi-view-agenda</v-icon>
						</v-btn>
						<v-btn flat icon :color="isGrid ? 'primary' : 'grey'" @click.stop="isGrid = true">
							<v-icon>mdi-view-grid</v-icon>
						</v-btn>
					</v-flex>
				</v-layout>
			</v-container>
			<v-container grid-list-md>
				<v-layout align-center justify-center wrap>
					<v-flex v-for="(item, index) in categories" v-bind:key="index" xs12 :xs6="isGrid" :md10="!isGrid" :md5="isGrid" justify-center mb-4>
						<Category :item="item" />
					</v-flex>
				</v-layout>
			
			</v-container>
			<v-fab-transition>
				<v-btn
					fab
					large
					color="accent"
					bottom
					right
					fixed
					v-show="showFab"
					@click.native.stop="addCategoryDialog = true"
				>	
					<v-icon>mdi-plus</v-icon>
				</v-btn>
			</v-fab-transition>
			<v-dialog
				v-model="addCategoryDialog"
				scrollable 
				persistent
				max-width="500px"
				transition="dialog-transition"
			>
				<AddCategory :closeAddCategoryDialog="() => addCategoryDialog = false" :showLoader="showLoader" :showSnackbar="showSnackbar" :getCategories="getCategories" />
			</v-dialog>
		</div>
    </v-fade-transition>
</template>


<script>

import axios from 'axios';

import Category from '@/components/_categories/Category';
import AddCategory from '@/components/_categories/AddCategory';

export default {
	props: ['showLoader', 'showSnackbar'],
	components: {
		Category,
		AddCategory
	},
	data () {
		return {
			showFab: false,
			isGrid: false,
			addCategoryDialog: false,
			categories: []
		}
	},
	methods: {
		getCategories () {
			this.showLoader(true);
			axios.get('/admin/get-categories/all-catg')
				.then(res => {
					this.showLoader(false);
					if (res.data.state == 'OK') {
						this.categories = res.data.payload;
					}
					else {
						this.showSnackbar('Error loading categories. Try again later', 'red accent-1');
					}
				})
				.catch(err => {
					console.log(err);
					this.showLoader(false);
					this.showSnackbar('An error occurred. Try again later', 'red accent-1');
				});
		}
	},
	beforeRouteEnter (to, from, next) {
		next(vm => {
			vm.getCategories();
		});
	},
	beforeRouteUpdate (to, from, next) {
		this.getCategories();
		next();
	},
	mounted () {
		this.showFab = true;
	}
}
</script>