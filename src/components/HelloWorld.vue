<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-container grid-list-xl>
				<v-layout row wrap>
					<v-flex xs6 md4>
						<v-card raised hover height="200px" class="pa-3" style="border-radius: 10px; position: relative">
							<v-card-text>
								<h3 class="title">Courses</h3>
								<p>100</p>
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
					<v-flex xs6 md4>
						<v-card raised hover height="200px" class="pa-3" style="border-radius: 10px; position: relative">
							<v-card-text>
								<h3 class="title">Students</h3>
								<p>500</p>
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
					<v-flex xs6 md4>
						<v-card raised hover height="200px" class="pa-3" style="border-radius: 10px; position: relative">
							<v-card-text>
								<h3 class="title">Slides</h3>
								<p>80</p>
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
					<v-flex xs6 md4>
						<v-card raised hover height="200px" class="pa-3" style="border-radius: 10px; position: relative">
							<v-card-text>
								<h3 class="title">Videos</h3>
								<p>20</p>
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
			}
		}
	}
}

</script>