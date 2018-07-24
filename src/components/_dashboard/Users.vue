<template>
    <v-fade-transition>
        <v-container grid-list-lg wrap>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card>
                        <v-card-title>
                            <div class="headline">All Users</div>
                            <v-spacer></v-spacer>
                            <v-text-field solo v-model="search" append-icon="mdi-magnify" label="Search users" single-line hide-details></v-text-field>
                        </v-card-title>
                        <Table :search="search" :showSnackbar="showSnackbar"></Table>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-fade-transition>
</template>

<script>

import Table from '@/components/_users/UserTable';

export default {
	props: ['showLoader', 'showSnackbar'],
	components: {
		Table
	},
	data () {
		return {
			search: "",
		};
	}
}
</script>
