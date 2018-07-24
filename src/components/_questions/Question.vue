<template>
	<v-slide-x-reverse-transition>
		<v-card white transition="slide-y-reverse-transition">
			<v-layout>
				<v-flex xs11>
					<v-card-title primary-title>
						<h4>{{question.question}}</h4>
					</v-card-title>
				</v-flex>
				<v-spacer></v-spacer>
				<v-flex pa-1>
					<v-menu dense bottom left min-width="150">
						<v-btn  slot="activator" icon right>
							<v-icon>mdi-dots-vertical</v-icon>
						</v-btn>
						<v-list dense>
							<v-list-tile color="blue darken-3" avatar @click="editQuestion(question.id)">
								<v-list-tile-avatar><v-icon color="blue darken-3">mdi-pen</v-icon></v-list-tile-avatar>
								<v-list-tile-title>Edit</v-list-tile-title>
							</v-list-tile>
							<v-list-tile color="red darken-2" avatar @click="deleteQuestion(question.id)">
								<v-list-tile-avatar><v-icon color="red darken-2">mdi-delete</v-icon></v-list-tile-avatar>
								<v-list-tile-title>Delete</v-list-tile-title>
							</v-list-tile>
						</v-list>
					</v-menu>
					
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
								<v-list-tile-title>option.option</v-list-tile-title>
							</v-list-tile-content>
							<v-list-tile-action readonly>
								<v-checkbox :input-value="option.isCorrect" :readonly="true" value></v-checkbox>
							</v-list-tile-action>
						</v-list-tile>
					</v-list>
				</v-flex>
			</v-layout>
			<v-card-actions>
				<v-chip v-if="question.difficulty.toLowerCase() === 'easy'" color="green darken-3" text-color="white">Easy <v-icon right>mdi-mushroom</v-icon></v-chip>
				<v-chip v-if="question.difficulty.toLowerCase() === 'medium'" color="primary" text-color="white">Meduim <v-icon right>mdi-chili-mild</v-icon></v-chip>
				<v-chip v-if="question.difficulty.toLowerCase() === 'hard'" color="orange darken-3" text-color="white">Difficult <v-icon right>mdi-chili-medium</v-icon></v-chip>
				<v-chip v-if="question.difficulty.toLowerCase() === 'extreme'" color="red darken-3" text-color="white">Extreme <v-icon right>mdi-chili-hot</v-icon></v-chip>
				<v-spacer></v-spacer>
				<v-btn icon @click.native="show = !show">
					<v-icon>{{ show ? 'mdi-arrow-down' : 'mdi-arrow-up' }}</v-icon>
				</v-btn>
			</v-card-actions>
			<v-slide-y-transition>
				<v-card-text v-show="show" class="capitalize">
					<v-divider></v-divider>
					<div class="my-2">Category: <strong>{{question.category}}</strong></div>
					<v-divider></v-divider>
					<div class="my-2">Added by: <strong>{{question.addedBy}}</strong></div>
					<v-divider></v-divider>
					<div class="my-1">Date added: <strong>{{question.dateAdded}}</strong></div>
				</v-card-text>
			</v-slide-y-transition>
		</v-card>
	</v-slide-x-reverse-transition>
</template>

<script>
export default {
	props: ['question'],
	data () {
		return {
			show: false,
		}
	}
}
</script>
