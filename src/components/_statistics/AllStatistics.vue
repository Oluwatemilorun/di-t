<template>
    <v-fade-transition>
        <v-container row grid-list-lg>
            <v-layout row wrap>
                <v-flex xs12 md6>
                    <v-card color="white">
                        <v-container fill-height fluid d-block>
                            <v-layout row mx-1>
                                <v-flex xs12 pa-0>
                                    <span pt-1 class="bold-text black--text">All usage</span>
                                    <v-menu open-on-hover offset-y>
                                        <!-- <v-btn slot="activator" color="primary" dark>Dropdown</v-btn> -->
                                        <v-btn slot="activator" open-on-hover height="10px" icon><v-icon>mdi-help-circle</v-icon></v-btn>
                                        <v-list>
                                            <v-list-tile>
                                                <v-list-tile-title>Usage of all sources</v-list-tile-title>
                                            </v-list-tile>
                                        </v-list>
                                    </v-menu>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs12 pa-0>
                                    <div id="myPieChart"></div>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
                <v-flex xs12 md6>
                    <v-card color="white">
                        <v-container fill-height fluid d-block>
                            <v-layout row mx-1>
                                <v-flex xs12 pa-0>
                                    <span pt-1 class="bold-text black--text">All usage</span>
                                    <v-menu open-on-hover offset-y>
                                        <!-- <v-btn slot="activator" color="primary" dark>Dropdown</v-btn> -->
                                        <v-btn slot="activator" open-on-hover height="10px" icon><v-icon>mdi-help-circle</v-icon></v-btn>
                                        <v-list>
                                            <v-list-tile>
                                                <v-list-tile-title>Usage of all sources</v-list-tile-title>
                                            </v-list-tile>
                                        </v-list>
                                    </v-menu>
                                </v-flex>
                            </v-layout>
                            <v-layout row wrap>
                                <div id="myPieChart_2"></div>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-fade-transition>
</template>

<script>
    // import DrawChart from '@/modules/DrawCharts'

    export default {
        data () {
            return {
                
            }
        },
        methods: {
            drawPie () {
                // Define the chart to be drawn.
                let data = new google.visualization.DataTable();
                data.addColumn('string', 'Source');
                data.addColumn('number', 'Percentage');
                data.addRows([
                    ['Main', 0.21],
                    ['Generators', 0.78],
                    ['Power out', 0.01]
                ]);

                // chart options
                let chartOptions =  {
                    'legend':'top',
                    // 'is3D':false,
                    // 'width':400,
                    // 'height':250
                }

                // Instantiate and draw the chart.
                let chart = new google.visualization.PieChart(document.getElementById('myPieChart'));
                chart.draw(data, chartOptions);
            },
            drawBar () {
                let data2 = new google.visualization.DataTable({
                    cols: [
                        {id: 'task', label: 'Employee Name', type: 'string'},
                        {id: 'startDate', label: 'Start Date', type: 'date'}
                    ],
                    rows: [
                        { c: [ { v: 'Mike' }, { v: new Date(2008, 1, 28), f: 'February 28, 2008' } ]},
                        { c: [ { v: 'Bob' }, { v: new Date(2007, 5, 1) } ] },
                        { c: [ { v: 'Alice' }, { v: new Date(2006, 7, 16 ) } ] },
                        { c: [ { v: 'Frank' }, { v: new Date(2007, 11, 28) } ] },
                        { c: [ { v: 'Floyd' }, { v: new Date(2005, 3, 13 ) } ] },
                        { c: [ { v: 'Fritz' }, { v: new Date(2011, 6, 1) }
                            ]
                        }
                    ]
                })

                let chartOptions =  {
                    'legend':'top',
                    // 'is3D':false,
                    // 'width':400,
                    // 'height':250
                }
                
                let chart2 = new google.visualization.BarChart(document.getElementById('myPieChart_2'));
                chart2.draw(data2, chartOptions);
            }
        },
        mounted () {
            google.charts.setOnLoadCallback(() => {this.drawPie(); this.drawBar()});
        }
    }
</script>