<template>
    <div class="box">
        <div id="Tchart" v-show="flag1" :style="{width:'100%', height:'400px'}"></div>
        <div id="Tchart1" v-show="flag2" :style="{width:'706px', height:'400px'}"></div>
        <div id="Tchart2" v-show="flag3" :style="{width:'706px', height:'400px'}"></div>
    </div>
    <div class="span">
        <div v-for="(list,index) in navLists" class="indent" :class="{ active:changeRed == index}" @click="reds(index)"><a>{{list.text}}</a></div>
    </div>

</template>

<script>
    import * as echarts from 'echarts';
    export default {
        name: "box3",
        data(){return{
            chart:null,
            flag1:true,
            flag2:false,
            flag3:false,
            time:[],
            data:[],
            confirm:[],
            heal:[],
            dead:[],
            deadRate:[],
            healRate:[],
            navLists:[
                {
                    "text":"全国现有确诊趋势"
                },
                {
                    "text":"全国疫情累计趋势"
                },
                {
                    "text":"治愈率死亡率"
                }

            ],
            changeRed:0
        }},
        created() {
            var dt = JSON.parse(sessionStorage.getItem('china3'))
            dt['chinaDailyList'].forEach(i=>{
                this.time.push(i.date)
                this.data.push(i.nowConfirm)
                this.confirm.push(i.confirm)
                this.heal.push(i.heal)
                this.dead.push(i.dead)
                this.deadRate.push(i.deadRate)
                this.healRate.push(i.healRate)

            })
        },
        methods:{
            reds:function(index){
                this.changeRed = index;
                if(index==0){
                    this.flag1=true
                    this.flag2=false
                    this.flag3=false
                }else if(index==1){
                    this.flag1=false
                    this.flag2=true
                    this.flag3=false
                }else{
                    this.flag1=false
                    this.flag2=false
                    this.flag3=true
                }
                // if(this.flag1==)
                // this.flag=!this.flag
                // this.flag1=false
            },

            showChart(){
                var myChart=echarts.init(document.getElementById("Tchart"));
                var myChart1=echarts.init(document.getElementById("Tchart1"));
                var myChart2=echarts.init(document.getElementById("Tchart2"));
                var option = {
                    title: {
                        text: '全国现有确诊趋势（包含港、澳、台）'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data: ['全国现有确诊']
                    },
                    xAxis: {
                        type: 'category',
                        data: this.time
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        name:'现有确诊',
                        data: this.data,
                        color:'rgb(200,90,60)',
                        type: 'line'
                    }]
                };
                var option1 = {
                        title: {
                            text: '全国累计确诊/治愈/死亡'
                        },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['累计确诊', '累计治愈', '累计死亡']
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
                        data:this.time
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '累计治愈',
                            type: 'line',
                            color:'rgb(250,200,88)',
                            data: this.heal
                        },
                        {
                            name: '累计确诊',
                            type: 'line',
                            color:'rgb(204,97,93)',
                            data:this.confirm
                        },

                        {
                            name: '累计死亡',
                            type: 'line',
                            color:'rgb(154,96,180)',
                            data: this.dead
                        },

                    ]
                };
                var option2 = {
                    title: {
                        text: '全国治愈率/全国死亡率'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['治愈率', '死亡率']
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
                        data:this.time
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            show: true,
                            interval: 'auto',
                            formatter: '{value} %'
                        },
                        show: true
                    },
                    series: [
                        {
                            name: '治愈率',
                            type: 'line',
                            data:this.deadRate
                        },

                        {
                            name: '死亡率',
                            type: 'line',
                            data: this.healRate
                        },

                    ]
                };
                // 4.传入数据
                myChart.setOption(option);
                myChart1.setOption(option1);
                myChart2.setOption(option2);
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
    @import '../../assets/css/base.css';
</style>

