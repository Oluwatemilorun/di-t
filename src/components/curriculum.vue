<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout row align-center full-width>
          <v-flex xs12>
              <v-stepper v-model="e1" vertical>
            <v-stepper-header>
                <v-stepper-step :complete="e1 > 1" step="1">Week 1</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step :complete="e1 > 2" step="2">Week 2 </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step :complete="e1 > 3" step="3">Week 3</v-stepper-step>
                <v-divider></v-divider>

                <v-stepper-step step="4" :complete="e1 > 4">Week 4</v-stepper-step>
                <v-divider></v-divider>

                <v-stepper-step step="5" :complete="e1 > 5">Week 5</v-stepper-step>
                
                <v-divider></v-divider>

                <v-stepper-step step="6" :complete="e1 > 6">Week 6</v-stepper-step>
            </v-stepper-header>
        
            <v-stepper-items>
                <v-stepper-content step="1">
                    <v-container>
                        <v-text-field label="Title" hint="Title for this week's work">
                        </v-text-field>
                         <v-text-field label="Description" hint="Course description for this week's work">
                        </v-text-field>
<br><br>
                        <h4>UPLOAD RESOURCES</h4>
                        
                        <br>
                        <v-divider></v-divider>
                        <br>
                        <v-layout row full-width justify-space-around="" align-content-space-between="">
                            <v-flex md4 centered>
                                <v-btn color="accent"><upload-button title="NOTES" :selectedCallback="fileSelectedFunc">
</upload-button></v-btn>
                            </v-flex>
                            <v-flex md4>
                                <v-btn color="accent"><upload-button title="SLIDES" :selectedCallback="fileSelectedFunc">
</upload-button></v-btn>
                            </v-flex>
                            <v-flex md4>
                                <v-btn color="accent"><upload-button title="VIDEO" :selectedCallback="fileSelectedFunc">
</upload-button></v-btn>
                            </v-flex>
                        </v-layout>
                    
<br><br>
                    <v-spacer></v-spacer> 
                    <v-btn
                        color="primary"
                        @click="e1 = 2"
                        >
                        Continue
                    </v-btn>

                    <v-btn flat>SAVE AS DRAFT</v-btn>
                    </v-container>
                </v-stepper-content>
                 <v-stepper-content step="2">
                    <v-container>
                        <v-text-field label="Title" hint="Title for this week's work">
                        </v-text-field>
                         <v-text-field label="Description" hint="Course description for this week's work">
                        </v-text-field>
<br><br>
                        <h4>UPLOAD RESOURCES</h4>
                        
                        <br>
                        <v-divider></v-divider>
                        <br>
                        <v-layout row full-width justify-space-around="" align-content-space-between="">
                            <v-flex md4 centered>
                                <v-btn color="accent"><upload-button title="NOTES" :selectedCallback="fileSelectedFunc">
</upload-button></v-btn>
                            </v-flex>
                            <v-flex md4>
                                <v-btn color="accent"><upload-button title="SLIDES" :selectedCallback="fileSelectedFunc">
</upload-button></v-btn>
                            </v-flex>
                            <v-flex md4>
                                <v-btn color="accent"><upload-button title="VIDEO" :selectedCallback="fileSelectedFunc">
</upload-button></v-btn>
                            </v-flex>
                        </v-layout>
                    
<br><br>
                    <v-spacer></v-spacer> 
                    <v-btn
                        color="primary"
                        @click="e1 = 3"
                        >
                        Continue
                    </v-btn>

                    <v-btn flat>SAVE AS DRAFT</v-btn>
                    </v-container>
                </v-stepper-content>
                 <v-stepper-content step="3">
                    <v-container>
                        <v-text-field label="Title" hint="Title for this week's work">
                        </v-text-field>
                         <v-text-field label="Description" hint="Course description for this week's work">
                        </v-text-field>
<br><br>
                        <h4>UPLOAD RESOURCES</h4>
                        
                        <br>
                        <v-divider></v-divider>
                        <br>
                        <v-layout row full-width justify-space-around="" align-content-space-between="">
                            <v-flex md4 centered>
                                <v-btn color="accent"><upload-button title="NOTES" :selectedCallback="fileSelectedFunc">
</upload-button></v-btn>
                            </v-flex>
                            <v-flex md4>
                                <v-btn color="accent"><upload-button title="SLIDES" :selectedCallback="fileSelectedFunc">
</upload-button></v-btn>
                            </v-flex>
                            <v-flex md4>
                                <v-btn color="accent"><upload-button title="VIDEO" :selectedCallback="fileSelectedFunc">
</upload-button></v-btn>
                            </v-flex>
                        </v-layout>
                    
