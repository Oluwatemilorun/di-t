import Vue from "vue";
import Router from "vue-router";

import Index from "@/components/Index";
import Dashboard from "@/components/Dashboard";
import Profile from "@/components/Profile";
import PersonalSettings from "@/components/EditProfile";


// dashboard
import Overview from "@/components/_dashboard/Overview";
import Student from "@/components/_dashboard/Student";
import Certificates from "@/components/_dashboard/Certificates";
import Videos from "@/components/_dashboard/Videos";
import Calendar from "@/components/_dashboard/Calendar";
import Messages from "@/components/_dashboard/Messages";

import EditAccount from '@/components/_edit_profile/Account';
import EditProfile from '@/components/_edit_profile/Profile';
import EditNotifications from '@/components/_edit_profile/Notifications';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "index",
			component: Index,
			meta: { requiresAuth: true }
		},
		{
			path: "/course",
			redirect: { path: "/" }
		},
		{
			path: "/u/:userId",
			name: "profile",
			component: Profile,
			meta: { requiresAuth: true },
		},
		{
			path: "/u/:userId/edit",
			component: PersonalSettings,
			meta: { requiresAuth: true },
			children: [
				{
					path: '',
					redirect: { path: 'account' }
				},
				{
					path: 'account',
					name: 'edit-account',
					component: EditAccount
				},
				{
					path: 'profile',
					name: 'edit-profile',
					component: EditProfile
				},
				{
					path: 'notifications',
					name: 'edit-notifications',
					component: EditNotifications
				}
			]
		},
		{
			path: "/course/:courseId",
			component: Dashboard,
			meta: { requiresAuth: true },
			children: [
				{
					path: "",
					redirect: { path: "overview" }
				},
				{
					path: "overview",
					name: "overview",
					component: Overview
				},
				{
					path: "student",
					name: "student",
					component: Student
				},
				{
					path: "certificates",
					name: "certificates",
					component: Certificates
				},
				{
					path: "videos",
					name: "videos",
					component: Videos
				},
				{
					path: "calendar",
					name: 'calendar',
					component: Calendar
				},
				{
					path: "messages",
					component: Messages,
					children: [
						{ path: '', redirect: { path: 'inbox' } },
						{ path: 'inbox', name: 'inbox' },
						{ path: 'sent', name: 'sent' },
						{ path: 'drafts', name: 'drafts' },
					]
				},
			]
		}
	],
	mode: "history"
});
