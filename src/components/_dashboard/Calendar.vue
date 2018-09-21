<template>
	<v-fade-transition mode="out-in">
		<v-container fluid>
			<v-toolbar color="transparent" absolute dense flat class="secondary-toolbar">
				<v-toolbar-title>Calendar</v-toolbar-title>
			</v-toolbar>
			<v-layout fill-height row wrap class="my-4">
				<v-flex xs6>
					<v-card class="mb-3">
						<v-date-picker
							v-model="calendar"
							landscape
							full-width
							color="teal darken-3"
							:event-color="composePin"
							:events="pinSchedule"
						></v-date-picker>
					</v-card>
					<v-card>
						<v-toolbar color="transparent" dense flat>
							<v-toolbar-title>Schedules</v-toolbar-title>
							<v-spacer></v-spacer>
							<v-menu bottom left max-width="145" min-width="145">
								<v-btn slot="activator" flat round color="accent">{{scheduleFilterBy}}</v-btn>
								<!-- <v-chip round color="transparent" text-color="accent" class="ma-0 pa-0" dark slot="activator">
									<span class="caption">Training one</span> 
									<v-icon size="18" right>mdi-menu-down</v-icon>
								</v-chip> -->
								<v-list subheader dense>
									<v-list-tile @click.stop="scheduleFilterBy = 'today'">
										<v-list-tile-title class="secondary--text">Today</v-list-tile-title>
									</v-list-tile>
									<v-list-tile @click.stop="scheduleFilterBy = 'this week'">
										<v-list-tile-title class="secondary--text">This Week</v-list-tile-title>
									</v-list-tile>
									<v-list-tile @click.stop="scheduleFilterBy = 'this month'">
										<v-list-tile-title class="secondary--text">This Month</v-list-tile-title>
									</v-list-tile>
								</v-list>
							</v-menu>
							<v-tooltip bottom>
								<v-btn slot="activator" flat icon color="black">
									<v-icon>mdi-plus</v-icon>
								</v-btn>
								<span>New Schedule</span>
							</v-tooltip>
						</v-toolbar>
						<v-layout row wrap>
							<v-list v-for="(event, index) in currentSchedule" :key="index">
								<v-list-tile avatar>
									<v-list-tile-avatar>
										{{new Date(event.date).toISOString().substr(0, 10).split('-')[2]}}
									</v-list-tile-avatar>
								</v-list-tile>
							</v-list>
						</v-layout>
					</v-card>
				</v-flex>
				<v-flex fill-height xs6>
					
				</v-flex>
			</v-layout>
		</v-container>
	</v-fade-transition>
</template>

<script>
export default {
	data () {
		return {
			calendar: new Date().toISOString().substr(0, 10),
			scheduleFilterBy: 'today',
			events: [
				{
					date: '2018-09-19',
					bannerColor: 'red',
					title: 'Some event',
					note: 'Add note',
					startTime: new Date().getTime(),
					endTime: new Date().getTime() + 50000,
				},
				{
					date: '2018-09-20',
					bannerColor: 'yellow',
					title: 'Some event',
					note: 'Add note',
					startTime: new Date().getTime(),
					endTime: new Date().getTime() + 50000,
				},
				{
					date: '2018-09-25',
					bannerColor: 'blue',
					title: 'Some event',
					note: 'Add note',
					startTime: new Date().getTime(),
					endTime: new Date().getTime() + 50000,
				},
			],
			currentSchedule: []
		}
	},
	computed: {
		pinSchedule (date) {
			return this.events.map((event, index) => {
				return new Date(event.date).toISOString().substr(0, 10)
			});
		},
	},
	methods: {
		composePin (date) {
			for (let i = 0; i < this.events.length; i++) {
				let event = this.events[i]
				if ((new Date(event.date).toISOString().substr(0, 10)) == date) return event.bannerColor + this.filterSchedule()
			}
		},
		filterSchedule () {
			
		}
	}
}
</script>

<style>

</style>
