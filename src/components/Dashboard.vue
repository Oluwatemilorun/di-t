<template>
	<div>
		<!-- <div class="dummy-bg--wrapper" :style="{ 'background-image': `url(${bgToolbar}`}"></div> -->
		<v-navigation-drawer
			persistent
			:mini-variant="miniVariant"
			:clipped="clipped" 
			v-model="drawer"
			enable-resize-watcher
			fixed
			app
			width="280"
			class="teal darken-3"
			dark
		>
			<v-toolbar color="transparent" dense flat class="px-0">
				<img :src="logo.normal" alt="" width="30px">
				<v-toolbar-title>
					<span>Digiskills</span>
				</v-toolbar-title>
			</v-toolbar>
			<v-divider></v-divider>
			<v-list>
				<v-list-tile :to="defaultPath + 'overview'">
					<v-list-tile-action>
						<v-icon color="accent">mdi-home</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>Course Overview</v-list-tile-title>
					</v-list-tile-content>
					<v-list-tile-action>
						<v-menu offset-x transition="slide-x-transition" bottom right nudge-right="10">
							<v-btn icon dark slot="activator" ><v-icon>mdi-settings</v-icon></v-btn>
							<v-list dense>
								<v-list-tile @click="">
									<v-list-tile-title>Course settings</v-list-tile-title>
								</v-list-tile>
								<v-list-tile @click="">
									<v-list-tile-title>User settings</v-list-tile-title>
								</v-list-tile>
							</v-list>
						</v-menu>
					</v-list-tile-action>
				</v-list-tile>
			</v-list>
			<v-divider></v-divider>

			<v-list subheader dense class="teal darken-4">
				<v-subheader>Manage</v-subheader>
				<v-list-tile :to="defaultPath + 'students'">
					<v-list-tile-action>
						<v-icon>mdi-account-multiple</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>Students</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
				<v-list-tile :to="defaultPath + 'certificates'">
					<v-list-tile-action>
						<v-icon>mdi-certificate</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>Certificates</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
				<v-list-tile :to="defaultPath + 'videos'">
					<v-list-tile-action>
						<v-icon>mdi-play</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>Videos</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
				<v-list-tile :to="defaultPath + 'slides'">
					<v-list-tile-action>
						<v-icon>mdi-file-presentation-box</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>Slides</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
				<v-list-tile :to="defaultPath + 'notes'">
					<v-list-tile-action>
						<v-icon>mdi-note-text</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>notes</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>

			<v-list>
				<v-list-group prepend-icon="mdi-chart-areaspline" no-action>
					<v-list-tile slot="activator">
						<v-list-tile-content>
							<v-list-tile-title>Metrics and graphs</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>

					<v-list-tile>
						<v-list-tile-content>
							<v-list-tile-title>Training views</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>

					<v-list-tile>
						<v-list-tile-content>
							<v-list-tile-title>Income</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list-group>

				<v-list-group prepend-icon="mdi-message-text" :no-action="!miniVariant">
					<v-list-tile slot="activator">
						<v-list-tile-content>
							<v-list-tile-title>Messages</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>

					<v-list-tile to="?compose=new">
						<v-list-tile-action v-if="miniVariant">
							<v-icon>mdi-pen</v-icon>
						</v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>Compose</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<v-list-tile :to="defaultPath + 'messages/inbox'">
						<v-list-tile-action v-if="miniVariant">
							<v-badge
								v-model="miniVariant"
								color="accent"
								overlap
							>
									<v-icon>mdi-inbox</v-icon>
								<span slot="badge">{{newMessages}}</span>
							</v-badge>
						</v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>Inbox</v-list-tile-title>
						</v-list-tile-content>
						<v-list-tile-action v-if="!miniVariant">
							<v-chip small color="accent" label>{{newMessages}} new</v-chip>
						</v-list-tile-action>
					</v-list-tile>
					<v-list-tile :to="defaultPath + 'messages/sent'">
						<v-list-tile-action v-if="miniVariant">
							<v-icon>mdi-send</v-icon>
						</v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>Sent</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<v-list-tile :to="defaultPath + 'messages/drafts'">
						<v-list-tile-action v-if="miniVariant">
							<v-icon>mdi-note</v-icon>
						</v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>Drafts</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>

				</v-list-group>

				<v-list-tile :to="defaultPath + 'calendar'">
					<v-list-tile-action>
						<v-icon>mdi-calendar</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>Calendar</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>

			<v-footer color="transparent" fixed height="50px">
				<v-layout row wrap>
					<v-spacer v-if="!miniVariant"></v-spacer>
					<v-btn icon @click.stop="miniVariant = !miniVariant">
						<v-icon> {{ (miniVariant) ? 'mdi-chevron-right' : 'mdi-chevron-left' }}</v-icon>
					</v-btn>
				</v-layout>
			</v-footer>
		</v-navigation-drawer>

		<v-toolbar
			app
			:clipped-left="clipped"
			dense
			flat
			:color="scrolled ? 'white' : 'transparent'"
			:class="[{'elevation-3': scrolled}]"
		>
			<v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-lg-and-up"></v-toolbar-side-icon>
			<v-menu bottom left max-width="145" min-width="145">
				<v-chip round color="transparent" text-color="accent" label class="ma-0 pa-0" dark slot="activator">
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
					<!-- TODO: create endpoint to get courses -->
					<v-list-tile v-for="item in courses" :key="item.key" @click="">
						<v-list-tile-title>{{ item.title }}</v-list-tile-title>
					</v-list-tile>
				</v-list>
			</v-menu>

			<v-slide-y-reverse-transition>
				<v-toolbar-title v-if="scrolled">
						<span class="subheading capitalize">{{title}}</span>
				</v-toolbar-title>
			</v-slide-y-reverse-transition>
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

		<v-content id="dashboard-content" v-scroll="checkScroll">
			<router-view/>
		</v-content>

		<!-- TODO: create endpoint ot load students and pass to message composer -->
		<Composer :init="composeMessage" :close="() => composeMessage = false" :students="students" />

		<!-- <v-footer inset :fixed="fixed" app>
			<span>&copy; 2017</span>
		</v-footer> -->
	</div>
