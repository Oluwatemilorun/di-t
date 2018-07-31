<template>
    <v-card>
<v-card-title>
     All courses
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-layout column justify-space-around reverse fill-height>
        
        <template>
            
  <v-data-table
    :headers="headers"
    :items="courses"
    :search="search"
    :loading="true"
    hide-actions
    class="elevation-1"
  >
  
    <template slot="items" slot-scope="props">
        
     <a @click="courseDetails();" color="grey" style="color:grey;padding:none;"> <td>{{ props.item.name }}</td></a>
      <td class="text-xs-right">{{ props.item.students }}</td>
      <td class="text-xs-right">{{ props.item.date }}</td>
      <td class="text-xs-right">{{ props.item.rating }}</td>
      <td class="text-xs-right">{{ props.item.status }}</td>
      <td class="text-xs-right">{{ props.item.views }}</td>
    </template>
    <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
  </v-data-table>
</template>
    </v-layout>
    </v-card>
</template>
<script>
export default {
  name: "Home",
  methods:{
    courseDetails(){
      //this.active = parseFloat("1.2");
      this.$emit('update', '1.2');
     // this.$root.status.active =  1.2;
    }
  },
  props: {
    user: String,
    _id: String,
    pass: String,
    date: String,
    active:Number,
  },
  data() {
    return {
    search:'',
      headers: [
        {
          text: "Course Title",
          align: "left",
          sortable: true,
          value: "name"
        },
        { text: "Registered Students",align:"center", value: "students" },
        { text: "Next Class", value: "date" },
        { text: "Average Rating(%)", value: "rating" },
        { text: "Status", value: "status" },
        { text: "Views", value: "views" }
      ],
      courses: [
        {
            name: "Microsoft Office tools",
            students: 203,
            date: "Monday, 12 June, 2018",
            rating:67,
            status: "In Progress",
            views:1356
        },{
            name: "Microsoft Office tools",
            students: 203,
            date: "Monday, 12 June, 2018",
            rating:67,
            status: "In Progress",
            views:1356
        },
        {
            name: "PowerPoint Analytics",
            students: "---",
            date: "---",
            rating:"---",
            status: "Pending Approval",
            views:"---"
        },
        {
            name: "Wireshark Networking Tools",
            students: 203,
            rating:67,
            date: "Monday, 12 June, 2018",
            status: "In Progress",
            views:1356
        },
        {
            name: "Wireshark Networking Tools",
            students: 203,
            rating:67,
            date: "Monday, 12 June, 2018",
            status: "In Progress",
            views:1356
        },
        {
            name: "Stock Analysis and Insights",
            students: "---",
            rating:"---",
            date: "---",
            status: "Draft",
            views:"---"
        },
        
      ]
    };
  }
};
</script>