<br><br>
                    <v-spacer></v-spacer> 
                    <v-btn
                        color="primary"
                        @click="e1 = 4"
                        >
                        Continue
                    </v-btn>

                    <v-btn flat>SAVE AS DRAFT</v-btn>
                    </v-container>
                </v-stepper-content>
                 <v-stepper-content step="4">
                    <v-container>
                        <v-text-field label="Title" hint="Title for this week's work">
                        </v-text-field>
                         <v-text-field label="Description" hint="Course description for this week's work">
                        </v-text-field>
<br><br>
                        <h4>UPLOAD RESOURCES</h4>
                        
                        <br>
                        <v-divider></v-divider>
                        <br>
                        <v-layout row full-width justify-space-around="" align-content-space-between="">
                            <v-flex md4 centered>
                                <v-btn color="accent"><upload-button title="NOTES" :selectedCallback="fileSelectedFunc">
</upload-button></v-btn>
                            </v-flex>
                            <v-flex md4>
                                <v-btn color="accent"><upload-button title="SLIDES" :selectedCallback="fileSelectedFunc">
</upload-button></v-btn>
                            </v-flex>
                            <v-flex md4>
                                <v-btn color="accent"><upload-button title="VIDEO" :selectedCallback="fileSelectedFunc">
</upload-button></v-btn>
                            </v-flex>
                        </v-layout>
                    
<br><br>
                    <v-spacer></v-spacer> 
                    <v-btn
                        color="primary"
                        @click="e1 = 5"
                        >
                        Continue
                    </v-btn>

                    <v-btn flat>SAVE AS DRAFT</v-btn>
                    </v-container>
                </v-stepper-content>
                 <v-stepper-content step="5">
                    <v-container>
                        <v-text-field label="Title" hint="Title for this week's work">
                        </v-text-field>
                         <v-text-field label="Description" hint="Course description for this week's work">
                        </v-text-field>
<br><br>
                        <h4>UPLOAD RESOURCES</h4>
                        
                        <br>
                        <v-divider></v-divider>
                        <br>
                        <v-layout row full-width justify-space-around="" align-content-space-between="">
                            <v-flex md4 centered>
                                <v-btn color="accent"><upload-button title="NOTES" :selectedCallback="fileSelectedFunc">
</upload-button></v-btn>
                            </v-flex>
                            <v-flex md4>
                                <v-btn color="accent"><upload-button title="SLIDES" :selectedCallback="fileSelectedFunc">
</upload-button></v-btn>
                            </v-flex>
                            <v-flex md4>
                                <v-btn color="accent"><upload-button title="VIDEO" :selectedCallback="fileSelectedFunc">
</upload-button></v-btn>
                            </v-flex>
                        </v-layout>
                    
<br><br>
                    <v-spacer></v-spacer> 
                    <v-btn
                        color="primary"
                        @click="e1 = 6"
                        >
                        Continue
                    </v-btn>

                    <v-btn flat>SAVE AS DRAFT</v-btn>
                    </v-container>
                </v-stepper-content>
                 <v-stepper-content step="6">
                    <v-container>
                        <v-text-field label="Title" hint="Title for this week's work">
                        </v-text-field>
                         <v-text-field label="Description" hint="Course description for this week's work">
                        </v-text-field>
<br><br>
                        <h4>UPLOAD RESOURCES</h4>
                        
                        <br>
                        <v-divider></v-divider>
                        <br>
                        <v-layout row full-width justify-space-around="" align-content-space-between="">
                            <v-flex md4 centered>
                                <v-btn color="accent"><upload-button title="NOTES" :selectedCallback="fileSelectedFunc">
</upload-button></v-btn>
                            </v-flex>
                            <v-flex md4>
                                <v-btn color="accent"><upload-button title="SLIDES" :selectedCallback="fileSelectedFunc">
</upload-button></v-btn>
                            </v-flex>
                            <v-flex md4>
                                <v-btn color="accent"><upload-button title="VIDEO" :selectedCallback="fileSelectedFunc">
</upload-button></v-btn>
                            </v-flex>
                        </v-layout>
                    
<br><br>
                    <v-spacer></v-spacer> 
                    <v-btn
                        color="primary"
                        @click="e1 = 6"
                        >
                        Continue
                    </v-btn>

                    <v-btn flat>SAVE AS DRAFT</v-btn>
                    </v-container>
                </v-stepper-content>
            </v-stepper-items>

        </v-stepper>
          </v-flex>
        
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import UploadButton from "./parts/upload-btn";
export default {
  name: "Curriculum",
  props: {
    msg: String
  },
  components: {
    UploadButton
  },
  data() {
    return {
      e1: 1
    };
  }
};
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
