<template>
    <div class="bottom-tab">
        <span class="tab-item" @click="switchTo('/home')">
            <img :src="$route.path === '/home' ? tabBarImgArr[0].selected :tabBarImgArr[0].normal" alt="">
            <span :class="{on: '/home' === $route.path}">首页</span>
        </span>
        <span class="tab-item" @click="switchTo('/recommend')">
            <img :src="$route.path === '/recommend' ? tabBarImgArr[1].selected :tabBarImgArr[1].normal" alt="">
            <span :class="{on: '/recommend' === $route.path}">推荐</span>
        </span>
        <span class="tab-item" @click="switchTo('/search')">
            <img :src="$route.path === '/search' ? tabBarImgArr[2].selected :tabBarImgArr[2].normal" alt="">
            <span :class="{on: '/search' === $route.path}">搜索</span>
        </span>
        <span class="tab-item" @click="switchTo('/chart')">
            <img :src="$route.path === '/chart' ? tabBarImgArr[3].selected :tabBarImgArr[3].normal" alt="">
            <span :class="{on: '/chart' === $route.path}">聊天</span>
        </span>
        <span class="tab-item" @click="switchTo('/me')">
            <img :src="$route.path === '/me' ? tabBarImgArr[4].selected :tabBarImgArr[4].normal" alt="">
            <span :class="{on: '/me' === $route.path}">个人中心</span>
        </span>
    </div>
</template>

<script>
export default {
  name: 'TabBar',
  data(){
      return {
          tabBarImgArr:[
              {normal: require('./../../../static/img/icon_home.png'), selected: require('./../../../static/img/icon_home_selected.png')},
              {normal: require('./../../../static/img/icon_intro.png'), selected: require('./../../../static/img/icon_intro_selected.png')},
              {normal: require('./../../../static/img/icon_search.png'), selected: require('./../../../static/img/icon_search_selected.png')},
              {normal: require('./../../../static/img/icon_chat.png'), selected: require('./../../../static/img/icon_chat_selected.png')},
              {normal: require('./../../../static/img/icon_mine.png'), selected: require('./../../../static/img/icon_mine_selected.png')},
          ]
      }
  },
  methods:{
      switchTo(path){
         console.log(this.$router);
         
         this.$router.replace(path)
      }
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
   .bottom-tab
      width 100%
      height 5rem
      background-color #fff
      position fixed
      left 0
      bottom 0
      z-index 999
      box-shadow 0 -0.2rem 1rem #ccc
      display flex
      .tab-item
        display flex
        flex 1
        flex-direction column
        justify-content center
        align-items center
        font-size 1.2rem
        img
          width 35%
          margin-bottom 0.3rem
        .on
          color red
</style>
