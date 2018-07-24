<template>
    <v-fade-transition>
        <v-data-table v-model="selected" :headers="headers" :items="items" :search="search" :select-all="selectAll">
            <template slot="items" slot-scope="props">
                <td><v-checkbox v-model="props.selected" primary hide-details ></v-checkbox></td>
                <td v-for="(val, index) in headers" v-bind:key="index">
					{{ props.item[val.value] }}
				</td>
                <!-- <td>{{ props.item.calories }}</td>
                <td>{{ props.item.fat }}</td>
                <td>{{ props.item.carbs }}</td>
                <td>{{ props.item.protein }}</td>
                <td>{{ props.item.iron }}</td> -->
            </template>
            <div slot="no-results" :value="true" class="text-center-xs">
                Your search for "{{ search }}" found no results.
            </div>
        </v-data-table>
    </v-fade-transition>
</template>

<script>
    export default {
        props: ['headers', 'search', 'items', 'value', 'selectAll', 'selected']
    }
</script>