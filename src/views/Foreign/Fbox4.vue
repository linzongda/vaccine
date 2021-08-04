<template>
<div v-if="this.flag1">
    <div id="myChart1"   :style="{ width: '100%', height: '300px' }" ></div>
</div>
<div v-if="this.flag2">
    <div id="myChart2"  :style="{ width: '100%', height: '300px' }" ></div>
</div>
    </template>
<script>
    import * as echarts from 'echarts';
    export default {
        name: "Fbox4",
        data() {
            return {
                flag1:true,
                flag2:false,
                cityValue: "",
                columns: [
                    {
                        dm:"0",
                        mc:"用户性别年龄结构情况"
                    },
                    {
                        dm:"1",
                        mc:"用户户籍全国占比情况"
                    },
                ],
                showPicker: false,
                chart1: undefined,
                chart2: undefined,
                option : {
                    title: {
                        text: '折线图堆叠'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['6666', '联盟广告', '视频广告', '直接访问', '搜索引擎']
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
                },
                option1 :{
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
                },
                methods: {

                    onConfirm(value) {
                        this.cityValue = value;
                        this.showPicker = false;
                        if(vaule ===  "0"){
                            this.flag1 = true ;
                            this.$nextTick(()=>{ this.makedraw(true,false);})
                        }
                        if(vaule ===  "1"){
                            this.flag2 = true ;
                            this.$nextTick(()=>{ this.makedraw(false,true);})
                        }

                    },
                    makedraw(item1,item2){
                        this.flag1=item1;
                        this.flag2=item2;
                        if(this.flag1 == true){
                            this.chart1 = this.$echarts.init(document.getElementById("myChart1"));
                            this.chart1.setOption(this.option1);
                        }
                        if(this.flag2 == true){
                            this.chart2 = this.$echarts.init(document.getElementById("myChart2"));
                            this.chart2.setOption(this.option2);
                        }
                    }
                },
                mounted() {
                    this.makedraw(true,false);
                }
            }
        }
    }
</script>
