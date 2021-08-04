<template>
    <div class="box">
        <div id="Gchart" v-show="flag" :style="{width:'100%', height:'500px'}"></div>
    </div>
</template>

<script>
    import * as echarts from "echarts";

    export default {
        name: "Gbox1",
        data(){return{
            chart:null,
            flag:true,
            flag1:false,
            en_short:[],
            total:[]
        }},
        created() {
            var datas=JSON.parse(sessionStorage.getItem('vaccall'))
            datas['vaccination-data'].forEach(i=>{
                console.log(i);
                this.en_short.push(i.cn_short)
                this.total.push(i.TOTAL_VACCINATIONS_PER100)
            })

            // console.log(this.en_short);
        },
        methods:{
            showChart(){
                var myChart=echarts.init(document.getElementById("Gchart"));
                var dataAxis = this.en_short;
                var data = this.total;
                var yMax = 500;
                var dataShadow = [];

                for (var i = 0; i < data.length; i++) {
                    dataShadow.push(yMax);
                }

               var option = {
                    title: {
                        text: '各国每百人接种人数',
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                   legend: {
                       data: ['接种人数']
                   },
                    xAxis: {
                        data: dataAxis,
                        axisLabel: {
                            inside: true,
                            textStyle: {
                                color: '#000'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        z: 10
                    },
                    yAxis: {
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#999'
                            }
                        }
                    },
                    dataZoom: [
                        {
                            type: 'inside'
                        }
                    ],
                    series: [
                        {
                            type: 'bar',
                            name: '接种人数',
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#83bff6'},
                                        {offset: 0.5, color: '#188df0'},
                                        {offset: 1, color: '#188df0'}
                                    ]
                                )
                            },
                            emphasis: {
                                itemStyle: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#2378f7'},
                                            {offset: 0.7, color: '#2378f7'},
                                            {offset: 1, color: '#83bff6'}
                                        ]
                                    )
                                }
                            },
                            data: data
                        }
                    ],
                   dataZoom:[{filterMode: 'empty'}]
                };

// Enable data zoom when user click bar.
                var zoomSize = 6;
                myChart.on('click', function (params) {
                    console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
                    myChart.dispatchAction({
                        type: 'dataZoom',
                        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
                        endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
                    });
                });

                myChart.setOption(option);

            }
        },
        mounted() {
            this.showChart();
        }
    }
</script>

<style scoped>

</style>