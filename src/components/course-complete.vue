<template>
  <v-container fluid>
    <v-slide-x-transition mode="out-in">
      <v-layout v-show="false" column align-center>
          <v-icon class="large mdi mdi-bullseye">

          </v-icon>
          <v-container>
              <h2>You've</h2>
          </v-container>
      </v-layout>
    </v-slide-x-transition>
  </v-container>
</template>

<script>
export default {
  name: 'CourseComplete',
  props: {
    msg: String
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0; 
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
