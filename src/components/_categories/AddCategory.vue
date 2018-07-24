<template>
	<v-card>
		<v-card-title primary-title>
			<h1 class="headline">Add Category</h1>
		</v-card-title>
		<v-form v-model="valid">
			<label for="category-cover">
				<div v-if="isUploading" class="progress-wrapper">
					<v-progress-circular indeterminate color="primary"></v-progress-circular>
				</div>
				<v-tooltip bottom>
					<img id="category-cover-preview" slot="activator" src="@/assets/images/upload.png" alt="cover" style="width: 100%; height: 200px">
					<span>Upload cover photo</span>
				</v-tooltip>
				<input type="file" name="cover" id="category-cover" accept="image/*" hidden @change="previewCover($event)" :rules="rule">
			</label>
			<v-card-text>
				<v-text-field
					name="category-title"
					placeholder="Category Title"
					id="category-title"
					:rules="rule"
					class="headline"
					style="font-size: 35px !important; font-weight: 500 !important"
					v-model="categoryTitle"
				></v-text-field>
				<v-text-field
					name="category-description"
					placeholder="Brief description about category"
					id="id"
					v-model="categoryDescription"
				></v-text-field>
			</v-card-text>
		</v-form>
		<v-card-actions>
			<v-btn flat color="grey" @click.native="closeAddCategoryDialog">cancel</v-btn>
			<v-spacer></v-spacer>
			<v-btn color="primary" :disabled="(!valid || !uploadSuccess)" :loading="isLoading" @click.native="saveCategory">Save</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>

import axios from 'axios'

export default {
	props: ['closeAddCategoryDialog', 'showLoader', 'showSnackbar', 'getCategories'],
	data () {
		return {
			valid: false,
			isLoading: false,
			isUploading: false,
			uploadSuccess: false,
			categoryTitle: '',
			categoryDescription: '',
			categoryCover: '',
			rule: [
				v => !!v || 'This field can\'t be empty'
			]
		}
	},
	methods: {
		previewCover (e) {
			console.log(e);
			let reader = new FileReader();
			reader.onload = () => {
				let output = document.getElementById('category-cover-preview');
				output.src = reader.result;
			}
			reader.readAsDataURL(e.target.files[0]);
			this.uploadSuccess = true;
			this.uploadCover();
		},
		uploadCover() {
			this.isUploading = true;
			let formData = new FormData();
			let cover = document.getElementById('category-cover');
			// console.log(cover.files[0]);
			formData.append("image", cover.files[0]);
			formData.append("test_string", "this string shows");
			axios.post('/admin/add-category/cover', formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})
				.then(res => {
					this.isUploading = false
					if (res.data.state == 'OK') {
						this.uploadSuccess = true;
						this.categoryCover = res.data.payload;
					}
					else {
						this.uploadSuccess = false;
						this.showSnackbar('Error processing image. Try again later', 'red accent-1');
					}
				})
				.catch(err => {
					this.isUploading = false
					this.uploadSuccess = false;
					console.log(err);
					this.showSnackbar('Error processing image. Connection error', 'red accent-1');
				});
		},
		saveCategory () {
			this.isLoading = true;
			axios({
				method: 'POST',
				url: '/admin/add-category/details',
				data: {
					name: this.categoryTitle,
					description: this.categoryDescription,
					cover: this.categoryCover
				}
			})
				.then(res => {
					this.isLoading = false
					if (res.data.state == 'OK') {
						this.getCategories();
						this.closeAddCategoryDialog();
						this.showSnackbar('Category added successfully', 'green darken-2');
					}
					else {
						if (res.data.state == 'NO') this.showSnackbar(res.data.payload, 'red accent-1');
						else this.showSnackbar('Error adding category. Try again later', 'red accent-1');
					}
				})
				.catch(err => {
					console.log(err);
					this.isLoading = false;
					this.showSnackbar('Error adding category. Network error', 'red accent-1');
				});
		}
	},

}
</script>

<style scoped>
.progress-wrapper {
	position: absolute;
	left: 46%;
    top: 30%;
}
</style>


