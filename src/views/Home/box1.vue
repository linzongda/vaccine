<template>
    <div class="box">
        <div id="chart" v-show="flag" :style="{width:'100%', height:'400px'}"></div>
        <div id="chart1" v-show="!flag" :style="{width:'771px', height:'400px'}"></div>
    </div>

    <div class="span">
        <div v-for="(list,index) in navLists" class="indent" :class="{ active:changeRed == index}" @click="reds(index)"><a>{{list.text}}</a></div>
    </div>

</template>

<script>
    import * as echarts from 'echarts';
    export default {
        name: "box1",
        data(){return{
            chart:null,
           flag:true,
            new:[],
            time:[],
            time1:[],
            comfirmed:[],
            navLists:[
                {
                    "text":"全国新增确诊趋势"
                },
                {
                    "text":"本土现有确诊趋势"
                }
            ],
            changeRed:0
        }},
        created() {
            var dt1 = JSON.parse(sessionStorage.getItem('china3'))
            console.log( dt1['chinaDailyList'])
            dt1['chinaDailyList'].forEach(i=>{
                this.time.push(i.date)
                this.comfirmed.push(i.localConfirm)
            })
            console.log(dt1['chinaDailyList'][0]);
            for(var i=0;i<dt1['chinaDailyList'].length;i++){
                if(i!=dt1['chinaDailyList'].length-1){
                    var number= dt1['chinaDailyList'][i+1]['confirm']-dt1['chinaDailyList'][i]['confirm']
                    this.new.push(number)
                }
                // console.log(number);
            }
            this.time1=this.time.concat()
            this.time1.shift()
            // console.log(this.new)

        },
        methods:{
            reds:function(index){
                this.changeRed = index;
                // if(this.flag1==)
                this.flag=!this.flag
                // this.flag1=false
            },
            btnClick1(){
                this.flag=true
            },
            btnClick2(){
                this.flag=false
            },

            showChart(){
                var myChart=echarts.init(document.getElementById("chart"));
                var myChart1=echarts.init(document.getElementById("chart1"));
                var option = {
                    title: {
                        text: '全国新增确诊趋势（包含港、澳、台）'
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
                        data: this.time1
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '新增确诊',
                            type: 'line',
                            color:'rgb(250,130,10)',
                            data: this.new
                        }
                    ]
                };
                var option1 = {
                    title: {
                        text: '本土现有确诊趋势'
                    },
                    legend: {
                        data: ['现有确诊']
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: this.time
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        name: '现有确诊',
                        data: this.comfirmed,
                        type: 'line',
                        color:'rgb(250,10,100)'
                    }]
                };
                // 4.传入数据
                myChart.setOption(option);
                myChart1.setOption(option1);
                var currentIndex = -1;
                setInterval(function() {
                    var dataLen = option.series[0].data.length;
                    // 取消之前高亮的图形
                    myChart.dispatchAction({
                        type: 'downplay',
                        seriesIndex: 0, //表示series中的第几个data数据循环展示
                        dataIndex: currentIndex
                    });
                    currentIndex = (currentIndex + 1) % dataLen; //+1表示每次跳转一个
                    // 高亮当前图形
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: currentIndex
                    });
                    // 显示 tooltip
                    myChart.dispatchAction({
                        type: 'showTip',
                        seriesIndex: 0,
                        dataIndex: currentIndex
                    });
                }, 2000);
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

