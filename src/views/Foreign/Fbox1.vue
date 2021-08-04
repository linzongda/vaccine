<template>
    <div class="box">
        <div id="Fchart1"  v-show="flag" :style="{width:'100%', height:'400px'}"></div>
        <div id="Fchart1_1" v-show="!flag" :style="{width:'771px', height:'400px'}"></div>
    </div>
    <div class="span">
        <div v-for="(list,index) in navLists" class="indent" :class="{ active:changeRed == index}" @click="reds(index)"><a>{{list.text}}</a></div>
    </div>
</template>

<script>
    import * as echarts from "echarts";
    export default {
        name: "Fbox1",
        data(){return{
            chart:null,
            flag:true,
            flag1:false,
            width:null,
            dataTime:[],
            confirmed:[],
            C_confirmed:[],
            navLists:[
                {
                    "text":"印度新增确诊趋势"
                },
                {
                    "text":"印度累计确诊趋势"
                }
            ],
            changeRed:0
        }},
        created() {
            var dt= JSON.parse(sessionStorage.getItem('India'))
            this. dataTime=dt[0]
            this.confirmed=dt[1]
            this.C_confirmed=dt[2]
        },
        methods:{
            reds:function(index){
                this.changeRed = index;
                this.flag=!this.flag
            },

            btnClick1(){
                this.flag=true
                this.flag1=false

            },
            btnClick2(){
                this.flag=false
                this.flag1=true
            },

            showChart(){
                var myChart=echarts.init(document.getElementById("Fchart1"));
                var myChart1=echarts.init(document.getElementById("Fchart1_1"));
                var option = {
                    title: {
                        text: '新增确诊趋势'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['新增确诊']
                    },
                    xAxis: {
                        type: 'category',
                        data: this.dataTime
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        name:'新增确诊',

                        data: this.confirmed,
                        color:'rgb(222,10,50)',
                        type: 'line'
                    }]
                };
                // getCountrydata("India").then(res=>{
                //     for(var i=0;i<res.data.length;i++){
                //         this.dataTime.push(res.data[i].date);
                //         this.confirmed.push(res.data[i].confirmed);
                //         this.C_confirmed.push(res.data[i].cumulative_Confirmed);
                //     }
                //     myChart.setOption({
                //         xAxis: {
                //             type: 'category',
                //             data:this.dataTime
                //         },
                //         series: [{
                //             data:this.confirmed,
                //             type: 'line'
                //         }]
                //
                //     });
                //     myChart1.setOption({
                //         xAxis: {
                //             type: 'category',
                //             data:this.dataTime
                //         },
                //         series: [{
                //             data:this.C_confirmed,
                //             type: 'line'
                //         }]
                //
                //     });
                //
                // })
                var option1 = {
                    title: {
                        text: '累计确诊趋势'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['累计确诊']
                    },
                    xAxis: {
                        type: 'category',
                        data: this.dataTime
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        name:'累计确诊',
                        data: this.C_confirmed,
                        color: 'rgb(2,165,90)',
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

</style>