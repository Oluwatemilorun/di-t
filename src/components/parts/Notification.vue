<template>
    <v-container class="grey lighten-4" style="min-height: 0;" fluid grid-list-10>
        <v-layout align-center justify-space-between>
            <div dark class="subheading">Notifications</div>
            <v-btn icon @click="() => this.$router.push(`/u/${userId}/settings/notification`)">
                <v-icon>mdi-settings</v-icon>
            </v-btn>
        </v-layout>
        <v-layout row wrap>
            <v-flex v-for="(item, index) in processNotification" :key="index" xs12 class="mb-2">
                <v-card color="white" class="black--text">
                    <v-layout style="padding: 10px 0">
                        <v-flex xs2 justify-space-around>
                            <v-avatar size="35" color="indigo" style="display: block; margin: 0px auto;">
                                <v-icon color="white">{{item.avatar}}</v-icon>
                            </v-avatar>
                        </v-flex>
                        <v-flex xs8>
                            <div class="subheading black--text" style="font-weight: 500">{{item.title}}</div>
                            <p class="body-1">{{item.content}}</p>
                            <div class="caption">{{item.date}}</div>
                        </v-flex>
                        <v-flex xs2>
                            <v-btn icon>
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        props: ['userId'],
        data() {
            return {
                items: [
                    {avatar: 'mdi-account', title: 'Unlimited music now', content: 'Listen to your favorite artists and albums whenever and wherever, online and offline.', date: '10 Days ago'},
                    {avatar: 'mdi-account', title: 'Unlimited music now', content: 'Listen to your favorite artists and albums whenever and wherever, online and offline.', date: '15 Days ago'}
                ]
    
            };
        },
        methods: {
            openNofication() {}
        },
        computed: {
            processNotification () {
                // this.noNotification = this.items.length
                return this.items
            }
        }
    };
</script>