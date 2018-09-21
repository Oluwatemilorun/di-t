<template>
	<v-layout row wrap class="my-4 grey lighten-4">
		<v-flex xs4>
			<v-card height="93vh" class="box-items--wrapper">
				<v-list two-line dense>
					<template v-for="(item, index) in items">
						<v-list-tile
							:key="item.title"
							avatar
							ripple
							@click=""
						>

						<v-list-tile-content>
							<v-list-tile-title class="font-weight-bold body-1 pa-0">{{ item.user }}</v-list-tile-title>
							<v-list-tile-sub-title class="text--primary">{{ item.subject }}</v-list-tile-sub-title>
							<v-list-tile-sub-title class="caption">{{ item.text }}</v-list-tile-sub-title>
						</v-list-tile-content>

						<v-list-tile-action>
							<v-list-tile-action-text>{{ item.date }}</v-list-tile-action-text>
						</v-list-tile-action>

						</v-list-tile>
						<v-divider
							v-if="index + 1 < items.length"
							:key="index"
						></v-divider>
					</template>
				</v-list>
				
			</v-card>
				
		</v-flex>
		<v-flex xs8 class="pa-3">
			<v-card>
				<v-layout row wrap>
					<v-flex xs12>
						<v-list three-line>
							<v-list-tile avatar>
								<v-list-tile-avatar color="grey lighten-4">
									<img v-if="message.avatar && message.avatar != null" :src="message.avatar">
									<v-icon v-else>mdi-account</v-icon>
								</v-list-tile-avatar>

								<v-list-tile-content>
									<v-list-tile-title class="font-weight-bold body-1 pa-0">{{ message.user }}</v-list-tile-title>
									<v-list-tile-sub-title class="text--primary">{{ message.subject }}</v-list-tile-sub-title>
									<v-list-tile-sub-title class="caption">{{ message.date }}</v-list-tile-sub-title>
								</v-list-tile-content>

								<v-list-tile-action>
									<v-layout justify-space-between>										
										<v-btn icon small @click="starMessage">
											<v-icon	v-if="message.star" color="yellow darken-2">
												mdi-star
											</v-icon>
											<v-icon v-else color="grey lighten-1" >
												mdi-star-outline
											</v-icon>
										</v-btn>
										<v-menu bottom left>
											<v-btn slot="activator" icon small>
												<v-icon>mdi-dots-vertical</v-icon>
											</v-btn>
											<v-list dense avatar>
												<v-list-tile >
													<v-list-tile-avatar size="12">
														<v-icon>mdi-reply</v-icon>
													</v-list-tile-avatar>
													<v-list-tile-title>Reply</v-list-tile-title>
												</v-list-tile>
												<v-list-tile >
													<v-list-tile-avatar size="12">
														<v-icon>mdi-forward</v-icon>
													</v-list-tile-avatar>
													<v-list-tile-title>Forward</v-list-tile-title>
												</v-list-tile>
												<v-list-tile >
													<v-list-tile-avatar size="12">
														<v-icon>mdi-printer</v-icon>
													</v-list-tile-avatar>
													<v-list-tile-title>Print</v-list-tile-title>
												</v-list-tile>
												<v-list-tile >
													<v-list-tile-avatar size="12">
														<v-icon>mdi-delete</v-icon>
													</v-list-tile-avatar>
													<v-list-tile-title>Delete</v-list-tile-title>
												</v-list-tile>
												<v-list-tile >
													<v-list-tile-avatar size="12">
														<v-icon>mdi-alert</v-icon>
													</v-list-tile-avatar>
													<v-list-tile-title>Report</v-list-tile-title>
												</v-list-tile>
											</v-list>
										</v-menu>
									</v-layout>
								</v-list-tile-action>
							</v-list-tile>
							<v-divider></v-divider>
						</v-list>
					</v-flex>
					<v-flex xs12 class="pa-3">
						<div class="body-1"> {{message.text}} </div>
					</v-flex>
				</v-layout>
			</v-card>
		</v-flex>
	</v-layout>
</template>

<script>
export default {
	props: ['items'],
	data () {
		return {
			message: { user: 'Rainbow Hub', subject: 'Your Mailbox', text: 'Your mailbox is ready', date: 'yesterday', star: false }
		}
	},
	methods: {
		starMessage () {
			// () => 
			this.message.star = !this.message.star;
		}
	}
}
</script>

<style>
.box-items--wrapper {
	overflow-y: scroll
}
</style>
