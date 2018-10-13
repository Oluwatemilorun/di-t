<template>
	<v-container fluid class="pa-0 white">
		<v-toolbar light color="transparent" flat app absolute dense>
			<img :src="logo.normal" alt="" width="40px">
			<v-toolbar-title>
				<span class="black--text">Digiskills</span>
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-menu bottom left max-width="145" min-width="145">
				<v-chip outline round color="secondary" dark slot="activator">
					<span class="caption">Training one</span> 
					<v-icon size="18" right>mdi-menu-down</v-icon>
				</v-chip>
				<v-list subheader dense >
					<v-list-tile to="/" avatar>
						<v-list-tile-title>See all courses</v-list-tile-title>
							<v-icon>mdi-chevron-right</v-icon>
						<!-- <v-list-tile-action>
						</v-list-tile-action> -->
					</v-list-tile>
					<v-list-tile @click.stop="addCourse()">
						<v-list-tile-title class="secondary--text">Add a course</v-list-tile-title>
					</v-list-tile>
					<v-divider></v-divider>
					<v-subheader class="caption">Recent</v-subheader>
					<v-list-tile v-for="item in items" :key="item.key" @click="">
						<v-list-tile-title>{{ item.title }}</v-list-tile-title>
					</v-list-tile>
				</v-list>
			</v-menu>
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
						<v-spacer></v-spacer>
						<v-btn small flat color="accent">log out</v-btn>
					</v-card-actions>
				</v-card>
			</v-menu>
		</v-toolbar>

		<div class="dummy-bg" :style="{'background-image': `url(${logo.inverted})`}"></div>

		<v-content>
			<v-container grid-list-md>
				<v-layout row wrap>
					<v-flex xs12 sm4>
						<v-card class="d-inline-block elevation-1">
							<v-navigation-drawer
								floating
								permanent
								stateless
								value="true"
							>
								<v-toolbar color="grey lighten-3" dense flat>
									Personal settings
								</v-toolbar>
								<v-list dense>
									<v-list-tile active-class="secondary--text edit-active" :to="`/u/${user.id}/edit/profile`">
										<v-list-tile-title>Profile</v-list-tile-title>
									</v-list-tile>
									<v-divider></v-divider>
									<v-list-tile active-class="secondary--text edit-active" :to="`/u/${user.id}/edit/account`">
										<v-list-tile-title>Account</v-list-tile-title>
									</v-list-tile>
									<v-divider></v-divider>
									<v-list-tile active-class="secondary--text edit-active" :to="`/u/${user.id}/edit/notifications`">
										<v-list-tile-title>Notifications</v-list-tile-title>
									</v-list-tile>
								</v-list>
							</v-navigation-drawer>
						</v-card>
					</v-flex>
					<v-flex xs12 sm8>
						<v-card flat color="transparent">
							<v-container fluid>
								<router-view />
							</v-container>
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>
		</v-content>

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
	data () {
		return {
			bg: bg,
			logo: {
				normal: logo,
				inverted: logoInverted
			},
			user: { avatar: '/static/img/user.jpg' },
			course: [
				{ id: 'training-one-3r123', title: 'Training one', description: 'Something else' }
			],
		}
	},
	methods: {
		loadAbout () {
			this.phone = this.user.phone
		}
	},
	beforeRouteEnter (to, from, next) {
		next(vm => {
			vm.user = to.params.user;
			vm.loadAbout();
		});
	}
}
</script>

<style>
.edit-active {
	border-left: 3px solid #07a195
}
</style>
