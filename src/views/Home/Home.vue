<template>
  <div>
    <div> <home-swiper class="swiper"></home-swiper></div>
  </div>
  <div class="number"><number></number></div>
  <china-map></china-map>
  <div class="box1"><box1></box1></div>
<!--  <div class="box2"><box2></box2></div>-->
  <div class="box3"><box3></box3></div>
<!--  <tubiao class="tubiao"></tubiao>-->
  <div class="box">  <xiangqing ></xiangqing></div>

</template>

<script>
  import HomeSwiper from "./HomeSwiper"
  import number from "./number"
  import ChinaMap from "./ChinaMap";
  import box1 from "./box1";
  import box2 from "./box2";
  import box3 from "./box3";
  // import tubiao from "./tubiao";
  import xiangqing from "./xiangqing";
export default {
  name: 'Home',
  components: {
   HomeSwiper,
    number,
    ChinaMap,
    box1,
    box2,
    box3,
    // tubiao,
    xiangqing
  }
}
</script>
<style>
.swiper{
  padding-top:23px;
  width: 100%;
  height: 100%;
}
/*.tubiao{*/
/*  height: 400px;*/
/*  z-index: 0;*/
/*}*/
/*  .xiangqing{*/
/*    margin: 10px;*/
/*    !*width: 100%;*!*/
/*    !*border:1px solid red;*!*/
/*    border-radius: 5px;*/
/*  }*/
.number{
  margin: 10px 25px;
}
</style>