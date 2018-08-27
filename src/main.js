// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import "@mdi/font/css/materialdesignicons.min.css";

Vue.use(Vuetify,  
	{
		iconfont: 'mdi',
		theme: {
			primary: "#ffffff",
			secondary: "#66BB6A",
			accent: "#00B8D4",
			error: "#D32F2F",
			warning: "#ffeb3b",
			info: "#7986CB",
			success: "#F5F5F5"
		}
	}
);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
	
	let user;
	let auth = {
		loggedIn: () => {
			// TODO: collect user's authentication credentials here
			// TODO: do some validation of user's credentials
			
			// TODO: attach users reusable data to routes and make them usable
			user = {};
			return true;
		}
	}

	if (to.matched.some(record => record.meta.requiresAuth)) {

		// this route requires auth, check if logged in
		// if not, redirect to login page.
		if (!auth.loggedIn()) {
			next({
				path: '/login',
				query: { redirect: to.fullPath }
			});
		} else {
			to.params.user = user;
			next()
		}
	} else {
		next() // make sure to always call next()!
	}
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
