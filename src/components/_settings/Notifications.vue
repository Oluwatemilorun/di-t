<template>
    <v-slide-x-transition mode="out-in">
        <v-container>
            <v-layout row wrap>
                <v-list style="background-color:transparent; width: 100%">
                    <v-list-tile>
                        <v-list-tile-content @click="switchNotif()">
                            <v-list-tile-title v-if="isNotif">Turn off notifications</v-list-tile-title>
                            <v-list-tile-title v-else>Turn on notifications</v-list-tile-title>
                            <v-list-tile-sub-title v-if="isNotif">Stop receiving notifications</v-list-tile-sub-title>
                            <v-list-tile-sub-title v-else>I want to recieve notifications</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-switch
                                v-model="isNotif"></v-switch>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-layout>
        </v-container>
    </v-slide-x-transition>
</template>

<script>
    export default {
        props: ['turnNotif'],
        data () {
            return {
                isNotif: true,
            }
        },
        methods: {
            switchNotif () {
                this.isNotif = !this.isNotif
                this.turnNotif()
            }
        }
    }
</script>