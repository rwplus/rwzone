import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import(/* webpackChunkName: "rwhome" */ '@/pages/index/views/Index')
    },
    {
        path: '/docs',
        name: 'docs',
        component: () => import(/* webpackChunkName: "rwdocs" */ '@/pages/index/views/Docs')
    },
]

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})