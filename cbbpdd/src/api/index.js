import ajax from './ajax'

//1. 基础路径
const BASE_URL = 'http://127.0.0.1:3000'

//2. 请求方法

//2.1请求轮播图
export const getHomeCasual = ()=>ajax(BASE_URL + '/api/homecasual');
//2.2 请求首页导航
export const getHomeNav = ()=>ajax(BASE_URL + '/api/homenav');
//2.3 请求首页商品数据
export const getHomeShopList = ()=>ajax(BASE_URL + '/api/homeshoplist');

//2.4 请求推荐数据
export const getRecommendShopList = ()=>ajax(BASE_URL + '/api/recommendshoplist');

//2.4 请求推荐数据
export const getSearchShop = ()=>ajax(BASE_URL + '/api/searchgoods');