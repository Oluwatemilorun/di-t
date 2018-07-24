<template>
	<v-card white>
		<v-layout>
			<v-flex xs11>
				<v-card-title primary-title>
					<h4>{{question.question}}</h4>
				</v-card-title>
			</v-flex>
		</v-layout>
		<v-layout>
			<v-flex>
				<v-list subheader dense>
					<v-subheader>Options</v-subheader>
					<v-list-tile v-for="(option, index) in question.options" v-bind:key="index" avatar>
						<v-list-tile-avatar>
							<v-icon>mdi-radiobox-marked</v-icon>
						</v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-title>This is the an option</v-list-tile-title>
						</v-list-tile-content>
						<v-list-tile-action readonly>
							<v-checkbox :input-value="option.isCorrect" :readonly="true" value></v-checkbox>
						</v-list-tile-action>
					</v-list-tile>
				</v-list>
			</v-flex>
		</v-layout>
		<v-card-actions>
			<v-chip v-if="question.difficulty && question.difficulty.toLowerCase() === 'easy'" color="green darken-3" text-color="white">Easy <v-icon right>mdi-mushroom</v-icon></v-chip>
			<v-chip v-if="question.difficulty && question.difficulty.toLowerCase() === 'medium'" color="primary" text-color="white">Meduim <v-icon right>mdi-chili-mild</v-icon></v-chip>
			<v-chip v-if="question.difficulty && question.difficulty.toLowerCase() === 'hard'" color="orange darken-3" text-color="white">Difficult <v-icon right>mdi-chili-medium</v-icon></v-chip>
			<v-chip v-if="question.difficulty && question.difficulty.toLowerCase() === 'extreme'" color="red darken-3" text-color="white">Extreme <v-icon right>mdi-chili-hot</v-icon></v-chip>
		</v-card-actions>
		<v-card-text v-show="true" class="capitalize">
			<v-divider></v-divider>
			<div class="my-2">Category: <strong>{{question.category}}</strong></div>
			<v-divider></v-divider>
			<div class="my-2">Added by: <strong>{{question.addedBy}}</strong></div>
			<v-divider></v-divider>
			<div class="my-1">Date added: <strong>{{question.dateAdded}}</strong></div>
		</v-card-text>
		<v-card-actions>
			<v-btn color="grey darken-1" flat @click="closePreview(false)">Close</v-btn>
			<v-spacer></v-spacer>
			<v-btn color="red darken-3" class="white--text" @click="closePreview(true)" >Discard</v-btn>
			<v-btn
				color="primary"
				class="white--text"
				:loading="isLoading"
				ripple
				@click.native="() => { isLoading == true; saveQuestion() }"
			>
				save
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	props: ['question', 'closePreview', 'saveQuestion'],
	data () {
		return {
			isLoading: false,

		}
	},
	mounted () {
		
	}
}
</script>
