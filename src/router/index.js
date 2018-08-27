import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import Dashboard from "@/components/Dashboard";

// dashboard
import Overview from "@/components/_dashboard/Overview";

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
			path: '/course',
			redirect: { path: '/' },
		},
		{
			path: "/course/:id",
			component: Dashboard,
			meta: { requiresAuth: true },
			children: [
				{
					path: "",
					redirect: { path: 'overview' }
				},
				{
					path: 'overview',
					name: 'overview',
					component: Overview
				}
			]
		}
	],
	mode: "history"
});
