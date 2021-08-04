<template>
    <div id="ChinaMap" v-show="flag" style="width: 100%;height:550px;"></div>
    <div id="ChinaMap1" v-show="!flag" style="width: 814px;height:550px;"></div>
    <div class="span">
        <div v-for="(list,index) in navLists" class="indent" :class="{ active:changeRed == index}" @click="reds(index)"><a>{{list.text}}</a></div>
    </div>
</template>

<script>
    import * as echarts from 'echarts';
    import  '../../assets/js/jquery';
    import  '../../assets/js/china';
    export default {
        name: "ChinaMap",
        data(){
          return{
              flag:true,
              navLists:[
                  {
                      "text":"现有确诊"
                  },
                  {
                      "text":"累计确诊"
                  }
              ]
          }
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
            drawLine(){
                // data = dt;
                var ChinaMap = echarts.init(document.getElementById('ChinaMap'));
                var ChinaMap1 = echarts.init(document.getElementById('ChinaMap1'));
                var option = {
                    title: {
                        text: '累计确诊',
                        left: 'center',
                        top: '4%',
                        itemGap: 1,
                        textStyle: {
                            color: '#00aa00'
                        },
                        z: 200
                    },
                    tooltip: {
                        trigger: 'item',
                        left: 'center',
                        top: '20%',
                        formatter: function (params) {
                            var value = (params.value + '').split('.');
                            value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
                            return params.seriesName + '<br/>' + params.name + ' : ' + value;
                        }
                    },
                    visualMap: {
                        min: 0,
                        max: 3000,
                        top: '30%',
                        left: '8%',
                        text:['高','低'],
                        realtime: false,
                        calculable: true,
                        color: ['orangered','yellow','lightskyblue']
                    },
                    grid: {
                        top: '5%',
                        left: '3%',
                        right: '8%',
                        bottom: '3%',
                        containLabel: true
                    },

                    series: [
                        {
                            name: '累计确诊',
                            type: 'map',
                            mapType: 'china',
                            roam: false,
                            itemStyle:{
                                emphasis:{label:{show:true}}
                            },
                            data: JSON.parse(sessionStorage.getItem('china')),
                        }
                    ]
                };
                var option1 = {
                    title: {
                        text: '现有确诊',
                        left: 'center',
                        top: '4%',
                        itemGap: 1,
                        textStyle: {
                            color: '#00aa00'
                        },
                        z: 200
                    },
                    tooltip: {
                        trigger: 'item',
                        left: 'center',
                        top: '20%',
                        formatter: function (params) {
                            var value = (params.value + '').split('.');
                            value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
                            return params.seriesName + '<br/>' + params.name + ' : ' + value;
                        }
                    },
                    visualMap: {
                        min: 0,
                        max: 100,
                        top: '30%',
                        left: '8%',
                        text:['高','低'],
                        realtime: false,
                        calculable: true,
                        color: ['orangered','yellow','lightskyblue']
                    },
                    grid: {
                        top: '5%',
                        left: '3%',
                        right: '8%',
                        bottom: '3%',
                        containLabel: true
                    },

                    series: [
                        {
                            name: '现有确诊',
                            type: 'map',
                            mapType: 'china',
                            roam: false,
                            itemStyle:{
                                emphasis:{label:{show:true}}
                            },
                            data: JSON.parse(sessionStorage.getItem('china2')),
                        }
                    ]
                };
                ChinaMap.setOption(option);
                ChinaMap1.setOption(option1);
            }

        },
        mounted(){
            this.drawLine();
        }


    }
</script>

<style scoped>

</style>