<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
		<v-container grid-list-xl>
			<v-layout row wrap>
				<!-- items -->
				<!-- <v-subheader>Course overview</v-subheader> -->
				<v-flex v-for="(item, index) in overviewItems" :key="index" xs12 sm6 md4>
					<v-card raised hover height="200px" class="pa-3" style="border-radius: 10px; position: relative" :to="item.path">
						<v-card-text>
							<h3 class="title capitalize">{{item.name}}</h3>
							<p>{{item.value}}</p>
						</v-card-text>
						<v-card-media
							contain
							height="200px"
							:src="logo.normal"
							style="opacity: 0.5; position: absolute; right: 0; bottom: 0; width: 70%"
							class="d-block"
						>
						</v-card-media>
					</v-card>
				</v-flex>

				<!-- messages and event -->
				<v-flex xs12 sm6>
					<v-card aised hover height="100px" class="pa-3" style="border-radius: 10px; position: relative" to="calendar">
						<v-card-text>
							<h3 class="title capitalize">12 New</h3>
							<p>Messages</p>
						</v-card-text>
						<v-icon
							size="70"
							color="secondary"
							style="opacity: 0.5; position: absolute; right: 0; bottom: 0;"
							class="d-block"
						>
							mdi-inbox
						</v-icon>
					</v-card>
				</v-flex>
				<v-flex xs12 sm6>
					<v-card aised hover height="100px" class="pa-3" style="border-radius: 10px; position: relative" to="calendar">
						<v-card-text>
							<h3 class="title capitalize">3 Agendas</h3>
							<p>Calendar</p>
						</v-card-text>
						<v-icon
							size="70"
							color="secondary"
							style="opacity: 0.5; position: absolute; right: 0; bottom: 0;"
							class="d-block"
						>
							mdi-calendar
						</v-icon>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
    </v-slide-y-transition>
  </v-container>
</template>


<script>

import bg from '@/assets/pg-bg.png'
import logo from '@/assets/logo.png'
import logoInverted from '@/assets/logo-inverted.png'

export default {
	data () {
		return {
			bg: bg,
			logo: {
				normal: logo,
				inverted: logoInverted
			},
			overviewItems: [
				{ name: 'student', value: 10, path: 'videos' },
				{ name: 'certificates', value: 10, path: 'videos' },
				{ name: 'videos', value: 10, path: 'videos' },
				{ name: 'slides', value: 10, path: 'videos' },
				{ name: 'notes', value: 10, path: 'videos' },
				{ name: 'classes', value: 10, path: 'videos' },
			]
		}
	}
}

</script>