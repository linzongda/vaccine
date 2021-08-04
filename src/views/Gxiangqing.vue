<template>
    <br><br>
    <h2 style="text-align: center">{{names}}疫情详情</h2>
    <div class="items">
        <el-space wrap >
            <el-card class="box-card1" style="width: 180px" >
                <template #header>
                    <div class="card-header">
                        <span>当天确诊</span>
                    </div>
                </template>
                <div v-for="o in 1" :key="o" class="text1 item">
                    {{lists[0]}}
                </div>
            </el-card>
        </el-space>
        <el-space wrap>
            <el-card class="box-card2" style="width: 180px" >
                <template #header>
                    <div class="card-header">
                        <span>累计确诊</span>
                    </div>
                </template>
                <div v-for="o in 1" :key="o" class="text2 item">
                    {{lists[1]}}
                </div>
            </el-card>
        </el-space>
        <el-space wrap>
            <el-card class="box-card3" style="width: 180px" >
                <template #header>
                    <div class="card-header">
                        <span>当天死亡</span>
                    </div>
                </template>
                <div v-for="o in 1" :key="o" class="text3 item">
                    {{lists[2]}}
                </div>
            </el-card>
        </el-space>
        <el-space wrap>
            <el-card class="box-card4" style="width: 180px" >
                <template #header>
                    <div class="card-header">
                        <span>累计死亡</span>
                    </div>
                </template>
                <div v-for="o in 1" :key="o" class="text4 item">
                    {{lists[3]}}
                </div>
            </el-card>
        </el-space>
    </div>
<!--<h1> {{data.cumulative_Deaths}}</h1>-->
    <div class="box">
            <div id="xiangqing" :style="{width:'100%', height:'400px'}"></div>
    </div>
    <div class="box">
        <div id="xiangqing1" :style="{width:'100%', height:'400px'}"></div>
    </div>

</template>

<script>
    import '../assets/js/time'
    import {getCountrydata} from "../network/home";
    import * as echarts from "echarts";
    export default {
        name: "Gxiangqing",
        data(){
            return{
                data:[],
                name:null,
                names:null,
                dataTime:[],
                datas:[],
                C_deaths:[],
                C_confirmed:[],
                hundred_T:[],
                lists:[]
                // default:55
            }
        },
        created() {
            this.name=this.$route.params.name;
            this.names=this.$route.query.cn_short
            console.log(this.$route.query.iso2)
            console.log(this.$route.query.cn_short)
            console.log(this.name)
        },
        methods:{
            showChart(){
                // console.log(this.datas)
                var myChart=echarts.init(document.getElementById("xiangqing"));
                var myChart1=echarts.init(document.getElementById("xiangqing1"));
                var option = {
                    title: {
                        text:  `${this.names}疫情新增趋势`
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },

                    legend: {
                        data: ['新增确诊']
                    },
                    xAxis: {
                        type: 'category',
                        data: null
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        name:'新增确诊',
                        data: null,
                        type: 'line'
                    }]
                };
                var option1={
                    title: {
                        text: `${this.names}疫情新增趋势`
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },

                    legend: {
                        data: ['累计确诊', '累计死亡']
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
                        data:null
                    },
                    yAxis: {
                        type: 'value',
                    },
                    series: [
                        {
                            name: '累计死亡',
                            color:'rgb(185,0,0)',
                            type: 'line',
                            stack: '总量',
                            data: null
                        },
                        {
                            name: '累计确诊',
                            color: 'rgb(252,132,82)',
                            type: 'line',
                            stack: '总量',
                            data: null
                        },

                    ]
                };


                getCountrydata().then(res => {

                  res['result']['pageContext']['rawDataSets']['countryGroups'].forEach(item => {

                    if (item['value']==this.$route.query.iso2){

                      //this.name=res.data.country
                      this.dt = item.data.rows
                      this.data=this.dt.slice(-1)
                      this.lists.push(this.data[0][7])
                      this.lists.push(this.data[0][8])
                      this.lists.push(this.data[0][2])
                      this.lists.push(this.data[0][3])
                      //date:0, area:1, deaths:2,Cumulative Deaths:3  Deaths Last 7 Days:4
                      //Deaths Last 7 Days Change:5, Deaths Per Hundred Thousand:6
                      //Confirmed:7, Cumulative Confirmed:8 , Cases Last 7 Days:9, Cases Last 7 Days Change:10
                      // Cases Per Hundred Thousand:11
                      console.log(this.data);
                      for(var i=0;i<this.dt.length;i++){
                        this.dataTime.push(new Date(this.dt[i][0]).Format('yy-MM-dd'));
                        this.datas.push(this.dt[i][7]);
                        this.C_deaths.push(this.dt[i][3]);
                        this.C_confirmed.push(this.dt[i][8]);
                        this.hundred_T.push(this.dt[i][6]);
                      }
                    }
                  })



                    myChart.setOption({
                        xAxis: {
                            // type: 'category',
                            data: this.dataTime
                        },
                        series: [{
                            data: this.datas,
                        }]
                    })
                    myChart1.setOption({
                        xAxis: {
                            data:this.dataTime
                        },
                        series: [
                            {
                                data: this.C_deaths
                            },
                            {
                                data: this.C_confirmed
                            },

                        ]
                    })
                }).catch(err=>{
                    console.log(err);
                })

                // 4.传入数据
                myChart.setOption(option);
                myChart1.setOption(option1);

                // getCountrydata() {
                //     let _this=this;


                // setTimeout(function (){
                //     window.onresize = function () {
                //         myChart.resize();
                //     }
                // },200)
            }
        },
        mounted() {
            this.showChart();
        }
    }
</script>

<style scoped>
@import "../assets/css/base.css";
.card{
    margin: 10px 28px;
}
span {
    font-size: 20px;
}
.items{
    text-align: center;
}
.item {
    font-size: 25px;
    font-weight: bold
}
.text1 {
    color: rgb(230,28,29);
}
.box-card1{
    background-color: rgb(255,248,248);
}
.text2 {
    color: rgb(229,118,49);
}
.box-card2{
    background-color: rgb(255,244,244);
}
.text3 {
    color: rgb(23,139,80);
}
.box-card3{
    background-color: rgb(241,248,244);
}
.text4 {
    color: rgb(78,90,101);
}
.box-card4{
    background-color: rgb(243,246,248);
}
</style>