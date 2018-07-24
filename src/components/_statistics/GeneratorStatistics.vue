<template>
    <v-fade-transition>
        <v-container wrap>
            <v-flex xs12>
                <v-card white>
                    <v-container fill-height fluid d-block py-0>
                        <v-layout row align-center>
                            <v-flex pa-0>
                                <span pt-1 class="bold-text black--text">Generator usage</span>
                                <v-menu open-on-hover offset-y>
                                    <v-btn slot="activator" open-on-hover height="10px" icon><v-icon>mdi-help-circle</v-icon></v-btn>
                                    <v-list>
                                        <v-list-tile>
                                            <v-list-tile-title>Usage of generators per day</v-list-tile-title>
                                        </v-list-tile>
                                    </v-list>
                                </v-menu>
                            </v-flex>
                            <v-spacer></v-spacer>
                            <v-flex xs3>
                                <v-select :items="filterYData" v-model="filterYValue" label="Intervals"></v-select>
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                            <v-flex xs12>
                                <div style="height: 300px" id="chart"></div>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
            <v-flex xs12 mt-3>
                <v-card white>
                    <v-card-title>
                        <div class="headline">Installed Generators</div>
                        <v-spacer></v-spacer>
                        <v-text-field solo v-model="search" append-icon="mdi-magnify" label="Search users" single-line hide-details></v-text-field>
                    </v-card-title>
                    <Table :selected="selected" :headers="headers" :search="search" :items="generators" :selectAll="selectAll"></Table>
                </v-card>
            </v-flex>
        </v-container>
    </v-fade-transition>
</template>

<script>
    import Table from '@/components/parts/Table'
    export default {
        components: {
            Table
        },
        data () {
            return {
                filterYFormat: false,
                filterYData: ['Yearly'],
                filterYValue: 'Yearly',
                search: "",
                selectAll: true,
                selected: [],
                headers: [
                    { text: "Generator", align: "left", sortable: true, value: "name" },
                    { text: "Total % Usage", value: "usage" },
                    { text: "Date Installed", value: "date" }
                ],
                generators: [
                    { 
                        name: 'Generator 1',
                        usage: 0.5,
                        dailyUsage: [
                            { day: 'Monday', hours: 10},
                            { day: 'Tuesday', hours: 15},
                            { day: 'Wednesday', hours: 5},
                            { day: 'Thursday', hours: 2},
                            { day: 'Friday', hours: 4},
                            { day: 'Saturday', hours: 11},
                            { day: 'Sunday', hours: 9}
                        ],
                        date: 'Sunday, May 27, 2018'
                    },
                    { 
                        name: 'Generator 2',
                        usage: 0.1,
                        dailyUsage: [
                            { day: 'Monday', hours: 4},
                            { day: 'Tuesday', hours: 4},
                            { day: 'Wednesday', hours: 2},
                            { day: 'Thursday', hours: 5},
                            { day: 'Friday', hours: 15},
                            { day: 'Saturday', hours: 10},
                            { day: 'Sunday', hours: 5}
                        ],
                        date: 'Sunday, May 27, 2018'
                    },
                    { 
                        name: 'Generator 3',
                        usage: 0.4,
                        dailyUsage: [
                            { day: 'Monday', hours: 10},
                            { day: 'Tuesday', hours: 5},
                            { day: 'Wednesday', hours: 17},
                            { day: 'Thursday', hours: 17},
                            { day: 'Friday', hours: 5},
                            { day: 'Saturday', hours: 1},
                            { day: 'Sunday', hours: 10}
                        ],
                        date: 'Sunday, May 27, 2018'
                    },
                ]
            }
        },
        methods: {
            drawChart () {
                let data = google.visualization.arrayToDataTable([
                    ['Year', 'Sales', 'Expenses'],
                    ['2004',  1000,      400],
                    ['2005',  1170,      460],
                    ['2006',  660,       1120],
                    ['2007',  1030,      540]
                ]);

                // let data = new google.visualization.DataTable();
                // data.addColumn('string', 'Hours');
                // data.addColumn('date', 'Days');

                this.generators.forEach(gen => {
                    gen.dailyUsage.forEach(use => {
                        // data.addRows([
                        //     [gen]

                        // ])
                    })
                });

                let options = {
                    // curveType: 'function',
                    legend: 'left'
                };

                let chart = new google.visualization.LineChart(document.getElementById('chart'));

                chart.draw(data, options);
            }
        },
        mounted () {
            google.charts.setOnLoadCallback(() => {this.drawChart()});
        }
    }
</script>