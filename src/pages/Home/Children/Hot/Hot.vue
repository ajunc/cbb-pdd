<template>
    <div class="man">
        <div class="swiper-container" v-if="homecasual.length > 0">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(casual, index) in homecasual" :key="index">
                    <img :src="casual.imgurl" alt="" width="100%">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
        <hot-nav/> 
        
        <div class="hot-ad">
            <img src="./../imgs/center_banner.jpeg" alt="" width="100%">
        </div>

        <HotShopList/>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

import HotNav from './HotNav'
import HotShopList from './HotShopList'

import {
    mapState
} from 'vuex'

export default {
    name: 'Hot',
    components: {
        HotNav,
        HotShopList
    },
    computed:{
        ...mapState(['homecasual'])
    },
    mounted(){
        //1.请求首页的轮播图
        this.$store.dispatch('reqHomeCasual')

        
    },
    watch: {
        homecasual() {
            this.$nextTick(() => {
            // 创建swiper的实例
                new Swiper('.swiper-container', {
                    autoplay: 3000,//等同于以下设置
                    loop: true,
                    // 如果需要分页器
                    pagination: {
                    el: '.swiper-pagination',
                    }
                })
            });
       }
    
    }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.man
    width 100%
    height 100%
    background #f5f5f5 
    .hot-ad
        background-color #fff
        margin 8px 0
        padding 5px
</style>
