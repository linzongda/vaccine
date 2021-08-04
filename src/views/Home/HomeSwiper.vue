<template>
    <swiper>
        <swiper-item>
            <img src="../../assets/imgs/home/main.png" alt="">
        </swiper-item>
    </swiper>
</template>

<script>
    import {Swiper,SwiperItem} from "../../components/common/swiper"
    export default {
        name: "HomeSwiper",
        props:{
            banners:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        components:{
            SwiperItem,Swiper
        }
    }
</script>

<style scoped>
    img{
        width: 100%;
        height: 100%;
    }
</style>












<!--<template>-->
<!--    <swiper>-->
<!--        <swiper-item>-->
<!--            <img src="../../assets/imgs/home/main.png" alt="">-->
<!--        </swiper-item>-->
<!--    </swiper>-->
<!--</template>-->

<!--<script>-->
<!--    import {Swiper, SwiperItem} from "../../components/common/swiper"-->

<!--    export default {-->
<!--        name: "HomeSwiper",-->
<!--        components: {-->
<!--            SwiperItem, Swiper-->
<!--        }-->
<!--    }-->
<!--</script>-->

<!--<style scoped>-->
<!--    img {-->
<!--        width: 100%;-->
<!--        height: 100%;-->
<!--    }-->
<!--</style>-->
