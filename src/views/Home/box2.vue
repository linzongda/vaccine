<template>
    <div class="box">
        <div id="Bchart" v-if="flag" :style="{width:'100%', height:'500px'}"></div>
        <div id="Bchart1" v-if="!flag" :style="{width:'706px', height:'500px'}"></div>
    </div>
    <!--    <div id="chart">909090990</div>-->

    <div class="span">
        <span @click="btnClick1"><a>表格1</a></span>
        <span @click="btnClick2"><a>表格2</a></span>
    </div>

    <!--        <div class="btn">-->
    <!--            <el-button type="success" round>表格1</el-button>-->
    <!--            <el-button type="danger" round>表格2</el-button>-->
    <!--        </div>-->

</template>

<script>
    import * as echarts from 'echarts';
    export default {
        name: "box2",
        data(){return{
            chart:null,
            flag:true
        }},
        methods:{
            btnClick1(){
                this.flag=true
            },
            btnClick2(){
                this.flag=false
            },

            showChart(){
                var myChart=echarts.init(document.getElementById("Bchart"));
                var myChart1=echarts.init(document.getElementById("Bchart1"));
                const colorArr = [
                    ["#0ba82c", "#4ff778"],
                    ["#2e72bf", "#23e5e5"],
                    ["#5052ee", "#ab6ee5"],
                ];
                var option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '直接访问',
                            type: 'bar',
                            barWidth: '60%',
                            data: [10, 52, 200, 334, 390, 330, 220],
                            itemStyle: {
                                color: (arg) => {
                                    let targetArr = null;
                                    if (arg.data > 200) {
                                        targetArr = colorArr[0];
                                    } else if (arg.data > 300) {
                                        targetArr = colorArr[1];
                                    } else {
                                        targetArr = colorArr[2];
                                    }
                                    return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: targetArr[0],
                                        },
                                        {
                                            offset: 1,
                                            color: targetArr[1],
                                        },
                                    ]);
                                },
                            }
                        },


                    ],


//series配置

                };
                var option1 = {
                    xAxis: {
                        type: 'category',
                        data: this.time
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: this.comfirmed,
                        type: 'line'
                    }]
                };
                // 4.传入数据
                myChart.setOption(option);
                myChart1.setOption(option1);
                setTimeout(function (){
                    window.onresize = function () {
                        myChart.resize();
                    }
                },200)
            }
        },
        mounted() {
            this.showChart();
        }
    }
</script>

<style scoped>
    #chart{
        margin: 0 auto;
    }
    @import '../../assets/css/base.css';
</style>

