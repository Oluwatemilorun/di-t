<template>
    <v-app :dark="isDark">
		<div v-if="isLoading" class="progress-loader-wrapper">
			<v-progress-linear :indeterminate="true" height="4" color="pink" background-color="pink lighten-3" class="ma-0"></v-progress-linear>
		</div>
        <v-navigation-drawer persistent v-model="drawer" dense enable-resize-watcher fixed app :mini-variant.sync="mini">
            <v-list>
                <v-list-tile value="true">
                    <v-list-tile-action>
                        <v-icon>mdi-chart-bubble</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>TQ-APP</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            <v-divider />
            <v-container>
                <v-text-field :flat="mini" solo name="search" label="Search settings" single-line hide-details prepend-icon="mdi-magnify"></v-text-field>
            </v-container>
            <v-list dense>
                <v-list-tile active-class="grey lighten-5 primary--text" ripple avatar :to="{path: `/${userId}/overview`}">
                    <v-list-tile-avatar>
                        <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>Overview</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile active-class="grey lighten-5 primary--text" ripple avatar :to="{path: `/${userId}/users`}">
                    <v-list-tile-avatar>
                        <v-icon>mdi-account-multiple</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>Users</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile active-class="grey lighten-5 primary--text" ripple avatar :to="{path: `/${userId}/categories`}">
                    <v-list-tile-avatar>
                        <v-icon>mdi-tab</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>Categories</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile active-class="grey lighten-5 primary--text" ripple avatar :to="{path: `/${userId}/questions`}">
                    <v-list-tile-avatar>
                        <v-icon>mdi-gamepad</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>Questions</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile active-class="grey lighten-5 primary--text" ripple avatar :to="{path: `/${userId}/games`}">
                    <v-list-tile-avatar>
                        <v-icon>mdi-gamepad-variant</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>Games</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile active-class="grey lighten-5 primary--text" ripple avatar :to="{path: `/${userId}/transactions`}">
                    <v-list-tile-avatar>
                        <v-icon>mdi-cash</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>Transactions</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile active-class="grey lighten-5 primary--text" ripple avatar :to="{path: `/${userId}/logs`}">
                    <v-list-tile-avatar>
                        <v-icon>mdi-view-list</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>Logs</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <!-- <v-list-group v-model="statisticsGroupIsActive" ripple avatar no-action>
                    <v-list-tile active-class="grey lighten-5 primary--text" slot="activator">
                        <v-list-tile-avatar>
                            <v-icon>mdi-account-multiple</v-icon>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>Users</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile v-for="(subItem, index) in metricsItems" :key="index" :to="{path: `statistics/${subItem.path}`}">
                        <v-list-tile-content active-class="grey lighten-5 primary--text">
                            <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group> -->
                <v-list-tile active-class="grey lighten-5 primary--text" ripple avatar  :to="{path: `notifications`}">
                    <v-list-tile-avatar>
                        <v-icon>mdi-bell</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>Notifications</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile active-class="grey lighten-5 primary--text" ripple avatar :to="{path: `settings`}">
                    <v-list-tile-avatar>
                        <v-icon>mdi-settings</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>Settings</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            <v-list v-if="isMini" style="position: absolute; bottom: 0;">
                <v-list-tile avatar>
                    <v-list-tile-action>
                        <v-btn icon @click.native.stop="mini = !mini">
                            <v-icon>mdi-chevron-left</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app dense prominent extended color="primary">
            <v-btn @click.stop="drawer = !drawer" class="white--text" icon>
				<v-icon>mdi-menu</v-icon>
			</v-btn>
            <v-toolbar-title v-text="title" class="white--text" style="text-transform: capitalize;"></v-toolbar-title>
            <v-spacer></v-spacer>

            <v-menu bottom left max-width=450 lazy max-height=500 v-if="isNotif">
                <v-btn class="white--text" slot="activator" icon>
                    <v-badge overlap color="accent">
                        <span slot="badge">{{ noNotification }}</span>
                        <v-icon>mdi-bell</v-icon>
                    </v-badge>
                </v-btn>
                <Notification></Notification>
            </v-menu>
            <v-btn icon hidden-sm-and-down class="white--text" to="settings/get-help">
                <v-icon>mdi-help-circle</v-icon>
            </v-btn>
			<v-menu offset-y min-width="300">
				<v-btn slot="activator" icon class="white--text">
					<v-avatar size=30>
						<img v-if="user && user.avatar && user.avatar != ''" :src="`@/components/${user.avatar}`" alt="avatar">
						<v-icon v-else color="white">mdi-account-circle</v-icon>
					</v-avatar>
				</v-btn>
				<v-list two-line dense>
					<v-list-tile avatar to="settings/profile">
						<v-list-tile-avatar >
							<img v-if="user && user.avatar && user.avatar != ''" :src="`@/components/${user.avatar}`" alt="avatar">
							<v-icon v-else size="40" color="accent">mdi-account-circle</v-icon>
						</v-list-tile-avatar>
						<v-list-tile-content>
							<!-- <v-list-tile-title>{{user.fullname}} </v-list-tile-title> -->
							<v-list-tile-sub-title>{{userId}}</v-list-tile-sub-title>
						</v-list-tile-content>
					</v-list-tile>
					<v-btn flat block color="primary" @click.native="logout">Logout</v-btn>
				</v-list>
			</v-menu>
            <div slot="extension">
                <v-breadcrumbs divider="/" class="white--text" style="color: #fff !important">
                    <v-breadcrumbs-item
                        v-for="(item, index) in breadcrumbs"
                        :key="index"
						active-class="accent--text"
                    >
						<v-icon color="white" v-if="index == 0">mdi-account</v-icon>
						<div class="capitalize white--text" v-else>{{item}}</div>
                    </v-breadcrumbs-item>
                </v-breadcrumbs>
            </div>
        </v-toolbar>
        <v-content>
            <router-view :goDark="goDark" :userId="userId" :user="user" :turnNotif="turnNotif" :goMini="goMini" :showSnackbar="showSnackbar" :showLoader="showLoader"></router-view>
            <v-footer inset app>
                <span>&copy; 2018 Rainbow Hub LTD</span>
            </v-footer>
        </v-content>
		<v-snackbar
			v-model="snackbar.show"
			:top="true"
			:right="true"
			:color="snackbar.color"
		>
			{{snackbar.text}}
		</v-snackbar>
    </v-app>
