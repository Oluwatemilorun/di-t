<template>
  <v-app >
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed 
      app
    >
   <v-btn flat style="text-transform:none;min-height:60px;padding-left:0px;"> <v-list-tile value="true">
          <v-list-tile-action>
            <img height="50" src="@/assets/logo.png">
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title style="font-size:24px;color:#124240 " >Digiskills <span style="font-size:18px;color:grey"> Console</span></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
  </v-btn>
      <v-container>
                <v-text-field :flat="mini" solo name="search" label="Search console" single-line hide-details prepend-icon="mdi-magnify"></v-text-field>
            </v-container>
      <v-list v-for="(item, i) in items"
          :key="i">
        <v-btn @click.native="scoochOver(item.id,item.title)" flat style="text-transform:none;min-height:50px;padding-left:0px; padding-right:120px" > 
        <v-list-tile v-if="item.id != status.active" style = "color:grey" list-a>
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="item.id == status.active" style = "color:#124240" list-a>
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </v-btn>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
     <v-btn icon  @click.stop="drawer = !drawer">
       <v-icon color="white">menu</v-icon>
     </v-btn>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon color="white" v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="status.title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon color="white" white>notifications</v-icon>
      </v-btn>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon color="white" >help</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container v-if="status.active == 1">
          <v-container>
              <v-card>
            <v-card-actions>
            <v-spacer></v-spacer> <v-btn @click.native="scoochOver(1.1,'New Course')" color="primary">CREATE NEW COURSE</v-btn>
            </v-card-actions>
          </v-card>
          </v-container>

          <v-container>
            <Courses />
          </v-container>
      </v-container>

      <v-container v-if="status.active == 2">
        <MailBox/>
      </v-container>
      <v-container>
      <CreateCourse v-if="status.active == 1.1"/>
      </v-container>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy;Rainbow Hub 2018</span>
    </v-footer>
  </v-app>
</template>
<style scoped>
.v-toolbar {
  background-color: #124240 !important;
  color: white !important;
}
.list-a {
  color: grey !important;
}
</style>

<script>
import Courses from "./components/courses";
import MailBox from "./components/messages";
import CreateCourse from "./components/new-course";
export default {
  name: "App",
  components: {
    Courses,
    MailBox,
    CreateCourse,
  },
  methods: {
    scoochOver(id, title) {
      console.log(id, title);
      console.log(status);
      this.status.active = id;
      this.status.title = title;
    }
  },
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "school",
          title: "All Courses",
          id: 1
        },
        {
          icon: "mail",
          title: "Messages",
          id: 2
        },
        {
          icon: "money",
          title: "Earnings",
          id: 3
        },
        {
          icon: "account_circle",
          title: "Profile",
          id: 4
        },
        {
          icon: "settings",
          title: "Settings",
          id: 5
        }
      ],
      status: {
        isLoading: false,
        active: 1,
        title: "Courses"
      },
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Digiskills"
    };
  }
};
</script>
