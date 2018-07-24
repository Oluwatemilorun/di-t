<template>
    <v-slide-x-transition mode="out-in">
        <v-container>
            <v-layout row wrap>
                <v-list style="background-color:transparent; width: 100%">
                    <v-list-tile @click="switchDisplayMode">
                        <v-list-tile-content>
                            <v-list-tile-title>Change Display Mode</v-list-tile-title>
                            <v-list-tile-sub-title v-if="!isDark">Change to night mode</v-list-tile-sub-title>
                            <v-list-tile-sub-title v-else>Change to day mode</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-switch v-model="isDark" @click="switchDisplayMode"></v-switch>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-divider></v-divider>
                    <v-list-tile @click="switchDrawerMode">
                        <v-list-tile-content>
                            <v-list-tile-title>Change Drawer Style</v-list-tile-title>
                            <v-list-tile-sub-title v-if="!isMini">Use the mini drawer</v-list-tile-sub-title>
                            <v-list-tile-sub-title v-else>Use the expanded drawer</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-switch v-model="isMini" @click="switchDrawerMode"></v-switch>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-layout>
        </v-container>
    </v-slide-x-transition>
</template>

<script>
    export default {
        props: ['goDark', 'goMini'],
        data () {
            return {
                isDark: false,
                isMini: false,
            }
        },
        methods: {
            switchDisplayMode () {
                this.goDark()
                this.isDark = !this.isDark
            },
            switchDrawerMode () {
                this.goMini(this.isMini)
                this.isMini = !this.isMini
            },
        }
    }
</script>

