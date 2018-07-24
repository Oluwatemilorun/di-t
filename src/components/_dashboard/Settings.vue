<template>
    <v-fade-transition>
        <v-layout row fill-height dark>
            <v-flex xs3 fill-height elevation-3 class="">
                <v-layout row>
                    <v-list subheader dense style="background: transparent; width: 100%">
                        <v-subheader>Account</v-subheader>
                        <v-list-tile :to="`/${userId}/settings/account`">
                            <v-list-tile-title>My account</v-list-tile-title>
                            <v-icon color="grey lighten-1">mdi-chevron-right</v-icon>
                        </v-list-tile>
                        <v-list-tile v-if="user && user.level == 'Super Admin'" :to="`/${userId}/settings/manage-admins`">
                            <v-list-tile-title>Manage Admins</v-list-tile-title>
                            <v-icon color="grey lighten-1">mdi-chevron-right</v-icon>
                        </v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile :to="`/${userId}/settings/set-password`">
                            <v-list-tile-title>Change Password</v-list-tile-title>
                            <v-icon color="grey lighten-1">mdi-chevron-right</v-icon>
                        </v-list-tile>
                        <v-divider></v-divider>
                        <v-subheader>General</v-subheader>
                        <v-list-tile :to="`/${userId}/settings/display`">
                            <v-list-tile-title>Display</v-list-tile-title>
                            <v-icon color="grey lighten-1">mdi-chevron-right</v-icon>
                        </v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile :to="`/${userId}/settings/notification`">
                            <v-list-tile-title>Notifications</v-list-tile-title>
                            <v-icon color="grey lighten-1">mdi-chevron-right</v-icon>
                        </v-list-tile>
                        <v-divider></v-divider>
                        <v-subheader>Help and Feedback</v-subheader>
                        <v-list-tile :to="`/${userId}/settings/get-help`">
                            <v-list-tile-title>Get Help</v-list-tile-title>
                            <v-icon color="grey lighten-1">mdi-chevron-right</v-icon>
                        </v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile :to="`/${userId}/settings/feedback`">
                            <v-list-tile-title>Send Feedback</v-list-tile-title>
                            <v-icon color="grey lighten-1">mdi-chevron-right</v-icon>
                        </v-list-tile>
                        <v-divider></v-divider>
                    </v-list>
                </v-layout>
            </v-flex>
            <v-flex xs9>
                <router-view :goDark="goDark" :goMini="goMini" :turnNotif="turnNotif"></router-view>
            </v-flex>
        </v-layout>
    </v-fade-transition>
</template>

<script>
    export default {
        props: ['goDark', 'userId', 'turnNotif', 'goMini', 'user'],
        data () {
            return { }
        },
        computed: {

            },
        methods: {
            setPath (path) {
                // this.$router.push(`/${this.userId}/settings/${path}`);
            },
            processRoute(path) {
                // console.log(this.$router.currentRoute)
                this.$router.push(this.$router.currentRoute.path + '/' + path);
            }
        }
    }
</script>