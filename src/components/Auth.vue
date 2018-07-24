<template>
    <v-layout row wrap class="grey lighten-5 body-wrapper" fill-height>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs10 sm8 md4 xl3>
                    <v-card elevation-12 height="400px" color="white" raised class="login-card mx-auto">
                        <v-toolbar color="light" flat>
                            <v-toolbar-title class="text-xs-center">Admin Login</v-toolbar-title>
                        </v-toolbar>
                        <v-card-title primary-title>
                            <!-- <div centered class="headline text-xs-center">Admin Login</div> -->
                            <v-container >
                                <v-form v-model="valid">
                                    <v-text-field
                                        prepend-icon="mdi-account"
                                        v-model="username"
                                        :rules="usernameRules"
                                        label="Your Username or Email"
                                        required
                                    ></v-text-field>
                                    <v-text-field
                                        prepend-icon="mdi-lock"
                                        v-model="password"
                                        :rules="passwordRules"
                                        label="Password"
										type="password"
                                        required
                                    ></v-text-field>
                                </v-form>
                            </v-container>
                        </v-card-title>
                        <v-card-actions>
                            <v-container >
                                <v-btn
                                    color="primary"
                                    class="white--text"
                                    :loading="isLoading"
                                    :disabled="!valid"
                                    block
                                    ripple
                                    @click.native="processLogin"
                                >
                                    Login to dashboard
                                </v-btn>
                            </v-container>
                        </v-card-actions>
						<v-card-text class="text-xs-center pa-2">
							<small>&copy; 2018 Rainbow Hub LTD</small>
						</v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
			<v-snackbar
				:timeout="3000"
				:bottom="true"
				:multi-line="false"
				:vertical="false"
				v-model="snackbar"
				>
				{{ snackbarText }}
				<v-btn flat color="accent" @click.native="snackbar = false">Close</v-btn>
			</v-snackbar>
        </v-container>
    </v-layout>
</template>

<script>

import axios from 'axios';

export default {
	data: () => ({
		snackbar: false,
		snackbarText: 'An error occured',
		valid: false,
		isDisabled: false,
		isLoading: false,
		name: '',
		nameRules: [
			v => !!v || 'Name is required',
			v => v.length <= 10 || 'Name must be less than 10 characters'
		],
		username: '',
		usernameRules: [
			v => !!v || 'Please input your username',
			// v => /^([^<>()\[\]\\.,;:\s@"])([A-Za-z]|[A-Za-z0-9])/.test(v) || 'Username is invalid'
			// v => /^([A-Za-z][0-9][^\s])/.test(v) || 'Username is invalid'
		],
		email: '',
		emailRules: [
			v => !!v || 'Please input your email address',
			v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail is invalid'
		],
		password: '',
		passwordRules: [
			v => !!v || 'Please input your password',
		]
	}),
	methods: {
		processLogin () {
			// pass wvukjlrj
			this.isLoading = true;
			axios({
				method: 'POST',
				url: '/admin/login',
				data: {
					username: this.username,
					password: this.password,
				}
			})
			.then((res) => {
				// console.log(res);
				if (res.data.state == 'OK' && res.data.payload) {
					// document.cookie = `token=${res.data.token}`;
					this.isLoading = false;
					console.log(res.data.payload.username);
					this.$router.replace({ path: `/${res.data.payload.username}` });
					// this.$router.replace({ path: '/:adminId', params: { adminId: res.data.payload.username }})
				}
				else {
					this.isLoading = false;
					if (res.data.state == 'NO') this.snackbarText = res.data.payload
					else this.snackbarText = 'An error occured. Try again later'
					this.snackbar = true;
				}
			})
			.catch((err) => {
				console.log(err);
				this.isLoading = false;
				this.snackbarText = 'An error occured. Try again later';
				this.snackbar = true;
			});
		}
	}
}
</script>

<style scoped>
.body-wrapper,
.bg-shape-holder {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.login-card {
  top: 20%;
}
.bg-shape-holder {
  z-index: 0;
}
.bg-shape-holder .oval {
  border-radius: 50%;
  position: absolute;
}
.oval.oval-1 {
  width: 100px;
  height: 100px;
  top: 50px;
  left: 50px;
}
.oval.oval-2 {
  width: 600px;
  height: 600px;
  top: -100px;
  right: -26px;
}
.oval.oval-3 {
  width: 300px;
  height: 300px;
  top: 350px;
  left: 350px;
}
</style>
