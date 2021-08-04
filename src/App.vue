<template>
    <div id="app" class="wrapper">
            <router-view></router-view>
        <main-tab-bar/>
    </div>
</template>
<script>
    import  './assets/js/time'
    import {getworldData,getCountrydata,getbrief, getvacc,getchina} from "./network/home"
    import MainTabBar from "./components/content/mainTabbar/MainTabBar";

    export default {
        name: 'app',
        components: {
            MainTabBar
        },
        created() {
            this.getdatas()
            this.getCountrydata()
        },
        methods: {
            bijiao(property) {
                return function(a, b) {
                    var value1 = a[property];
                    var value2 = b[property];
                    return value1 - value2;
                }
            },
            getCountrydata(){
                getCountrydata().then(res=>{
                    var arrayList=[]
                    var time=[];
                    var confirmed=[];
                    var C_confirmed=[];
                    res['result']['pageContext']['rawDataSets']['countryGroups'].forEach(item => {

                          if (item['value']=='IN'){
                            item['data']['rows'].forEach(i => {
                              //var date = new Date(i[0]).Format('yy-MM-dd')
                              //console.log(date)
                              //time.push(i.date);
                              //confirmed.push(i.confirmed);
                              //C_confirmed.push(i.cumulative_Confirmed);
                              time.push(new Date(i[0]).Format('yy-MM-dd'));
                              confirmed.push(i[7]);
                              C_confirmed.push(i[8]);
                            })
                          }
                        }
                    )
                    arrayList.push(time)
                    arrayList.push(confirmed)
                    arrayList.push(C_confirmed)
                    sessionStorage.setItem('India',JSON.stringify(arrayList))

                })
            },
            getdatas() {
                getworldData().then(res => {
                    // console.log(res)
                    console.log(res.worldLatest)
                    var arrayList=[]
                    var arrayList1=[]
                    var Countrydatass=res.worldLatest;
                    // console.log(arrayList1)
                    var Countrydatas=[];
                    var confirmed=[];
                    var datas=Countrydatass.sort(this.bijiao("confirmed"));
                    var datass=datas.reverse();
                    console.log(datass)
                    res['worldLatest'].forEach(i => {
                        // console.log(i)
                        var datas = {name: null, value: null};
                        datas.name = i.en_short;
                        datas.value = i.cumulative_Confirmed;
                        arrayList.push(datas)
                    })
                    for (var i=0;i<10;i++){
                        Countrydatas.push(datass[i].cn_short);
                        confirmed.push(datass[i].confirmed);
                    }
                    arrayList1.push(Countrydatas)
                    arrayList1.push(confirmed)
                    console.log(typeof arrayList1);
                    sessionStorage.setItem('worldLatestTop10',JSON.stringify(arrayList1))
                    sessionStorage.setItem('worldLatest',JSON.stringify(arrayList))
                    sessionStorage.setItem('worldLatestall',JSON.stringify(res))
                }).catch(err=>{
                    console.log(err);
                });
                getbrief().then(res => {
                    var arrayList=[]
                    arrayList.push(res.date);
                    arrayList.push(res.cumulativeConfirmed);
                    arrayList.push(res.cumulativeDeaths);
                    arrayList.push(res. confirmed);
                    arrayList.push(res.deaths);
                    sessionStorage.setItem('brief',JSON.stringify(arrayList))
                });
                getvacc().then(res => {
                    var arrayList=[]
                    res['vaccination-data'].forEach(i => {
                        var data = {name: null, value: null};
                        data.name = i.en_short;
                        data.value = i.TOTAL_VACCINATIONS;
                        arrayList.push(data)
                    })
                    sessionStorage.setItem('vacc',JSON.stringify(arrayList))
                    sessionStorage.setItem('vaccall',JSON.stringify(res))
                });
                getchina().then(res=>{
                    console.log(res)
                    var data=res.chinaDailyList.slice(-1)
                    var datas=[]
                    var datass=[]
                    res['provinceList'].forEach(i=>{
                        var data={name:null,value:null}
                        var data1={name:null,value:null}
                        data.name=i.area
                        data1.name=i.area
                        data.value=i.confirm
                        data1.value=i.nowConfirm
                        datas.push(data)
                        datass.push(data1)
                    })
                    // console.log(datass)
                    sessionStorage.setItem('china1',JSON.stringify(data))
                    sessionStorage.setItem('china',JSON.stringify(datas))
                    sessionStorage.setItem('china2',JSON.stringify(datass))
                    sessionStorage.setItem('china3',JSON.stringify(res))
                })

            }
        }
    }
</script>
<style>
    .wrapper {
        padding: 0;
        margin: 0 258px;
        box-shadow: 0px 8px 8px rgba(240, 240, 240, 1);
    }
</style>
