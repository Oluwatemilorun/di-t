<template>
	<v-dialog
		v-model="init" 
		persistent
		max-width="500px"
		transition="dialog-transition"
		scrollable
	>
		<v-card raised class="pa-1" style="border-radius: 10px;">
			<v-card-title primary-title>
				<span class="title">Add a course</span>
				<v-spacer></v-spacer>
				<v-btn icon @click.stop="close">
					<v-icon>mdi-close</v-icon>
				</v-btn>
			</v-card-title>
			<v-layout row wrap>
				<v-flex xs12>
					<v-stepper v-model="e1" class="elevation-0" @input="stepChange" style="height: 100%; overflow-y: auto;">
						<v-stepper-header class="dense flat pa-0 elevation-0" style="height: 45px">
							<v-stepper-step color="green lighten-3" class="pa-4" :complete="e1 > 1" step="1"></v-stepper-step>
							<v-divider></v-divider>
							<v-stepper-step color="green lighten-3" class="pa-4" :complete="e1 > 2" step="2"></v-stepper-step>
							<v-divider></v-divider>
							<v-stepper-step color="green lighten-3" class="pa-4" :complete="e1 > 3" step="3"></v-stepper-step>
							<v-divider></v-divider>
							<v-stepper-step color="green lighten-3" class="pa-4" :complete="e1 > 4" step="4"></v-stepper-step>
							<v-divider></v-divider>
							<v-stepper-step color="green lighten-3" class="pa-4" :complete="e1 > 5" step="5"></v-stepper-step>
						</v-stepper-header>
						<v-stepper-content step="1" class="pa-0">
							<v-container grid-list-sm fluid>
								<v-form v-model="formValid.step_1">
									<v-layout row wrap>
										<v-flex xs12>
											<v-text-field
												v-model="courseTitle"
												label="Course title or name"
												placeholder="My awesome course"
												color="secondary"
												multiple
												:rules="[() => !!courseTitle || 'Course title is required']"
											/>
										</v-flex>
										<v-flex xs12>
											<v-autocomplete
												v-model="courseCategory"
												:items="categories"
												label="Course Category"
												placeholder="Select..."
												color="secondary"
												:rules="[() => !!courseCategory || 'Course category is required']"
											/>
										</v-flex>
										<v-flex xs12>
											<v-select
												v-model="trainingType"
												:items="trainings"
												label="Training type"
												color="secondary"
												:rules="[() => !!trainingType || 'Please select a training type']"
											/>
										</v-flex>
										<v-flex xs12>
											<v-textarea
												v-model="courseDescription"
												label="Course description"
												placeholder="An awesome course"
												color="secondary"
												rows="3"
												:no-resize="true"
												counter="150"
												:rules="[
													() => !!courseDescription || 'Please enter a brief description about this course',
													() => !!courseDescription && courseDescription.length <= 150 || 'Description should be at most 150 characters'
												]"
											/>
										</v-flex>
									</v-layout>
								</v-form>
							</v-container>
						</v-stepper-content>
						<v-stepper-content step="2" class="pa-0">
							<v-container grid-list-sm fluid>
								<v-form v-model="formValid.step_2">
									<v-layout row wrap>
										<v-flex xs12>
											<v-text-field
												v-model="institution"
												label="Institution"
												color="secondary"
												:rules="[() => !!institution || 'Institution is required']"
											/>
										</v-flex>
										<v-flex xs12>
											<v-select
												v-model="certificates"
												:items="certificateTypes"
												attach
												chips
												label="Certificate types"
												color="secondary"
												multiple
												:rules="[() => !!certificates.length >= 1 || 'Select at least a certificate type']"
											></v-select>
										</v-flex>
										<v-flex v-if="certificates.find(a => a == 'others')" xs12>
											<v-combobox
												v-model="otherCertificates"
												label="Other certificate types"
												chips
												color="secondary"
												clearable
												single-line
												multiple
												hint="Hit enter to input certificate"
												persistent-hint
												:rules="[() => !!otherCertificates.length >= 1 || 'Input at least a certificate type']"
											>
											</v-combobox>
										</v-flex>
										<v-flex xs12 class="mt-2">
											<v-layout row wrap class="py-1 grey lighten-4">
												<v-card v-for="(file, index) in certificateFiles" :key="index" width="120px" height="120px" hover class="ma-2" style="position: relative">
													<v-layout align-center justify-center fill-height column wrap :ref="`pdf_thumb_${file.index}`"> </v-layout>
													<v-btn small icon light style="position: absolute; top: 0px; right: 0px;" @click="removeFile(file.index)">
														<v-icon>mdi-close</v-icon>
													</v-btn>
												</v-card>
												<label for="file-upload">
													<v-card width="120px" height="120px" hover class="ma-2">
														<v-layout align-center justify-center fill-height column wrap>
															<v-icon>mdi-file-pdf</v-icon>
															<p class="text-xs-center caption">Add Certificate</p>
														</v-layout>
													</v-card>
													<input type="file" name="file-upload" id="file-upload" accept=".pdf" hidden @change="loadFile($event)">
												</label>
											</v-layout>
										</v-flex>
									</v-layout>
								</v-form>
							</v-container>
						</v-stepper-content>
						<v-stepper-content step="3" class="pa-0">
							<v-container grid-list-sm fluid>
								<v-form v-model="formValid.step_3">
									<v-layout row wrap>
										<v-flex xs12>
											<v-autocomplete
												v-model="noClasses"
												:items="classes"
												label="Number of classes"
												hint="How many classes will training take"
												placeholder="Select..."
												color="secondary"
												:rules="[() => !!noClasses || 'Select number of classes']"
												
											/>
										</v-flex>
										<v-flex xs12>
											<v-select
												v-model="classFrequency"
												:items="['Daily', 'Weekly', 'Monthly']"
												label="Class frequency"
												hint="How often classes will hold"
												color="secondary"
												:rules="[() => !!classFrequency || 'Select class frequency']"
											></v-select>
										</v-flex>
										<v-flex xs12>
											<v-select
												v-model="daysOfWeek"
												:items="['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']"
												attach
												chips
												label="Days of week"
												color="secondary"
												multiple
												:rules="[() => !!daysOfWeek.length >= 1 || 'Select at least a day of the week']"
											></v-select>
										</v-flex>
										<v-flex xs12>
											<v-text-field
												v-model="startDate"
												name="date"
												label="Date of Instruction"
												color="secondary"
												id="date_property"
												:rules="[() => !!startDate || 'Start date is required']"
												@focus="dateDialog = true"
											></v-text-field>
											<v-dialog
												v-model="dateDialog"
												max-width="300px"
												transition="dialog-transition"
											>
												<v-date-picker full-width  color="accent" header-color="secondary" v-model="startDate"></v-date-picker>
											</v-dialog>
										</v-flex>
										<v-flex xs12>
											<v-text-field
												v-model="trainingCost"
												label="Training cost"
												color="secondary"
												prefix="$"
											></v-text-field>
										</v-flex>
									</v-layout>
								</v-form>
							</v-container>
						</v-stepper-content>
						<v-stepper-content step="4" class="pa-0">
							<v-container grid-list-sm fluid>
								<v-form v-model="formValid.step_4">
									<v-layout row wrap>
										<v-flex xs12>
											<v-autocomplete
												ref="country"
												:rules="[() => !!country || 'Country is required']"
												:items="countries"
												v-model="country"
												label="Country"
												color="accent"
												placeholder="Select..."
												required
											></v-autocomplete>
										</v-flex>
									</v-layout>
								</v-form>
							</v-container>
						</v-stepper-content>
						<v-stepper-content step="5" class="pa-0">
							<v-layout justify-center align-center column wrap class="pa-5">
									<v-avatar
									size="120"
									color="green"
								>
									<v-icon color="white" size="70">mdi-check</v-icon>
								</v-avatar>
								<h3 class="text-xs-center font-weight-light headline mt-3 mb-5">Course created successfully</h3>
								<v-btn flat color="accent" dark >go to dashboard</v-btn>
							</v-layout>
						</v-stepper-content>
					</v-stepper>
				</v-flex>
			</v-layout>

			<v-card-actions>
				<v-btn v-if="e1 > 1" :disabled="saving" icon @click.native="e1 = e1 - 1">
					<v-icon>mdi-chevron-left</v-icon>
				</v-btn>
				<v-spacer></v-spacer>
				<v-btn round :disabled="!formValid[`step_${e1}`]" :loading="saving" color="secondary" light class="mt-3" @click="saveStep(e1)">save & continue</v-btn>
			</v-card-actions>
		</v-card>
		
	</v-dialog>
