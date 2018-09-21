<template>
	<v-fade-transition mode="out-in">
		<v-container fluid>
			<v-toolbar color="transparent" absolute dense flat class="secondary-toolbar">
				<v-toolbar-title>Inbox</v-toolbar-title>
			</v-toolbar>
			<v-layout fill-height row wrap class="my-4">
				<v-flex xs4>
					<v-list two-line>
						<template v-for="(item, index) in items">
							<v-list-tile
							:key="item.title"
							avatar
							ripple
							@click="toggle(index)"
							>
							<v-list-tile-content>
								<v-list-tile-title>{{ item.title }}</v-list-tile-title>
								<v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
								<v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
							</v-list-tile-content>

							<v-list-tile-action>
								<v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
								<v-icon
								v-if="selected.indexOf(index) < 0"
								color="grey lighten-1"
								>
								star_border
								</v-icon>

								<v-icon
								v-else
								color="yellow darken-2"
								>
								star
								</v-icon>
							</v-list-tile-action>

							</v-list-tile>
							<v-divider
							v-if="index + 1 < items.length"
							:key="index"
							></v-divider>
						</template>
						</v-list>
				</v-flex>
				<v-flex xs8>
					
				</v-flex>
			</v-layout>
		</v-container>
	</v-fade-transition>
</template>

<script>
export default {
	data () {
		return {
			items: []
		}
	}
}
</script>

<style>

</style>
