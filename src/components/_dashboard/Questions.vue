<template>
    <v-fade-transition>
		<div>
			<v-container>
				<v-layout row wrap align-center>
					<v-flex sm12 lg3>
						<strong>Total Question</strong>
						<v-chip color="accent" text-color="black">
							<strong>{{questions.length}}</strong>
						</v-chip>
					</v-flex>
					<!-- <v-flex sm12 lg3>
						<v-text-field flat name="search" label="Search questions" single-line hide-details prepend-icon="mdi-magnify"></v-text-field>
					</v-flex> -->
					<v-spacer></v-spacer>
					<v-flex sm12 md6 lg3 class="capitalize">
						<v-select
							:items="category"
							v-model="filter"
							hint="Filter by categories"
							persistent-hint
							value="All"
							autocomplete
							single-line
							auto
							prepend-icon="mdi-filter"
							class="capitalize"
						>
						</v-select>
					</v-flex>
				</v-layout>
			</v-container>
			<v-container grid-list-lg>
				<v-layout row wrap>
					<v-flex v-for="(question, index) in questions" v-bind:key="index" xs12 md6 mb-3>
						<Question :question="question" />
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
					@click.native.stop="addQuestionDialog = true"
				>
					<v-icon>mdi-plus</v-icon>
				</v-btn>
			</v-fab-transition>
			
			<v-dialog v-model="addQuestionDialog" persistent max-width="500px">
				<AddQuestion :addQuestionDialog="openAddQuestionDialog" :categories="category" :showPreview="openQuestionPreview" />
			</v-dialog>
			<v-dialog
				v-model="questionPreviewDialog"
				persistent
				max-width="500px"
				transition="dialog-transition"
			>
				<AddQuestionPreview :question="addQuestionData" :closePreview="closeQuestionPreview" :saveQuestion="saveQuestion" />
			</v-dialog>
		</div>
    </v-fade-transition>
</template>

<script>

import axios from 'axios';

import Question from '@/components/_questions/Question'
import AddQuestion from '@/components/_questions/AddQuestionModal';
import AddQuestionPreview from '@/components/_questions/AddQuestionPreview';

export default {
	props: ['showSnackbar', 'showLoader'],
	components: {
		Question,
		AddQuestion,
		AddQuestionPreview
	},
	data() {
		return {
			addQuestionDialog: false,
			questionPreviewDialog: false,
			addQuestionData: {},
			readonly: true,
			showFab: false,
			filter: "All",
			category: [],
			questions: []
		}
	},
	methods: {
		openAddQuestionDialog () {
			this.addQuestionDialog = !this.addQuestionDialog;
		},
		openQuestionPreview (questionData) {
			this.addQuestionData = questionData;
			this.questionPreviewDialog = true
		},
		closeQuestionPreview (willDiscard) {
			if (willDiscard) {
				this.questionPreviewDialog = false
				this.addQuestionData = {}
				this.addQuestionDialog = false
			}
			else {
				this.questionPreviewDialog = false
				this.addQuestionData = {}
			}
		},
		saveQuestion () {
			axios({
				method: 'POST',
				url: '/admin/add-questions',
				data: this.addQuestionData,
			})
			.then((res) => {
				if (res.data.state == 'OK') {
					this.showSnackbar('Question added successfully', 'green darken-1');
					this.questionPreviewDialog = false;
					this.addQuestionDialog = false;
					this.getQuestions();
				}
			})
			.catch((err) => {
				console.log(err);
				this.showSnackbar('An error occured. Try again later', 'red accent-1');
			});
		},
		getQuestions () {
			this.showLoader(true);
			(async () => {
				try {
					let catg = [];
					this.category = (await axios.get('/admin/get-categories/all-catg')).data.payload.map((ca, i, a) => {
						catg.push(ca.name);
						return catg;
					});
					this.questions = (await axios.get('/admin/get-questions/all-questions')).data.payload;
					this.showLoader(false);
				} catch (err) {
					console.log(err);
					this.showLoader(false);
					this.showSnackbar('Error fetching resource. Try again later', 'red accent-1');
				}
			})();
		}
	},
	beforeRouteEnter (to, from, next) {
		next(vm => {
			vm.getQuestions();
		});
	},
	beforeRouteUpdate (to, from, next) {
		this.getQuestions();
		next();
	},
	mounted () {
		this.showFab = true;
		// this.getQuestions();
	}
};
</script>