</template>


<style scoped>
.doc-preview-wrapper {
    width: 100%;
}
</style>

<script>

import pdfjsLib from "pdfjs-dist";
import { loadCountries } from "@/modules/countries";

export default {
	props: ['init', 'close'],
	data () {
		return {
			e1: 2,
			formValid: {
				step_1: false,
				step_2: false,
				step_3: false,
				step_4: false,
			},
			saving: false,
			courses: [],
			courseTitle: null,
			courseCategory: null,
			categories: ['One'],
			trainings: ['First timer', 'Refresher'],
			trainingType: null,
			courseDescription: null,
			certificateTypes: ['University degree', 'Technical college degree', 'Professional degree', 'others'],
			certificates: [],
			institution: null,
			certificateFiles: [],
			otherCertificates: [],
			noClasses: [],
			classes: Array.from(Array(10), (_,i) => i+1),
			classFrequency: null,
			daysOfWeek: [],
			startDate: null,
			dateDialog: false,
			trainingCost: null,
			countries: loadCountries(),
			country: null
		}
	},
	methods: {
		saveStep (e1) {
			this.e1 += 1;
		},
		stepChange () {

		},
		loadFile (e) {
			let reader = new FileReader();
			reader.onload = () => {
				let fileData = {
					index: this.certificateFiles.length + 1,
					src: reader.result,
					file: e.target.files[0]
				}
				this.certificateFiles.push(fileData);
				this.createThumbnail(fileData);
				// e.target.files[0]
			}
			reader.readAsDataURL(e.target.files[0]);
		},
		removeFile (fileIndex) {
			for (let i = this.certificateFiles.length - 1; i >= 0; i--) {
				let file = this.certificateFiles[i];
				if (file.index === fileIndex) {
					this.certificateFiles.splice((i), 1);
					break;
				}
			}

			// this.certificateFiles = this.certificateFiles.filter(file => file.index !== fileIndex);
		},
		createThumbnail (fileData) {
			setTimeout(() => {
				let elRef = this.$refs[`pdf_thumb_${fileData.index}`][0]
				pdfjsLib.getDocument(fileData.src)
					.then((doc) => {
						doc.getPage(1)
							.then(page => {
								let vp = page.getViewport(1);
								let canvas = document.createElement("canvas");
									canvas.width = 120;
									canvas.height = 120;
								
								let scale = Math.min(canvas.width / vp.width, canvas.height / vp.height);
								
								return page.render({
									canvasContext: canvas.getContext("2d"), 
									viewport: page.getViewport(scale)
								})
									.then(() => {
										return canvas;
									});
							})
							.then(canvas => {
								elRef.appendChild(canvas);
							})
					})
					.catch(error => console.log(error));

			}, 500);
		}
	}
}
</script>
