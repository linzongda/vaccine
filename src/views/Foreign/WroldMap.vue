<template>
    <div>
        <div id="WorldMap" style="width: 100%;height:580px;"></div>
    </div>
</template>

<script>
    import * as echarts from 'echarts';
    import '../../assets/js/jquery';
    import '../../assets/js/world';
    export default {
        name: "test",
        data() {
            return {
                datas: []
            }
        },
        methods: {
            drawLine() {
                let _this = this;
                var WorldMap = echarts.init(document.getElementById('WorldMap'));
                var option = {
                    title: {
                        text: '全球新冠疫情地图',
                        left: 'center',
                        top: '8%',
                        itemGap: 1,
                        textStyle: {
                            color: '#345599'
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
                        max: 9000000,
                        top: '30%',
                        left: '8%',
                        text: ['高', '低'],
                        realtime: false,
                        calculable: true,
                        color: ['rgb(25,25,112)', 'rgb(47,93,143)',
                            'rgb(77,176,255)', 'rgb(148,226,255)']
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
                            name: '累计确诊人数',
                            type: 'map',
                            mapType: 'world',
                            roam: false,
                            itemStyle: {
                                emphasis: {label: {show: true}}
                            },
                            data: JSON.parse(sessionStorage.getItem('worldLatest'))
                        }
                    ]
                };
                WorldMap.setOption(option)
                WorldMap.on('click', function (params) {
                    _this.$router.push(`/gxiangqing/${params.name}`);
                });
            }
        },
        mounted() {
            this.drawLine();
        }

    }
</script>

<style scoped>

</style>