import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/editor',
        name: 'editor',
        component: () => import(/* webpackChunkName: "rweditor" */ '@/pages/editor/views/Edit')
    },
]

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})