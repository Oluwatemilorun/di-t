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

		<section class="mt-5">
			<v-container grid-list-md fluid>
				<v-layout row wrap>
					<v-flex d-flex xs12 sm4 md3>
						<v-layout column class="px-4">
							<v-avatar
								size="100%"
								color="accent"
								tile
								class="my-3 user-avatar"
							>
								<img src="/static/img/user.jpg" alt="alt">
							</v-avatar>
							<div class="section-divider column align-content-center my-3">
								<v-divider light></v-divider>
								<span class="white pr-3 caption grey--text">WORK</span>
							</div>
						</v-layout>
					</v-flex>
					<v-flex d-flex xs12 sm8 md9>
        				<v-layout column class="px-4">
							<div class="sect mb-4">
								<h1 class="display-1 mt-3 font-weight-bold grey--text text--darken-2">
									<span>John Doe</span>
								</h1>
								<span class="body-2 secondary--text text--lighen-1"> <i class="mdi mdi-map-marker"></i> Lagos, Nigeria</span>
							</div>
							<div class="sect mb-4">
								<span class="caption grey--text">RANKINGS</span>
								<h1 class="headline font-weight-bold grey--text text--darken-1">
									<span>4.5</span>
									<v-icon size="30" color="secondary">mdi-star</v-icon>
								</h1>
							</div>
							<div class="sect mb-3">
								<v-btn flat color="grey darken-1" class="ma-0" icon><v-icon>mdi-account-edit</v-icon></v-btn>
								<!-- <v-btn flat color="grey darken-1" class="ma-0" icon><v-icon>mdi-message-text</v-icon></v-btn> -->
								<v-btn flat color="grey darken-1" class="ma-0" icon><v-icon>mdi-dots-horizontal</v-icon></v-btn>
							</div>
							<div class="sect mb-3">
								<v-tabs
									v-model="tabs"
									slider-color="secondary"
									>
										<v-tab href="#tab-about">
											About
										</v-tab>
										<v-tab href="#tab-activities">
											Activities
										</v-tab>
										<v-tab href="#tab-reviews">
											reviews
										</v-tab>
										<v-tab href="#tab-settings">
											settings
										</v-tab>
									
								</v-tabs>
								<v-divider></v-divider>
							</div>
							<div class="sect mb-3">
								<v-tabs-items v-model="tabs">
									<v-tab-item id="tab-about">
										<v-card flat class="">
											<span class="caption grey--text my-4">CONTACT INFORMATION</span>
											<v-layout align-center row class="my-2">
												<v-flex xs3 sm2 md1>
													<div class="body-1 font-weight-bold">Phone</div>
												</v-flex>
												<v-flex xs8>
													<div class="secondary--text">{{user.phone}}</div>
												</v-flex>
											</v-layout>
											<v-layout align-center row class="my-2">
												<v-flex xs3 sm2 md1>
													<div class="body-1 font-weight-bold">E-mail</div>
												</v-flex>
												<v-flex xs8>
													<div class="secondary--text">{{user.email}}</div>
												</v-flex>
											</v-layout>
											<v-layout align-center row class="my-2">
												<v-flex xs3 sm2 md1>
													<div class="body-1 font-weight-bold">Address</div>
												</v-flex>
												<v-flex xs8>
													<div class="secondary--text">{{user.address}}</div>
												</v-flex>
											</v-layout>

											<span class="caption grey--text my-4">BASIC INFORMATION</span>
											<v-layout align-center row class="my-2">
												<v-flex xs3 sm2 md1>
													<div class="body-1 font-weight-bold">Gender</div>
												</v-flex>
												<v-flex xs8>
													<div class="secondary--text">{{user.gender}}</div>
												</v-flex>
											</v-layout>
										</v-card>
									</v-tab-item>
									
									<v-tab-item id="tab-activities">

									</v-tab-item>

									<v-tab-item id="tab-reviews">

									</v-tab-item>

									<v-tab-item id="tab-settings">

									</v-tab-item>
								</v-tabs-items>
							</div>
        				</v-layout>
					</v-flex>

				</v-layout>	
			</v-container>
		</section>

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
			user: { avatar: '/static/img/user.jpg' },
			course: [
				{ id: 'training-one-3r123', title: 'Training one', description: 'Something else' }
			],
			tabs: null,
			canEdit: false,
			phone: null
		}
	},
	methods: {
		loadAbout () {
			console.log(this.user)
			this.phone = this.user.phone
		}
	},
	beforeRouteEnter (to, from, next) {
		next(vm => {
			vm.user = to.params.user;
			vm.loadAbout();
		})
	}

}
</script>

<style>
.user-avatar {
	height: auto !important;
}
.section-divider {
	height: 48px;
	display: flex;
	align-items: center;
    flex-direction: row-reverse;
}
.dummy-bg {
	position: absolute;
	top: 0%; left: 0%; right: 0%;
	height: 300px;
	z-index: 0;
    background-position: top right;
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.3;
}
</style>
