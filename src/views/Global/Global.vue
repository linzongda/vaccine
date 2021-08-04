<template>
    <div class="map"> <test></test></div>
    <Gbox1></Gbox1>
    <div class="box"><Gxiangqing></Gxiangqing></div>
</template>

<script>
    import Gxiangqing from "./Ggxiangqing";
    import test from "../Global/GwroldMap";
    import Gbox1 from "./Gbox1";
    import Gbox2 from "./Gbox2";
    export default {
        name: "Global",
        components:{
            Gbox1,
            Gbox2,
            Gxiangqing,
            test
        }
    }
</script>

<style scoped>
    @import '../../assets/css/base.css';
</style>