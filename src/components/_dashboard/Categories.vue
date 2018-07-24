<template>
    <router-view :showSnackbar="showSnackbar" :showLoader="showLoader" />
</template>

<script>
export default {
	props: ['showSnackbar', 'showLoader']
}
</script>
