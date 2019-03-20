<template>
    <div class="shop-container">
        <ul class="shop-list">
            <li class="shop-list-item">
                <img src="./../imgs/shop-list-img.png" alt="" width="100%">
                <h4 class="list-item-title">小清新韩版毛衣女套头宽松甜美加厚百搭加厚2019新款秋冬毛线衣</h4>
                <div class="list-item-bottom">
                    <span class="item-price">$26.9</span>
                    <span class="item-counter">已拼成2345单</span>
                    <span class="item-user">
                        <img src="./../imgs/usr1.png" alt="">
                        <img src="./../imgs/usr2.png" alt="">
                    </span>
                    <span class="item-buy">
                        <button>去拼单 ></button>
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    .shop-container
        margin-bottom 80px
        background-color #f5f5f5
        .shop-list
            .shop-list-item
                margin-bottom 10px
                background-color #ffffff
                display flex
                flex-direction column
                .list-item-title
                    line-height 22px
                    width 94%
                    margin-left 3%
                    height 44px
                    overflow hidden
                .list-item-bottom
                    margin 10px 0
                    display flex
                    flex-direction row
                    justify-content space-around
                    align-items center
                    .item-price
                        font-size 18px
                        text-align center
                        font-weight bold
                        color red
                        flex 1
                    .item-counter
                        flex 2
                        font-size 12px 
                        color #ccc
                    .item-user
                        display flex
                        justify-content center
                        align-items center
                        flex 1
                        img
                            width 30px
                            border-radius 50%
                        img:nth-child(2) 
                            margin-left -6px 
                    .item-buy
                        flex 2
                        button  
                            width 80%
                            border none 
                            height 34px
                            color #ffffff
                            display flex
                            justify-content center
                            align-items center
                            margin-left 10px
                            background-color red
                            border-radius 10px
                            font-size 15px
</style>
