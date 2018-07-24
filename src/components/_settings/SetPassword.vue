<template>
    <v-slide-x-transition mode="out-in">
        <v-container>
            <v-layout row>
                <v-flex xs4>
                    <v-subheader>Old Password</v-subheader>
                </v-flex>
                <v-flex xs8>
                    <v-text-field
                        v-model="oldPassword"
                        :append-icon="e2 ? 'mdi-eye' : 'mdi-eye-off'"
                        :append-icon-cb="() => (e2 = !e2)"
                        :type="e2 ? 'password' : 'text'"
                        name="password-old" 
                    ></v-text-field>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs4>
                    <v-subheader>New Password</v-subheader>
                </v-flex>
                <v-flex xs8>
                    <v-text-field
                        v-model="newPassword"
                        :append-icon="e2 ? 'mdi-eye' : 'mdi-eye-off'"
                        :append-icon-cb="() => (e2 = !e2)"
                        :type="e2 ? 'password' : 'text'"
                        name="password-new"
                        :rules="passwordRules"
                    ></v-text-field>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs4>
                    <v-subheader>Re-type Password</v-subheader>
                </v-flex>
                <v-flex xs8>
                    <v-text-field
                        v-model="newPasswordRe"
                        :append-icon="e2 ? 'mdi-eye' : 'mdi-eye-off'"
                        :append-icon-cb="() => (e2 = !e2)"
                        :type="e2 ? 'password' : 'text'"
                        name="password-new-retype"
                        :rules="passwordRules"
                    ></v-text-field>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-spacer></v-spacer>
                <v-btn color="primary" :loading="isLoading" @click.native="loading" :disabled="oldPassword && newPassword && newPasswordRe && (newPassword !== newPasswordRe)">update</v-btn>
            </v-layout>
        </v-container>
    </v-slide-x-transition>
</template>

<script>
  export default {
    data () {
      return {
        e1: true,
        e2: true,
        e3: true,
        e4: true,
        isLoading: false,
        isDisabled: true,
        oldPassword: '',
        newPassword: '',
        newPasswordRe: '',
        passwordRules: [
            v => !!v || 'Please input a password',
            v => v.length >= 8 || 'Password must be more than 8 characters'
        ]
      }
    },
    methods: {
        loading () {
            // console.log(this.newPasswordRe)
        }
    }
  }
</script>