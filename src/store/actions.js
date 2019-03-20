import {
    getHomeCasual
} from '../api/index'

import {
    HOME_CASUAL
} from './mutation-types'

export default {
    //1. 获取首页轮播图
    async reqHomeCasual({commit}){
        const result = await getHomeCasual()
        commit(HOME_CASUAL, {homecasual:result.message.data})
    }
}