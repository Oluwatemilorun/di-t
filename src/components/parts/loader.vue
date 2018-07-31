<template>
  <v-container fixed>
    <v-slide-y-transition mode="out-in">
      <v-layout column text-xs-center text-xl-center align-content-center="" align-center>
       <v-flex>
            <v-progress-circular indeterminate large color="teal"/>
       </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  name: 'Loader',
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
