import {
    HOME_CASUAL,
    HOME_NAV,
    HOME_SHOP_LIST,
    RECOMMEND_SHOP_LIST,
    SEARCH_GOODS
} from './mutation-types'

export default {
    [HOME_CASUAL](state, {homecasual}) {
        state.homecasual = homecasual;
    },
    [HOME_NAV](state, {homenav}) {
        state.homenav = homenav;
    },
    [HOME_SHOP_LIST](state, {homeshopList}) {
        state.homeshopList = homeshopList;
    },
    [RECOMMEND_SHOP_LIST](state, {recommendshoplist}) {
        state.recommendshoplist = recommendshoplist;
    },
    [SEARCH_GOODS](state, {searchgoods}) {
        state.searchgoods = searchgoods;
    },
}