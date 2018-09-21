<template>
	<v-fade-transition mode="out-in">
		<v-container fluid style="height: 70vh">
			<v-toolbar color="transparent" absolute dense flat class="secondary-toolbar">
				<v-toolbar-title class="capitalize">{{title}}</v-toolbar-title>
			</v-toolbar>
			
			<MailBox
				:items="items"
			/>

		</v-container>
	</v-fade-transition>
</template>

<script>

import MailBox from '@/components/_messages/MailBox'

export default {
	components: { MailBox },
	data () {
		return {
			items: [
				{ user: 'Rainbow Hub', subject: 'Your Mailbox', text: 'Your mailbox is ready', date: 'yesterday' },
				{ user: 'Rainbow Hub', subject: 'Your Mailbox', text: 'Your mailbox is ready' },
			],
			title: null
		}
	},
	beforeRouteUpdate (to, from, next) {
		this.title = to.name;
		// function to get messages based on title
		switch (this.title) {
			case 'inbox':
				//  () => 
				next();
				break;
			
			case 'drafts':
				//  () => 
				next();
				break;
			
			case 'sent':
				//  () => 
				next();
				break;
		
			default:
				break;
		};
	},
	beforeRouteEnter (to, from, next) {
		next(vm => {
			vm.title = to.name
		})
	}
}
</script>

<style>

</style>
