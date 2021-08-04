<template>
    <div class="box">
        <div id="Gchart2" v-show="flag" :style="{width:'100%', height:'400px'}"></div>
        <div id="Gchart2_1" v-show="!flag" :style="{width:'771px', height:'400px'}"></div>
    </div>
    <div class="span">
        <div v-for="(list,index) in navLists" class="indent" :class="{ active:changeRed == index}"
             @click="reds(index)"><a>{{list.text}}</a></div>
    </div>


</template>

<script>

    import * as echarts from 'echarts';
    export default {
        name: "Fbox2",
        data(){return{
            chart:null,
            flag:true,
            Countrydatas:[],
            confirmed:[],
            time:[],
            data:[],
            datas:[],
            navLists:[
                {
                    "text":"海外多国确诊趋势"
                },
                {
                    "text":"24小时新增确诊TOP10"
                }
            ],
            changeRed:0

        }},
        created() {
            var dt=JSON.parse(sessionStorage.getItem('worldLatestTop10'))
            this.Countrydatas=dt[0]
            this.confirmed=dt[1]
            this.getconutry()

        },
        methods:{
            getconutry(){
                var dt1=JSON.parse(sessionStorage.getItem('worldLatestall'))
                for(var i=0;i< dt1['countries'].length;i++){
                    var data=[]
                    dt1['countries'][i].forEach(j=>{
                        if(i==0){
                            this.time.push(j.date)
                        }
                        data.push(j.cumulative_Confirmed)
                    })
                    this.datas.push(data)

                }
                console.log(this.datas)
                console.log(this.time);
            },
            reds:function(index){
                this.changeRed = index;
                this.flag=!this.flag

            },
            btnClick1(){
                this.flag=true
            },
            btnClick2(){
                this.flag=false
            },
            bijiao(property) {
                return function(a, b) {
                    var value1 = a[property];
                    var value2 = b[property];
                    return value1 - value2;
                }
            },
            showChart(){

                var myChart=echarts.init(document.getElementById("Gchart2"));
                var myChart1=echarts.init(document.getElementById("Gchart2_1"));
                const colorArr = [
                    ["#0ba82c", "#4ff778"],
                    ["#2e72bf", "#23e5e5"],
                    ["#5052ee", "#ab6ee5"],
                ];
                var option = {
                    title: {
                        text: '确诊趋势'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['美国','巴西','意大利','英国','法国','德国','俄罗斯','西班牙']
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
                            name: '美国',
                            type: 'line',
                            // stack: '总量',
                            data: this.datas[0]
                        },
                        {
                            name: '巴西',
                            type: 'line',
                            // stack: '总量',
                            data:this.datas[1]
                        },
                        {
                            name: '意大利',
                            type: 'line',
                            // stack: '总量',
                            data: this.datas[2]
                        },
                        {
                            name: '英国',
                            type: 'line',
                            // stack: '总量',
                            data: this.datas[3]
                        },
                        {
                            name: '法国',
                            type: 'line',
                            // stack: '总量',
                            data: this.datas[4]
                        },
                        {
                            name: '德国',
                            type: 'line',
                            // stack: '总量',
                            data: this.datas[5]
                        },
                        {
                            name: '俄罗斯',
                            type: 'line',
                            // stack: '总量',
                            data: this.datas[6]
                        },
                        {
                            name: '西班牙',
                            type: 'line',
                            // stack: '总量',
                            data: this.datas[7]
                        }
                    ]
                };
                var option1 = {
                    title: {
                        text: '24小时新增确诊TOP10'
                    },
                    xAxis: {
                        type: 'category',
                        axisLabel:{  interval: 0},
                        data: this.Countrydatas
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data:this.confirmed,
                        type: 'bar',
                        itemStyle: {
                            color: (arg) => {
                                let targetArr = null;
                                if (arg.data > 40000) {
                                    targetArr = colorArr[0];
                                } else if (arg.data > 50000) {
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
                    }]
                }
                // getworldLatest().then(res=>{
                //     this.Countrydatass=res.data;
                //     var datas=this.Countrydatass.sort(this.bijiao("confirmed"));
                //     var datass=datas.reverse();
                //     for (var i=0;i<10;i++){
                //        this.Countrydatas.push(datass[i].cn_short);
                //        this.confirmed.push(datass[i].confirmed);
                //    }
                //    // console.log(this.Countrydatas);
                //     myChart1.setOption({
                //         xAxis: {
                //             type: 'category',
                //             axisLabel:{  interval: 0},
                //             data: this.Countrydatas
                //         },
                //         yAxis: {
                //             type: 'value'
                //         },
                //         series: [{
                //             data: this.confirmed,
                //             type: 'bar'
                //         }]
                //     })
                //
                // })
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