</template>

<script>

// TODO: create logs component

import axios from 'axios';

import Notification from "@/components/parts/Notification";

export default {
	// props: ['userId'],
	components: {
		Notification
	},
	data() {
		return {
			drawer: true,
			fixed: false,
			right: true,
			rightDrawer: false,
			mini: false,
			title: "Dashboard",
			metricsItems: [
				{ title: "All", path: "all", actions: "" },
				{ title: "Users", path: "users", actions: "" },
				{ title: "Generators", path: "generators", actions: "" }
			],
			statisticsGroupIsActive: false,
			noNotification: 0,
			snackbar: {
				show: false,
				text: '',
				color: 'primary',
			},
			isLoading: true,
			isDark: false,
			isNotif: false,
			isMini: false,
			user: {},
			userId: '',
			breadcrumbs: ["User"]
		};
	},
	computed: {

	},
	methods: {
		setBreadcrumbs(path) {
			let crumbs = [];
			this.breadcrumbs = path.split('/').map((v, i, a) => {
				if (i > 0) return v;
			}).reduce((a, b, i) => {
				crumbs.push(b);
				return crumbs;
			});
		},
		goDark() {
			this.isDark = !this.isDark;
		},
		goMini(li) {
			if (!li) this.mini = !this.mini;
			this.isMini = !this.isMini;
		},
		turnNotif() {
			this.isNotif = !this.isNotif;
		},
		showSnackbar (text, color) {
			this.snackbar.text = text;
			this.snackbar.color = color || ''
			this.snackbar.show = true;
		},
		showLoader (state) {
			this.isLoading = state
		},
		logout () {
			axios.post('/admin/logout', { id: this.userId })
				.then(res => {
					if (res.data.state == 'OK') {
						// TODO: navigate back to auth
					}
					else {
						this.showSnackbar('Error occured while signing out', 'red accent-1');
					}
				})
				.catch(err => {
					console.log(err);
					this.showSnackbar('Error occured while signing out', 'red accent-1');
				});
		}
	},
	beforeRouteEnter(to, from, next) {
		next(vm => {
			vm.user = to.params.user;
			vm.userId = to.params.adminId;
			// console.log(to.params.user)
			vm.title = to.name;
			vm.setBreadcrumbs(to.path);
		});
	},
	beforeRouteUpdate(to, from, next) {
		this.title = to.name;
		this.setBreadcrumbs(to.path);
		next();
	},
	mounted () {
		this.isLoading = false;
	}
};
</script>

<style>
.list__tile--active .avatar i,
.list__group.list__group--active .avatar i,
.list__group.list__group--active .list__group__header .list__tile__title {
	color: #0277bd !important;
}
.bold-text {
	font-weight: 500 !important;
}
.breadcrumbs__item {
	color: #fff;
}
.capitalize {
	text-transform: capitalize !important;
}
.progress-loader-wrapper {
	position: fixed;
	top: 0%;
	left: 0;
	right: 0%;
	z-index: 10;
}
</style>