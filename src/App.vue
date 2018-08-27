<template>
	<v-app class="white">
		<router-view :addCourse="() => createCourseDialog = true" />

		<!-- defaults that could be used by all components -->
		<AddCourse :init="createCourseDialog" :close="() => createCourseDialog = false" />

	</v-app>
</template>


<script>

import AddCourse from '@/components/_courses/AddCourse'

export default {
	components: {
		AddCourse
	},
	data () {
		return {
			createCourseDialog: false,
		}
	},
	methods: {
		
	},
	name: 'App'
}
</script>

<style>
.capitalize {
	text-transform: capitalize !important;
}
</style>

