<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
     <v-layout column justify-space-around="">
         <v-flex style="margin-bottom:5%;">
              <v-layout row justify-space-around="">
        <v-flex xs12 sm12 md4 lg5 xl5 >
             <a>
                 <v-card style="padding-top:20%;padding-bottom:20%;background-color:#03CEA4;text-align:center;">
                <v-card-text class="px-0">
                    <v-icon large color="white">edit</v-icon>
                    <h2 style="color:white;" >COMPOSE</h2>
                </v-card-text>
             </v-card>
             </a>
        </v-flex>
         <v-flex xs12 sm12 md4 lg5 xl5 >
             <a>
             <v-card style="background-color:#564592;text-align:center;padding-top:20%;padding-bottom:20%;">
                <v-card-text class="px-0">
                    <v-icon large color="white">inbox</v-icon>
                    <h2 style="color:white;" >INBOX</h2>
                </v-card-text>
             </v-card>
             </a>
        </v-flex>
        
      </v-layout>
         </v-flex>
      <v-layout row justify-space-around="">
        <v-flex xs12 sm12 md4 lg5 xl5 >
            <a>
             <v-card class = "raise-on-hover" style="background-color:#403BC6;text-align:center;padding-top:20%;padding-bottom:20%;">
                <v-card-text class="px-0">

                    <v-icon large color="white">send</v-icon>
                    <h2 style="color:white;" >SENT</h2>
                </v-card-text>
             </v-card>
            </a>
        </v-flex>
         <v-flex xs12 sm12 md4 lg5 xl5 >
             <a><v-card style="background-color:#FB4D3D;text-align:center;padding-top:20%;padding-bottom:20%;">
                <v-card-text class="px-0">

                    <v-icon large color="white">drafts</v-icon>
                    <h2 style="color:white;" >DRAFTS</h2>
                </v-card-text>
             </v-card></a>
        </v-flex>
      </v-layout>
     </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  name: "MailBox",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
a .v-card:hover{
  box-shadow:0 20px 10px -10px rgba(0,0,0,.2), 0 10px 10px 0 rgba(0,0,0,.14), 0 8px 20px 0 rgba(0,0,0,.12);
}
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
