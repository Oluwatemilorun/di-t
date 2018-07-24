<template>
    <v-fade-transition>
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex xs6 md4 lg3>
                    <v-card ripple hover :to="`users`" color="white">
                        <v-container>
                            <div class="bold black--text">No of Users</div>
                            <div class="display-2 bold black--text">{{data.no_users}}</div>
                        </v-container>
                    </v-card>
                </v-flex>
                <v-flex xs6 md4 lg3>
                    <v-card ripple hover :to="`categories`" color="white">
                        <v-container>
                            <div class="bold black--text">No of Categories</div>
                            <div class="display-2 bold black--text">{{data.no_categories}}</div>
                        </v-container>
                    </v-card>
                </v-flex>
                <v-flex xs6 md4 lg3>
                    <v-card ripple hover :to="`questions`" color="white">
                        <v-container>
                            <div class="bold black--text">No of Questions</div>
                            <div class="display-2 bold black--text">{{data.no_questions}}</div>
                        </v-container>
                    </v-card>
                </v-flex>
                <v-flex xs6 md4 lg3>
                    <v-card ripple hover :to="`games`" color="white">
                        <v-container>
                            <div class="bold black--text">No of Games</div>
                            <div class="display-2 bold black--text">{{data.no_games}}</div>
                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-fade-transition>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>

<script>
import axios from 'axios';
    export default {
        props: ['showSnackbar', 'showLoader'],
        data() {
            return {
				openOnHover: true,
				data: {
					no_users: 0,
					no_categories: 0,
					no_questions: 0,
					no_games: 0,
				}
            }
		},
		beforeRouteEnter (to, from, next) {
			axios.get('/admin/summarize')
			.then((res) => {
				if (res.data.state == 'OK') {
					next(vm => {
						vm.data = res.data.payload
						vm.showLoader(false)
					});
				}
				else {
					next(vm => {
						if (res.data.state == 'NO') vm.showSnackbar(res.data.payload, 'red accent-1');
						else vm.showSnackbar('An error occured. Try again later', 'red accent-1');
						vm.showLoader(false)
					})
				}
			})
			.catch((err) => {
				console.log(err);
				next(vm => {
					vm.showSnackbar('An error occured', 'red accent-1');
					vm.showLoader(false);
				});
			});
		},
		beforeRouteUpdate (to, from, next) {
			axios.get('/admin/summarize')
				.then((res) => {
					if (res.data.state == 'OK') {
						this.data = res.data.payload
						this.showLoader(false)
					}
					else {
						if (res.data.state == 'NO') this.showSnackbar(res.data.payload, 'red accent-1');
						else this.showSnackbar('An error occured. Try again later', 'red accent-1');
						this.showLoader(false)
					}
				})
				.catch((err) => {
					console.log(err);
					this.showSnackbar('An error occured', 'red accent-1');
					this.showLoader(false);
				});
			next();
		},
        mounted() {
            // this.$route.params.title = 'Dashboard'
        }
    }
</script>