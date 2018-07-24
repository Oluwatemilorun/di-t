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
                        <Table :selected="selected" :headers="headers" :search="search" :items="users" :selectAll="selectAll"></Table>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-fade-transition>
</template>

<script>
    import Table from "@/components/parts/Table";
    export default {
    components: {
        Table
    },
    data() {
    return {
      search: "",
      selectAll: true,
      selected: [],
      headers: [
        { text: "Name", align: "left", sortable: true, value: "name" },
        { text: "UserId", align: "left", sortable: true, value: "_id" },
        { text: "E-mail", value: "email" },
        { text: "Phone no", value: "phone" },
        { text: "Date Joined", value: "date" }
      ],
      users: [
          { _id: ' jq8wpevdjawp89edj93', name: 'Isaac Oluwatemilorun', email: 'aki@mail.com', phone: '132325123523', date: 'Sunday, May 27, 2018' },
          { _id: ' jq8wpevdjawp89edj93', name: 'Isaac Oluwatemilorun', email: 'aki@mail.com', phone: '132325123523', date: 'Sunday, May 27, 2018' },
          { _id: ' jq8wpevdjawp89edj93', name: 'Isaac Oluwatemilorun', email: 'aki@mail.com', phone: '132325123523', date: 'Sunday, May 27, 2018' },
          { _id: ' jq8wpevdjawp89edj93', name: 'Isaac Oluwatemilorun', email: 'aki@mail.com', phone: '132325123523', date: 'Sunday, May 27, 2018' }
      ]
    };
  }
};
</script>