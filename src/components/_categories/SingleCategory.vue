<template>
	<v-slide-y-reverse-transition>
		<v-container fluid>
			<v-parallax :src="category.cover" height="400"></v-parallax>
			<v-layout row wrap>
				<v-flex xs12 mt-4>
					<v-layout justify-space-around>
						<v-flex>
							<h1 class="display-2 grey--text text--darken-3">
								{{category.name}}
							</h1>
						</v-flex>
						<v-tooltip bottom>
							<v-btn slot="activator" color="accent" flat icon>
								<v-icon>mdi-pen</v-icon>
							</v-btn>
							<span>Edit</span>
						</v-tooltip>
						<v-tooltip bottom>
							<v-btn slot="activator" color="red darken-3" flat icon>
								<v-icon>mdi-delete</v-icon>
							</v-btn>
							<span>Delete</span>
						</v-tooltip>
					</v-layout>
				</v-flex>
				<v-flex xs12>
					<p class="tagline mt-3">{{category.description}}</p>
				</v-flex>
				<v-divider></v-divider>
				<v-flex>
					<v-layout justify-space-between>
						<p class="tagline grey--text">Added by: {{category.addedBy}}</p>
						<p class="tagline grey--text">Date Added: {{category.addedBy}}</p>
					</v-layout>
				</v-flex>
			</v-layout>
			<v-layout>
				<v-container grid-list-lg>
					<v-layout row wrap>
						<v-flex v-for="(question, index) in questions" v-bind:key="index" xs12 md6 mb-3>
							<Question :question="question" />
						</v-flex>
					</v-layout>
				</v-container>
			</v-layout>
		</v-container>
	</v-slide-y-reverse-transition>
</template>

<script>

import axios from 'axios';

import Question from '@/components/_questions/Question'

export default {
	props: ['showLoader', 'showSnackbar'],
	components: {
		Question
	},
	data () {
		return {
			category: {
				cover: '',
				name: '',
				description: '',
				addedBy: '',
				dateAdded: ''
			},
			questions:[]
		}
	},
	methods: {
		getCategory (categoryName) {
			this.showLoader(true);
			// console.log(this.$router.params.categoryName);
			axios.get(`/admin/get-categories/${categoryName}`)
				.then(res => {
					this.showLoader(false);
					if (res.data.state == 'OK') {
						this.category = res.data.payload[0];
					}
					else {
						this.showSnackbar('Error loading resources', 'red accent-1');
					}
				})
				.catch(err => {
					this.showLoader(false);
					console.log(err);
					this.showSnackbar('Network Error', 'red accent-1');
				})
		},
		getQuestions (categoryName) {
			this.showLoader(true);
			axios.get(`/admin/get-questions/${categoryName}`)
				.then(res => {
					this.showLoader(false);
					if (res.data.state == 'OK') {
						this.questions = res.data.payload;
					}
					else {
						this.showSnackbar('Error loading resources', 'red accent-1');
					}
				})
				.catch(err => {
					this.showLoader(false);
					console.log(err);
					this.showSnackbar('Network Error', 'red accent-1');
				})
		}
	},
	beforeRouteEnter (to, from, next) {
		next(vm => {
			console.log(to.params.categoryName)
			vm.getCategory(to.params.categoryName);
			vm.getQuestions(to.params.categoryName);
		});
	},
	beforeRouteUpdate (to, from, next) {
		console.log(to.params.categoryName)
		this.getCategory(to.params.categoryName);
		this.getQuestions(to.params.categoryName);
		next();
	}
}
</script>
