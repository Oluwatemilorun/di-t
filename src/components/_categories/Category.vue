<template>
	<v-slide-y-transition origin="bottom">
		<v-card hover :to="`categories/${item.name}`">
			<v-card-media
				class="white--text"
				height="200px"
				:src="item.cover"
			>
			</v-card-media>
			<v-card-title primary-title>
				<div>
					<div class="headline">{{item.name}}</div>
					<span class="grey-text">{{item.description}}</span>
				</div>
			</v-card-title>
		</v-card>
	</v-slide-y-transition>
</template>

<script>
export default {
	props: ['item']
}
</script>
