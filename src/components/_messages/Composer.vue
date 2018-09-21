<template>
	<v-dialog
		v-model="init"
		:hide-overlay="!composerExpanded ? true : false"
		persistent :overlay="false"
		transition="slide-y-reverse-transition"
		class="compose-message--wrapper"
		:max-width="$vuetify.breakpoint.smAndDown ? '100%' : '500px'"
		:fullscreen="$vuetify.breakpoint.smAndDown"
	>
		<v-card :height="composerMinimized ? 50 : 470">
			<v-toolbar dense dark>
				<v-toolbar-title><span class="body-1">New message</span></v-toolbar-title>
				<v-spacer></v-spacer>
				<v-btn small icon @click="composerMinimized = !composerMinimized">
					<v-icon small>mdi-window-minimize</v-icon>
				</v-btn>
				<!-- <v-btn small icon>
					<v-icon small>mdi-arrow-expand</v-icon>
				</v-btn> -->
				<v-btn small icon @click="close() + $router.replace('?')">
					<v-icon small>mdi-window-close</v-icon>
				</v-btn>
			</v-toolbar>
			<v-form>
				<v-autocomplete
					v-model="messageTo"
					:items="students" color="accent"
					chips label="To" class="compose-message--input"
					full-width hide-details
					hide-no-data hide-selected
					multiple single-line
				></v-autocomplete>
				<v-divider></v-divider>
				<v-text-field
					v-model="messageSubject"
					label="Subject" class="compose-message--input"
					single-line full-width color="accent"
					hide-details
				></v-text-field>
				<v-divider></v-divider>
				<v-layout row wrap class="compose-message--textarea">
					<v-textarea
						v-model="messageBody"
						color="accent" hide-details
						full-width height="calc(100% - 0px)"
						no-resize
					></v-textarea>
				</v-layout>
			</v-form>
			<v-divider></v-divider>
			<v-card-actions>
				<v-btn dark color="blue darken-1">send</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	props: ['init', 'close', 'students'],
	data () {
		return {
			composerExpanded: false,
			composerMinimized: false,
			messageTo: null,
			messageSubject: null,
			messageBody: null
		}
	}
}
</script>

<style scopped>
.v-dialog__content {
	align-items: flex-end;
	justify-content: flex-end
}
.compose-message--input.v-text-field.v-text-field--full-width .v-input__control {
	padding: 7px 0 !important;
}
.compose-message--textarea {
	height: 260px;
}
.v-dialog__content .v-dialog--active {
	margin: 0 24px
}
.compose-message--textarea .v-input__control {
	height: 100%;
}
.compose-message--textarea .v-input__slot {
	align-items: stretch
}
</style>
