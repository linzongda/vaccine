<template>
    <div>
        <div id="GworldMap" style="width: 100%;height:560px;"></div>
    </div>
</template>

<script>
    import * as echarts from 'echarts';
    import {getCountrydata, getvacc, getworldLatest} from "../../network/home";
    import '../../assets/js/jquery';
    import '../../assets/js/world';

    export default {
        name: "GwroldMap",
        data() {
            return {
                datas: []
            }
        },
        created() {
            // this.getvacc()
        },
        methods: {
            drawLine() {
                var GworldMap = echarts.init(document.getElementById('GworldMap'));
                var option = {
                    title: {
                        text: '全球疫苗接种地图',
                        left: 'center',
                        top: '8%',
                        itemGap: 1,
                        textStyle: {
                            color: '#445599'
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
                        max: 90000000,
                        top: '30%',
                        left: '8%',
                        text: ['高', '低'],
                        realtime: false,
                        calculable: true,
                        color: ['rgb(47,93,143)', 'rgb(65,124,191)', 'rgb(77,176,255)','rgb(148,226,255)']
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
                            name: '疫苗接种人数',
                            type: 'map',
                            mapType: 'world',
                            roam: false,
                            itemStyle: {
                                emphasis: {label: {show: true}}
                            },
                            data: JSON.parse(sessionStorage.getItem('vacc'))
                        }
                    ]
                };
                GworldMap.setOption(option);
                // var _this=this;
                // getvacc().then(res => {
                //     console.log(res)
                //     res['vaccination-data'].forEach(i=>{
                //         var data = {name: null, value: null};
                //         data.name = i.en_short;
                //         data.value = i.TOTAL_VACCINATIONS;
                //         _this.datas.push(data);
                //     })
                //     GworldMap.setOption({
                //         series: [
                //             {
                //                 name: '确诊人数',
                //                 type: 'map',
                //                 mapType: 'world',
                //                 roam: false,
                //                 itemStyle: {
                //                     emphasis: {label: {show: true}}
                //                 },
                //                 data:_this.datas
                //             }
                //         ]
                //     })
                // })

                //             .catch(err => {
                // console.log("err")
                // })
            },
        },
        // getworldLatest(){
        //     var _this=this;
        //     getworldLatest().then(res=>{
        //
        //         console.log(res.data.length)
        //         for(var i=0;i<res.data.length;i++){
        //             var dt={name:null,value:null};
        //             dt.name=res.data[i].en_short;
        //             dt.value=res.data[i].cumulative_Confirmed;
        //             _this.datas.push(dt);
        //         }
        //
        //         // this.dt.name=res.data.en_short;
        //         // this.dt.value=res.data.cumulative_Confirmed;
        //     }).catch(err=>{
        //         console.log("err")
        //     })
        // },
        mounted() {
                this.drawLine();
        }
    }
</script>

<style scoped>

</style>