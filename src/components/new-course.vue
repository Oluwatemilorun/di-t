<template>
  <v-container fluid>
    <v-slide-y-transition v-show="!complete" mode="out-in">
      <v-layout row align-center>
        <v-flex xs12>
        <template>
             <v-stepper v-model="e1" >
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Basics</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Certifications    </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3">Schedule</v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step step="4" :complete="e1 > 4">Location</v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step step="5" :complete="e1 > 5">Payment</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-container
          class="mb-5"
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
                <v-flex xs12>
            <v-combobox
                    v-model="diff"
                    :items= "difficulty"
                    label="Training Type*"
            ></v-combobox>
        </v-flex>
                <v-textarea
                    v-model="course_desc"
                    multi-line="true"
                    counter="140"
                    label="Course description*"
                    hint="What are trainees expected to know after taking this course?"
                >

                </v-textarea>
                
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
        <v-container contain height="100px">
          <v-layout contain row justify-space-between="">
          <v-flex xs5>
            <v-date-picker>
              <v-date-picker-header>
                CHOOSE START DATE
              </v-date-picker-header>
            </v-date-picker>
          </v-flex>
          <v-flex xs5>
            <v-time-picker>
              
              <v-time-picker-title color="black">MEETING TIME</v-time-picker-title>
            </v-time-picker>
          </v-flex>
        </v-layout>
        </v-container>
       
        <v-flex>
            <v-text-field
                v-model="fees"
                hide-details=""
                label="How much would training cost?"
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
          <v-flex sm12>
                <v-combobox :items="countries" v-model="country" label="Country">
                </v-combobox>
          </v-flex>
            <v-layout justify-space-between row>
              
              <v-flex md5>
                  <v-text-field
                    v-model="city"
                    hide-details=""
                    label="City"
                ></v-text-field>
              </v-flex>
              <v-flex md5>
                  <v-text-field
                    v-model="zip"
                    hide-details=""
                    label="Zip Code"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row justify-space-between>
              <v-flex md5>
                  <v-text-field
                    v-model="town"
                    hide-details=""
                    label="Town"
              ></v-text-field>
              </v-flex>
              <v-flex md5>
                  <v-text-field
                    v-model="landmark"
                    hide-details=""
                    label="Landmark"
                    hint="Closest landmark to training venue"
              ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex>
                <v-text-field v-model="street" hint="Including building no. and room no. " label="Street address">

                </v-text-field>
              </v-flex>
            </v-layout>
            
        </v-container>
         <v-btn
          color="primary"
          @click="e1 = 5">
          Continue
        </v-btn>

        <v-btn flat > SAVE AS DRAFT</v-btn>
    </v-stepper-content>
    <v-stepper-content step="5">
        <v-container>
            
        </v-container>
         <v-btn
          color="primary"
          @click.native="complete=true">
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
    <v-slide-x-transition v-show="complete">
      <CompleteCourse/>
    </v-slide-x-transition>
  </v-container>
</template>

<script>
import UploadButton from "./parts/upload-btn";
import CompleteCourse from "./course-complete";
export default {
  name: "CreateCourse",
  props: {
    msg: String
  },
  components: {
    UploadButton,
    CompleteCourse
  },
  data() {
    return {
      complete :false,
      landmark:'',
      street:'',
      town:'',
      city:'',
      course_desc:'',
      zip:'',
      fees:'',

      e1: 0,
      select: "",
      items: "Manual Handling,Counter Balance Forklift,Reach Truck,Turret Truck,Abrasive Wheels,Patient Handling,Digital Marketing,Video Making,Social Media,Mindfulness,Sales,Working at heights,Forklift Instructor,Dangerous Goods,Food Hygiene,HACCP,Car Driving Lessons,CPC ,Incoterms,Freight Operations,Warehouse Operations,Stock Management,Airfreight Operations,Roadfreight Operations,Deepsea Operations,Mechanical Pallet Truck,Supervisory Management,Facebook,Instagram,LinkedIn,Website Management,Security Staff".split(
        ","
      ),
      diff: "First-Timer",
      difficulty: ["First-Timer", "Refresher"],
      qualification: "",
      qualifications: [
        "University Degree",
        "Technical College Degree",
        "Professional Degree",
        "Others"
      ],
      country:'Ireland',
      countries:  ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
	,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
	,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
	,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
	,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
	,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
	,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
	,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
	,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
	,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
	,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
	,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
	,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
	,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay"
	,"Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"],
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
      classes: 6,
      often: "Daily",
      period: ["Daily","Weekly", "Fortnightly"],
      day: "Mon-Fri",
      days: [
        "Mon-Fri",
        "Sundays",
        "Mondays",
        "Tuesdays",
        "Wednesdays",
        "Thursdays",
        "Fridays",
        "Saturdays"
      ],
      venue: ""
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
