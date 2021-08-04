<template>
    <div class="span">
        <div v-for="(list,index) in navLists" class="indent" :class="{ active:changeRed == index}"
             @click="reds(index)"><a>{{list.text}}</a></div>
        <!--        <span class="indent" @click="btnClick1" >-->
        <!--            <a>印度新增确诊趋势</a></span>-->
        <!--        <span class="indent" @click1="btnClick2">-->
        <!--            <a>印度累计确诊趋势</a></span>-->
    </div>
</template>

<script>
    export default {
        name: "button",
        props: {
            navLists:Array
        },
        data(){
            return{
                changeRed:0
            }
        },
            methods:{
                reds:function(index){
                    this.changeRed = index;
                    // if(this.flag1==)
                    this.flag=!this.flag
                    // this.flag1=false
                }
        }
    }
</script>

<style scoped>

</style>