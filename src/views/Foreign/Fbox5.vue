<template>
    <div class="box">
        <div id="Fchart5" v-show="flag" :style="{width:'100%', height:'400px'}"></div>
        <div id="Fchart5_1" v-show="!flag" :style="{width:'706px', height:'400px'}"></div>
    </div>

    <div class="span">
        <span @click="btnClick1"><h2>表格1</h2></span>
        <span @click="btnClick2"><h2>表格2</h2></span>
    </div>

    <!--        <div class="btn">-->
    <!--            <el-button type="success" round>表格1</el-button>-->
    <!--            <el-button type="danger" round>表格2</el-button>-->
    <!--        </div>-->

</template>

<script>
    import * as echarts from 'echarts';
    export default {
        name: "Fbox5",
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
                var myChart=echarts.init(document.getElementById("Fchart5"));
                var myChart1=echarts.init(document.getElementById("Fchart5_1"));
                var option = {
                    title: {
                        text: '折线图堆叠'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
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
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '邮件营销',
                            type: 'line',
                            stack: '总量',
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '联盟广告',
                            type: 'line',
                            stack: '总量',
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: '视频广告',
                            type: 'line',
                            stack: '总量',
                            data: [150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name: '直接访问',
                            type: 'line',
                            stack: '总量',
                            data: [320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name: '搜索引擎',
                            type: 'line',
                            stack: '总量',
                            data: [820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                };
                var option1 = {
                    title: {
                        text: '555'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
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
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '邮件营销',
                            type: 'line',
                            stack: '总量',
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '联盟广告',
                            type: 'line',
                            stack: '总量',
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: '视频广告',
                            type: 'line',
                            stack: '总量',
                            data: [150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name: '直接访问',
                            type: 'line',
                            stack: '总量',
                            data: [320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name: '搜索引擎',
                            type: 'line',
                            stack: '总量',
                            data: [820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
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

</style>

