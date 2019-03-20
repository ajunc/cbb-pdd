<template>
    <div class="recommend-container" v-if="recommendshoplist.length > 0">
      <ul class="recommend">
        <shop-list
            tag="li"
            v-for="(item,index) in recommendshoplist" 
            :item="item"
            :key="index"
        />
      </ul>
    </div>
</template>

<script>
import { mapState } from "vuex";
import ShopList from "./../../components/ShopList/ShopList";

export default {
  name: 'Recommend',
  mounted(){
    this.$store.dispatch('reqRecommendShopList')
  },
  computed:{
    ...mapState(['recommendshoplist'])
  },
  components:{
      ShopList
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    .recommend-container
        height 100%;
        width 100%;
        background-color #f5f5f5
        .recommend
            display flex
            flex-direction row
            flex-wrap wrap
            background-color #f5f5f5
            margin-bottom 80px
</style>
