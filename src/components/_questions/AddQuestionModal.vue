<template>
	<v-card>
		<v-card-title>
			<span class="headline">Add Question</span>
			<v-spacer></v-spacer>
			<label for="csv-upload">
				<v-btn color="primary" @click.prevent>Upload csv file</v-btn>
				<input type="file" name="csv-upload" id="csv-upload" hidden>
			</label>
		</v-card-title>
		<v-card-text>
			<v-container grid-list-md wrap>
				<v-form v-model="valid">
					<v-layout wrap>
						<v-flex xs12>
							<v-text-field
								class="input-question"
								v-model.trim="question"
								placeholder="Question. What is the question?" 
								multi-line
								rows="2"
								hint="Question to be displayed to users"
								:rules="genRules"
								:persistent-hint="true" 
								required
							>
							</v-text-field>
						</v-flex>
					</v-layout>
					<v-layout wrap>
						<v-flex xs12 align-center>
							<v-radio-group v-model="option" name="options" v-on:change="validateOption">
								<v-layout align-center="">
									<v-text-field placeholder="Answer option" hint="Option A" :persistent-hint="true" v-model.trim="option_a" :rules="genRules" required></v-text-field>
									<v-radio value="a" hide-details class="shrink ml-3" required></v-radio>
								</v-layout>
								<v-layout align-center="">
									<v-text-field placeholder="Answer option" hint="Option B" :persistent-hint="true" v-model.trim="option_b" :rules="genRules" required></v-text-field>
									<v-radio value="b" hide-details class="shrink ml-3" required></v-radio>
								</v-layout>
								<v-layout align-center="">
									<v-text-field placeholder="Answer option" hint="Option C" :persistent-hint="true" v-model.trim="option_c" :rules="genRules" required></v-text-field>
									<v-radio value="c" hide-details class="shrink ml-3" required></v-radio>
								</v-layout>
								<v-layout align-center="">
									<v-text-field placeholder="Answer option" hint="Option D" :persistent-hint="true" v-model.trim="option_d" :rules="genRules" required></v-text-field>
									<v-radio value="d" hide-details class="shrink ml-3" required></v-radio>
								</v-layout>
							</v-radio-group>
						</v-flex>
					</v-layout>
					<v-layout>
						<v-flex xs12 sm6>
							<v-select
							:items="['Easy', 'Medium', 'Difficult', 'Extreme']"
							label="Difficulty level"
							v-model="difficultyLevel"
							:rules="genRules"
							required
							></v-select>
						</v-flex>
						<v-flex xs12 sm6>
							<v-select
							:items="categories"
							label="Category"
							v-model="category"
							:rules="genRules"
							autocomplete
							required
							></v-select>
						</v-flex>
					</v-layout>
				</v-form>
			</v-container>
			<small>*indicates required field</small>
		</v-card-text>
		<v-card-actions>
			<v-btn color="grey darken-1" flat @click="addQuestionDialog()">Close</v-btn>
			<v-spacer></v-spacer>
			<v-btn
				color="primary"
				class="white--text"
				:disabled="!valid"
				ripple
				@click.native="previewQuestion()"
			>
				Add Question
			</v-btn>
		</v-card-actions>
		<!-- <v-dialog
			v-model="uploadCSVDialog"
			:overlay="true"
			max-width="500px"
			transition="slide-y-transition"
		>
			
		</v-dialog> -->
      </v-card>
</template>

<script>
export default {
	props: ['addQuestionDialog', 'categories', 'showPreview'],
	data () {
		return {
			valid: false,
			isLoading: false,
			// isDisabled: ,
			genRules: [
                v => !!v || 'Field is required and can\'t be empty',
            ],
			question: '',
			option: 'a',
			option_a: '',
			option_b: '',
			option_c: '',
			option_d: '',
			option_correct_a: true,
			option_correct_b: false,
			option_correct_c: false,
			option_correct_d: false,
			difficultyLevel: '',
			category: '',
			questionData: {
				question: this.question,
				options: [
					{optionIndex: 'a', option: this.option_a, isCorrect: this.option_correct_a},
					{optionIndex: 'b', option: this.option_b, isCorrect: this.option_correct_b},
					{optionIndex: 'c', option: this.option_c, isCorrect: this.option_correct_c},
					{optionIndex: 'd', option: this.option_d, isCorrect: this.option_correct_d},
				],
				category: this.category,
				difficulty: this.difficultyLevel
			}
		}
	},
	methods: {
		validateOption () {
			this.option_correct_a = false;
			this.option_correct_b = false;
			this.option_correct_c = false;
			this.option_correct_d = false;
			
			this[`option_correct_${this.option}`] = true;
		},
		previewQuestion () {
			let questionData = {
				question: this.question,
				options: [
					{optionIndex: 'a', option: this.option_a, isCorrect: this.option_correct_a},
					{optionIndex: 'b', option: this.option_b, isCorrect: this.option_correct_b},
					{optionIndex: 'c', option: this.option_c, isCorrect: this.option_correct_c},
					{optionIndex: 'd', option: this.option_d, isCorrect: this.option_correct_d},
				],
				category: this.category,
				difficulty: this.difficultyLevel
			}
			// console.log(questionData);
			this.showPreview(questionData);
		}
	}
}
</script>

<style>
.input-question {
	font-size: 30px !important;
	font-weight: 500
}
</style>