</template>


<style>
.dummy-bg--wrapper {
	height: 30%;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	background-position: right top;
	background-size: contain;
}
</style>


<script>

import bg from '@/assets/pg-bg.png'
import bgToolbar from '@/assets/bg-toolbar.png'
import logo from '@/assets/logo.png'
import logoInverted from '@/assets/logo-inverted.png'

import Composer from '@/components/_messages/Composer'

export default {
	components: { Composer },
	props: ['addCourse'],
	data () {
		return {
			user: {},
			defaultPath: null,
			newMessages: 10,
			composeMessage: false,
			// -->
			courses: ['trna-001', 'tidc-222'],
			students: ['Isaac', 'Luqman'],
			// 
			bg: bg,
			bgToolbar: bgToolbar,
			logo: {
				normal: logo,
				inverted: logoInverted
			},
			clipped: false,
			drawer: true,
			fixed: false,
			miniVariant: false,
			scrolled: false,
			right: true,
			title: 'Overview',
		}
	},
	methods: {
		checkScroll (e) {
			let scrollY = window.pageYOffset || document.documentElement.scrollTo;
			if (scrollY >= 32) this.scrolled = true;
			else this.scrolled = false;
		}
	},
	beforeRouteUpdate (to, from, next) {
		this.title = to.name;
		this.user = to.params.user;
		if (to.query.compose == 'new') {
			this.composeMessage = true;
		}
		next();
	},
	beforeRouteEnter (to, from, next) {
		next(vm => {
			vm.title = to.name;
			vm.user = to.params.user;
			vm.defaultPath = `/course/${to.params.courseId}/`;
			if (to.query.compose == 'new') {
				vm.composeMessage = true;
			}
		});
	},
}
</script>
