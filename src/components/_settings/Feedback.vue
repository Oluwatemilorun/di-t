<template>
    <v-slide-x-transition mode="out-in">
        <v-container>
            <v-layout row>
                <v-text-field v-model="name" :rules="nameRules" label="Fullname" required ></v-text-field>
            </v-layout>
            <v-layout row>
                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required ></v-text-field>
            </v-layout>
            <v-layout row>
                <v-text-field v-model="feedback" :rules="feedbackRules" name="input-7-1" label="Your feedback" multi-line required></v-text-field>
            </v-layout>
            <v-layout row wrap>
                <v-spacer></v-spacer>
                <v-btn color="primary">Send feedback</v-btn>
            </v-layout>
        </v-container>
    </v-slide-x-transition>
</template>

<script>
    export default {
        data () {
            return {
                name: '',
                nameRules: [
                    v => !!v || 'Please input your fullname'
                ],
                email: '',
                emailRules: [
                    v => !!v || 'Please input your email address',
                    v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail appears to be invalid'
                ],
                feedback: '',
                feedbackRules: [
                    v => !!v || 'We appreciate your feedback'
                ]
            }
        }
    }
</script>