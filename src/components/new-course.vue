<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout row align-center>
        <v-flex xs12>
        <template>
             <v-stepper v-model="e1" >
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Basics</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Certifications    </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">Schedule and Fees</v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step step="4">Curriculum</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-container
          class="mb-5"
          style="height:500%"
        >
        <v-layout>
            <v-flex xs12>
                <v-combobox
                    v-model="category"
                    :items="categories"
                    label="Course Category*"
                ></v-combobox>
                <v-combobox
                    v-model="select"
                    :items="items"
                    label="Course Title*"
                ></v-combobox>
                <v-text-field
                    v-model="course_desc"
                    multi-line="true"
                    counter="140"
                    label="Course description*"
                    hint="What are trainees expected to know after taking this course?"
                >

                </v-text-field>
            </v-flex>
        </v-layout>
        </v-container>

       <v-spacer></v-spacer> <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>

        <v-btn flat>SAVE AS DRAFT</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-container
          class="mb-5"
        >
        <v-layout column="">
            <v-flex xs12>
                <v-text-field 
                label="Institution*"
                hint="Where did you get your certification?"
                >

                </v-text-field>
            </v-flex> 
            <v-flex xs12>
                <v-combobox
                    v-model="qualification"
                    :items="qualifications"
                    label="Certification Type*"
                    hint="What type of certification?"
                ></v-combobox>
            </v-flex>
            <v-flex >
               <v-btn color="accent"> <upload-button title="Upload Certificate file" :selectedCallback="fileSelectedFunc">
</upload-button> </v-btn>
            </v-flex>
           
        </v-layout>
        
        </v-container>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>

        <v-btn flat>SAVE AS DRAFT</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-container
          class="mb-5"
          color="grey lighten-1"
        >
        <v-flex xs12>
            <v-combobox
                    v-model="classes"
                    :items=[1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
                    label="How many classes would training take?*"
            ></v-combobox>
        </v-flex>
        <v-flex xs12>
            <v-combobox
                    v-model="often"
                    :items="period"
                    label="How often are classes going to occur?*"
            ></v-combobox>
        </v-flex> 
        <v-flex xs12>
            <v-combobox
                    v-model="day"
                    :items="days"
                    label="Day of week*"
            ></v-combobox>
        </v-flex>
        <v-flex>
            <v-text-field
                v-model="fees"
                hide-details=""
                label="How much would training cost?"
            ></v-text-field>
        </v-flex>
        <v-flex>
            <v-text-field
                v-model="venue"
                hide-details=""
                label="Where would training take place"
                hint="City -- Town -- Street"
            ></v-text-field>
        </v-flex>
        
        </v-container>

        <v-btn
          color="primary"
          @click="e1 = 4">
          Continue
        </v-btn>

        <v-btn flat > SAVE AS DRAFT</v-btn>
      </v-stepper-content>

    <v-stepper-content step="4">
        <v-container>
            
        </v-container>
         <v-btn
          color="primary"
          @click="e1 = 4">
          Continue
        </v-btn>

        <v-btn flat > SAVE AS DRAFT</v-btn>
    </v-stepper-content>

    </v-stepper-items>
  </v-stepper>
        </template>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import UploadButton from './parts/upload-btn';
export default {
  name: "CreateCourse",
  props: {
    msg: String
  },
  components:{
      UploadButton
  },
  data() {
    return {
      e1: 0,
      select: "",
      items: "Manual Handling,Counter Balance Forklift,Reach Truck,Turret Truck,Abrasive Wheels,Patient Handling,Digital Marketing,Video Making,Social Media,Mindfulness,Sales,Working at heights,Forklift Instructor,Dangerous Goods,Food Hygiene,HACCP,Car Driving Lessons,CPC ,Incoterms,Freight Operations,Warehouse Operations,Stock Management,Airfreight Operations,Roadfreight Operations,Deepsea Operations,Mechanical Pallet Truck,Supervisory Management,Facebook,Instagram,LinkedIn,Website Management,Security Staff".split(
        ","
      ),
      qualification:'',
      qualifications:[
          'University Degree',
          'Technical College Degree',
          'Professional Degree',
          "Others"
      ],
      category: "",
      categories: `Technical or Technology Training,
                    Quality Training,
                    Skills Training,
                    Soft Skills Training,
                    Legal Training,
                    Team Training,
                    Managerial Training,
                    Safety Training,
                    Health Training, 
                    Digital Media Training,
                    Industrial Training,
                    Business,
                    Freight Training,
                    Vehicles and Motoring, `.split(","),
    classes:6,
    often:'Weekly',
    period:["Weekly", 'Fortnightly',"Monthly"],
    day:'Sundays',
    days:['Sundays', 'Mondays','Tuesdays', 'Wednesdays','Thursdays', 'Fridays','Saturdays'],
    venue:''
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
