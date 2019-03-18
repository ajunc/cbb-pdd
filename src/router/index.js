import Vue from 'vue'
import Router from 'vue-router'

import Home from './../pages/Home/Home'
import Recommend from './../pages/Recommend/Recommend'
import Search from './../pages/Search/Search'
import Chart from './../pages/Chart/Chart'
import Me from './../pages/Me/Me'

Vue.use(Router)

export default new Router({
    routes: [
        {
          path: '/home',
          component: Home
        },
        {
          path: '/recommend',
          component: Recommend
        },
        {
          path: '/search',
          component: Search
        },
        {
          path: '/chart',
          component: Chart
        },
        {
          path: '/me',
          component: Me
        },
        {
		      path: '/',
          redirect: '/home'
        },
    ]
})
