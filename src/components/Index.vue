<template>
	<v-container fluid class="pa-0 grey lighten-3">
		<v-toolbar dark color="transparent" flat app absolute dense>
			<img :src="logo.normal" alt="" width="40px">
			<v-toolbar-title>
				<span class="black--text">Digiskills</span>
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn icon>
				<v-icon>mdi-bell</v-icon>
			</v-btn>

			<v-menu offset-y right nudge-bottom="10" nudge-right="20" min-width="320">
				<v-avatar
					size="30"
					slot="activator"
				>
					<img v-if="user && user.avatar" :src="user.avatar" alt="">
					<v-icon v-else>mdi-account-circle</v-icon>
				</v-avatar>
				<v-card>
					<v-layout>
						<v-flex xs5 class="pa-3">
							<v-avatar
								size="80"
								color="accent"
								class="mx-auto"
							>
								<img v-if="user && user.avatar" :src="user.avatar" alt="">
								<v-icon v-else size="50" color="white">mdi-account-circle</v-icon>
							</v-avatar>
						</v-flex>
						<v-flex xs7>
							<v-card-title primary-title class="px-0">
								<div>
									<div class="body-1 font-weight-bold">John Doe</div>
									<div class="tagline">john@doe.com</div>
								</div>
							</v-card-title>
						</v-flex>
					</v-layout>
					<v-divider light></v-divider>
					<v-card-actions class="pa-2 grey lighten-5">
						<v-btn small flat color="accent" :to="`/u/${user.id}`">My profile</v-btn>
						<v-spacer></v-spacer>
						<v-btn small flat color="accent">log out</v-btn>
					</v-card-actions>
				</v-card>
			</v-menu>
		</v-toolbar>
		<section>
			<v-parallax :src="bg" height="450">
				<v-container fill-height>
					<v-layout
						column
						align-start
						justify-center
						class="black--text"
					>
						<h1 class="mb-2 display-1">Welcome to Digiskills</h1>
						<div class="subheading mb-3 text-xs-left">Some more information that can be used as a small tagline.</div>
						<v-btn
							flat=""
							href=""
							color="blue"
						>
							learn more
						</v-btn>
					</v-layout>
					
				</v-container>
			</v-parallax>
		</section>
		<section style="margin-top: -100px">
			<v-container grid-list-xl>
				<v-layout row wrap>
					<v-flex xs6 md4>
						<v-card raised hover height="250px" class="pa-3" style="border-radius: 10px; position: relative" @click.native="addCourse()">
							<v-layout fill-height justify-center align-center column>
								<v-avatar
									size="70px"
									color=""
								>
									<v-icon color="secondary" size="70">mdi-plus</v-icon>
								</v-avatar>
								<p class="text-xs-center secondary--text">Add training</p>
							</v-layout>
						</v-card>
					</v-flex>
					<v-flex v-for="(course, index) in course" :key="index" xs6 md4>
						<v-card raised hover height="250px" class="pa-3" style="border-radius: 10px; position: relative" :to="`/course/${course.id}`">
							<v-card-text>
								<h3 class="title">{{course.title}}</h3>
								<p>{{course.description}}</p>
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
		</section>
		<v-footer height="200" color="transparent">
			<v-layout justify-center align-center row wrap>
				<v-btn flat round color="secondary" dark>Terms</v-btn>
				<v-btn flat round color="secondary" dark>Privacy policy</v-btn>
				<v-btn flat round color="secondary" dark>Contact</v-btn>
			
				<v-flex xs12 text-xs-center py-3>
					&copy;2018 — <strong>Rainbow Hub</strong>
				</v-flex>
			</v-layout>
		</v-footer>
	</v-container>
</template>

<script>

import bg from '@/assets/pg-bg.png'
import logo from '@/assets/logo.png'
import logoInverted from '@/assets/logo-inverted.png'

export default {
	props: ['addCourse'],
	data () {
		return {
			bg: bg,
			logo: {
				normal: logo,
				inverted: logoInverted
			},
			user: {},
			course: [
				{ id: 'training-one-3r123', title: 'Training one', description: 'Something else' }
			]
		}
	},
	beforeRouteEnter (to, from, next) {
		next(vm => {
			vm.user = to.params.user;
		})
	}
}
</script>

<style>

</style>
