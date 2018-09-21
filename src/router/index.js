import Vue from "vue";
import Router from "vue-router";

import Index from "@/components/Index";
import Dashboard from "@/components/Dashboard";
import Profile from "@/components/Profile";


// dashboard
import Overview from "@/components/_dashboard/Overview";
import Student from "@/components/_dashboard/Student";
import Certificates from "@/components/_dashboard/Certificates";
import Videos from "@/components/_dashboard/Videos";
import Calendar from "@/components/_dashboard/Calendar";
import Messages from "@/components/_dashboard/Messages";

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
			path: "/profile",
			name: "profile",
			component: Profile,
			meta: { requiresAuth: true }
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
