import Vue from 'vue'
import Router from 'vue-router'

import Home from './../pages/Home/Home'
import Recommend from './../pages/Recommend/Recommend'
import Search from './../pages/Search/Search'
import Chart from './../pages/Chart/Chart'
import Me from './../pages/Me/Me'

import Box from './../pages/Home/Children/Box'
import Dress from './../pages/Home/Children/Dress'
import Ele from './../pages/Home/Children/Ele'
import Food from './../pages/Home/Children/Food'
import General from './../pages/Home/Children/General'
import Man from './../pages/Home/Children/Man'
import Hot from './../pages/Home/Children/Hot/Hot'
import Mbaby from './../pages/Home/Children/Mbaby'
import Shirt from './../pages/Home/Children/Shirt'

Vue.use(Router)

export default new Router({
    routes: [
        {
          path: '/home',
          component: Home,
          children: [
            {path: 'hot', component: Hot},
            {path: 'box', component: Box},
            {path: 'dress', component: Dress},
            {path: 'ele', component: Ele},
            {path: 'food', component: Food},
            {path: 'general', component: General},
            {path: 'man', component: Man},
            {path: 'mbaby', component: Mbaby},
            {path: 'shirt', component: Shirt},
            {path: '/home', redirect: '/home/hot'}
          ]
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
