<template>
<!--    <br><br><br><br><br><br><br><br>-->
    <wrold-map></wrold-map>
    <div class="number"><Fnumber></Fnumber></div>
    <Fbox1></Fbox1>
    <Fbox2></Fbox2>
    <Fbox3></Fbox3>

    <div class="box"> <Fxiangqing></Fxiangqing></div>
</template>

<script>
    import WroldMap from "./WroldMap";
    import Fnumber from './Fnumber';
    import Fbox1 from "./Fbox1";
    import Fbox2 from "./Fbox2";
    import Fbox3 from "./Fbox3";
    import Fxiangqing from "./Fxiangqing";
    export default {
        name: "Foreign",
        components:{
            WroldMap,
            Fnumber,
            Fbox1,
            Fbox2,
            Fbox3,
            Fxiangqing
    }
    }
</script>

<style scoped>
    @import '../../assets/css/base.css';
    .number{
        margin: 0 36px;
    }
    /*.xiangqing{*/
    /*    margin: 10px 20px;*/
    /*    !*width: 100%;*!*/
    /*    border:1px solid rgb(143,184,255);*/
    /*    border-radius: 8px;*/
    /*}*/
  h1{
      padding-top: 30px;
  }
</style>