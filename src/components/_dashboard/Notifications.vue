<template>
    <v-fade-transition>
        <v-container grid-list-lg>
            <v-layout row>
                <v-flex xs12>
                    <v-card color="cyan darken-2" class="white--text">
                        <v-container fluid grid-list-lg>
                            <v-layout row>
                                <v-flex xs5>
                                    <v-card-media
                                    src="/src/assets/home-icon.jpg"
                                    height="125px"
                                    contain
                                    ></v-card-media>
                                </v-flex>
                                <v-flex xs7>
                                    <div>
                                        <div class="headline">Some notification</div>
                                        <div>Some notification content</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-fade-transition>
</template>

<script>
    export default {
        
    }
</script>