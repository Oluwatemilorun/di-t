<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column>
        <v-flex xs10>
            <v-card>
                <v-layout row justify-start>
                    <v-flex contain sm12 md4>
                        <img style="max-height:250px;" src="@/assets/morning2.png"/>
                    </v-flex>
                    <v-flex sm12 md7>
                        <v-container>
                            <v-card-title style="text-align:center;font-weight:bold;font-size:18px">
                                Good morning, Aidan
                            </v-card-title>
                            <v-card-text>
                                <h4>You have </h4>
                               <v-icon>notifications</v-icon><a href="#!"> <span>5 new trainees</span></a><br>
                               <v-icon>help</v-icon><a href="#!"> <span>1 new enquiry</span></a><br>
                               <v-icon>notifications</v-icon><a href="#!"> <span>56 new views</span></a><br>
                               <v-icon>money</v-icon><a href="#!"> <span>1 pending payment confirmation</span></a>
                            </v-card-text>
                        </v-container>
                    </v-flex>
                </v-layout>
             </v-card>
        </v-flex>
            <br>
            <v-layout justify-space-around="" row>
                <v-flex sm12 md5>
                    <v-card>
                        <v-card-title centered>
                            <v-icon large >bubble_chart</v-icon>
                            <v-list-tile>
                                    <v-icon large color="amber">star</v-icon><v-icon large color="amber">star</v-icon><v-icon large color="amber">star</v-icon><v-icon large color="amber">star</v-icon><v-icon large color="amber">star_half</v-icon>
                                <br/>
                            </v-list-tile>

                        </v-card-title>
                        <v-slide-y-transition>
                            <v-card-text v-show="show1">
                                <v-list>
                                    <v-divider/>
                                    <v-container>
                                        <v-list>
                                            <v-list-tile 
                                            avatar
                                            ripple
                                            :prepend-icon="people"
                                            >
                                            <v-list-tile-content>
                                                <v-list-tile-title> Luqman Bello  </v-list-tile-title>
                                                <v-list-tile-sub-title class="text--primary"> <v-icon color="amber">star</v-icon><v-icon color="amber">star</v-icon><v-icon color="amber">star</v-icon><v-icon color="amber">star</v-icon><v-icon color="amber">star_half</v-icon>
                                                              </v-list-tile-sub-title>
                                                <v-list-tile-sub-title>This is a lorem ipsum dolor sit amet kinda text</v-list-tile-sub-title>
                                            </v-list-tile-content>


                                        </v-list-tile>
                                        <v-divider/>
                                        <v-list-tile 
                                            avatar
                                            ripple
                                            :prepend-icon="people"
                                            >
                                            <v-list-tile-content>
                                                <v-list-tile-title> Luqman Bello  </v-list-tile-title>
                                                <v-list-tile-sub-title class="text--primary"> <v-icon color="amber">star</v-icon><v-icon color="amber">star</v-icon><v-icon color="amber">star</v-icon><v-icon color="amber">star</v-icon><v-icon color="amber">star_half</v-icon>
                                                              </v-list-tile-sub-title>
                                                <v-list-tile-sub-title>This is a lorem ipsum dolor sit amet kinda text</v-list-tile-sub-title>
                                            </v-list-tile-content>


                                        </v-list-tile>
                                        <v-divider/>
                                        <v-list-tile 
                                            avatar
                                            ripple
                                            :prepend-icon="people"
                                            >
                                            <v-list-tile-content>
                                                <v-list-tile-title> Luqman Bello  </v-list-tile-title>
                                                <v-list-tile-sub-title class="text--primary"> <v-icon color="amber">star</v-icon><v-icon color="amber">star</v-icon><v-icon color="amber">star</v-icon><v-icon color="amber">star</v-icon><v-icon color="amber">star_half</v-icon>
                                                              </v-list-tile-sub-title>
                                                <v-list-tile-sub-title>This is a lorem ipsum dolor sit amet kinda text</v-list-tile-sub-title>
                                            </v-list-tile-content>


                                        </v-list-tile>
                                    </v-list>
                                </v-container>
                                </v-list>
                            </v-card-text>
                            </v-slide-y-transition> 
                        <v-card-actions>
                              <v-icon>today</v-icon>  <v-btn-toggle>JULY REVIEWS</v-btn-toggle>
                                <v-spacer></v-spacer>
                                <v-btn icon  @click="show1=!show1">
                                   <v-icon> keyboard_arrow_right</v-icon>
                                </v-btn>
                            </v-card-actions> 
                    </v-card>
                </v-flex>
                <v-flex sm12 md5>
                    <v-card>
                        <v-card-title>
                            <v-icon large>people</v-icon>
                            <v-list-tile>
                                Trainee attendance for last session
                            </v-list-tile>
                        </v-card-title>
                        <v-card-actions>
                            
                            <v-icon>schedule</v-icon><v-btn-toggle flat>PENDING</v-btn-toggle>
                            <v-spacer></v-spacer>
                            <v-btn icon @click="show2=!show2">
                                <v-icon> keyboard_arrow_right</v-icon>
                            </v-btn>

                        </v-card-actions> 
                        <v-slide-y-transition>
                            <v-card-text v-show="show2">
                                <!-- <v-data-table>

                                </v-data-table> -->
                            </v-card-text>
                        </v-slide-y-transition>
                    </v-card>
                </v-flex>
            </v-layout>
            <br>
            <v-layout justify-space-around="" row>
                <v-flex sm12 >
                    <v-card style="background-image:url('./images/bg3.jpg');background-size:cover;">
                        <v-card-title fluid pa-2 >
                                
                        </v-card-title>
                        <v-card-text background-color="primary">
                                <v-list-tile-title style="z-index:300;font-weight:bolder;letter-spacing:2px;color:white;">
                                    PLC and Automated Instruments
                                </v-list-tile-title><br>
                                <v-list-tile-subtitle style="font-weight:bold;color:white;">
                                    July 31, 2018
                                </v-list-tile-subtitle>
                            
                        </v-card-text>  
                        <v-card-actions style="background-color:white;opacity:1;">
                            <v-icon>today</v-icon><v-btn-toggle flat>NEXT CLASS</v-btn-toggle>
                            <v-spacer></v-spacer>
                            <v-btn icon >
                                <v-icon> keyboard_arrow_right</v-icon>
                            </v-btn>
                        </v-card-actions> 
                    </v-card>
                </v-flex>
               
            </v-layout>
            <br>
            <v-layout justify-space-around="" row>
                <v-flex sm12 md3>
                    <v-card>
                        <v-card-media height="150px" style="background-size:contain !important;" src="./illustrations/resume.svg">
                                
                            </v-card-media>   
                            <v-card-actions>
                                  <v-spacer></v-spacer>
                                <v-btn flat> 
                                        TRAINEE ASSESSMENTS
                                </v-btn>
                            </v-card-actions> 
                    </v-card>
                </v-flex>
                <v-flex sm12 md3>
                    <v-card>
                        <v-card-media height="150px" style="background-size:contain !important;" src="./illustrations/organise.svg">
                                
                            </v-card-media>   
                            <v-card-actions>
                                  <v-spacer></v-spacer>
                                <v-btn flat> 
                                    ANALYTICS
                                </v-btn>
                            </v-card-actions> 
                    </v-card>
                </v-flex>
                <v-flex sm12 md3>
                    <v-card>
                        <v-card-media height="150px" style="background-size:contain !important;" src="./illustrations/notebook_1.svg">
                                
                            </v-card-media>   
                            <v-card-actions>
                                  <v-spacer></v-spacer>
                                <v-btn flat> 
                                   COURSE RESOURCES
                                </v-btn>
                            </v-card-actions> 
                    </v-card>
                </v-flex>
            </v-layout>
        <br>
            <v-layout justify-space-around="" row>
                <v-flex sm12 md3>
                    <v-card>
                        <v-card-media height="150px" style="background-size:contain !important;" src="./illustrations/events.svg">
                                
                            </v-card-media>   
                            <v-card-actions>
                                  <v-spacer></v-spacer>
                                <v-btn flat> 
                                    TO DO LIST
                                </v-btn>
                            </v-card-actions> 
                    </v-card>
                </v-flex>
                <v-flex sm12 md3>
                    <v-card>
                        <v-card-media height="150px" style="background-size:contain !important;" src="./illustrations/organise.svg">
                                
                            </v-card-media>   
                            <v-card-actions>
                                  <v-spacer></v-spacer>
                                <v-btn flat> 
                                    ANALYTICS
                                </v-btn>
                            </v-card-actions> 
                    </v-card>
                </v-flex>
                <v-flex sm12 md3>
                    <v-card>
                        <v-card-media height="150px" style="background-size:contain !important;" src="./illustrations/notebook_1.svg">
                                
                            </v-card-media>   
                            <v-card-actions>
                                  <v-spacer></v-spacer>
                                <v-btn flat> 
                                   COURSE RESOURCES
                                </v-btn>
                            </v-card-actions> 
                    </v-card>
                </v-flex>
            </v-layout>
        <br>
         <br>
            <v-layout justify-space-around="" >
                <v-flex xs12 sm12 md5>
                    <v-card>
                            <v-card-media height="200px" style="background-size:contain !important;" src="./illustrations/data.svg">
                                
                            </v-card-media>   
                            <v-card-actions>
                                  <v-spacer></v-spacer>
                                <v-btn flat> 
                                    ANALYTICS
                                </v-btn>
                            </v-card-actions> 
                    </v-card>
                </v-flex>
                <v-flex xs12 sm12 md5>
                    <v-card>
                        <v-card-media height="200px" style="background-size:contain !important;" src="./illustrations/social_media.svg">
                            <v-container fluid>
                                
                            </v-container>
                        </v-card-media>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                                <v-btn flat> 
                                    SHARE TO SOCIAL MEDIA
                                </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  
  name: 'Course',
  props: {
    msg: String
  },
  data:()=>({
        show1:false,
        show2:false,
      })
  
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
