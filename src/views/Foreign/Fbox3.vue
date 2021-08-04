<template>
    <div class="box">
        <div id="Fchart3" v-show="flag" :style="{width:'100%', height:'400px'}"></div>
        <div id="Fchart3_1" v-show="!flag" :style="{width:'706px', height:'400px'}"></div>
<!--        <div id="Fchart3_2" v-show="!flag" :style="{width:'706px', height:'400px'}"></div>-->
    </div>
    <div class="span">
        <div v-for="(list,index) in navLists" class="indent" :class="{ active:changeRed == index}" @click="reds(index)"><a>{{list.text}}</a></div>
    </div>
<!--    <div class="span">-->
<!--        <span @click="btnClick1"><a>新增趋势死亡趋势</a></span>-->
<!--        <span @click="btnClick2"><a>累计确诊累计死亡</a></span>-->
<!--    </div>-->
</template>

<script>
    import * as echarts from "echarts";

    export default {
        name: "Fbox1",
        data() {
            return {
                chart: null,
                flag: true,
                time: [],
                cumulativeConfirmed: [],
                cumulativeDeaths: [],
                deaths: [],
                confirmed: [],
                navLists:[
                    {
                        "text":"新增趋势死亡趋势"
                    },
                    {
                        "text":"累计确诊累计死亡"
                    }
                ],
                changeRed:0

            }
        },
        created() {
            var dt = JSON.parse(sessionStorage.getItem('worldLatestall'))
            dt['worldDaily'].forEach(i => {
                var data = []
                this.time.push(i.date)
                this.cumulativeConfirmed.push(i.cumulativeConfirmed)
                this.cumulativeDeaths.push(i.cumulativeDeaths)
                this.deaths.push(i.deaths)
                this.confirmed.push(i.confirmed)

            })


        },
        methods: {
            reds:function(index){
                this.changeRed = index;
                // if(this.flag1==)
                this.flag=!this.flag
                // this.flag1=false
            },            btnClick1() {
                this.flag = true
            },
            btnClick2() {
                this.flag = false
            },

            showChart() {
                var myChart = echarts.init(document.getElementById("Fchart3"));
                var myChart1 = echarts.init(document.getElementById("Fchart3_1"));
                // var myChart2 = echarts.init(document.getElementById("Fchart3_2"));
                var option = {
                    title: {
                        text: '新增/死亡趋势'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['新增确诊人数','死亡人数']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: this.time
                    },
                    yAxis: {
                        type: 'value'
                    },

                    series: [
                        {
                            name: '死亡人数',
                            type: 'line',
                            color:'rgb(138,0,128)',
                            data: this.deaths
                        },
                        {
                            name: '新增确诊人数',
                            type: 'line',
                            color:'rgb(48,51,153)',
                            data: this.confirmed
                        },

                    ],
                    dataZoom:[{filterMode: 'empty',
                        start: 0,
                        end: 99.9,
                    }]
                };

                var option1 = {
                    title: {
                        text: '累计确诊/死亡'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['累计确诊','累计死亡']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: this.time
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '累计确诊',
                            type: 'line',
                            color:'rgb(0,255,63)',
                            data: this.cumulativeConfirmed
                        },
                        {
                            name: '累计死亡',
                            type: 'line',
                            color:'rgb(0,206,255)',
                            data:  this.cumulativeDeaths
                        },
                    ],
                    dataZoom:[{filterMode: 'empty',
                        start: 0,
                        end: 99.9,　
                    }]
                };
                //4.传入数据
                myChart.setOption(option);

                let temp = myChart;//临时存储Chart的属性
                myChart.clear();
                myChart = temp;

                myChart.setOption(option);
                // return chart;

                myChart1.setOption(option1);
                // myChart2.setOption(option2);
                setTimeout(function () {
                    window.onresize = function () {
                        myChart.resize();
                    }
                }, 200)
            }
        },
        mounted() {
            this.showChart();
        }
    }
</script>

<style scoped>

</style>