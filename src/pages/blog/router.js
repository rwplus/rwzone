import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/blog',
        name: 'blog',
        component: () => import(/* webpackChunkName: "bloglist" */ '@/pages/blog/views/BlogList.vue')
    },
    {
        path: '/blog/artcle/:id',
        name: 'artcle',
        component: () => import(/* webpackChunkName: "blogContent" */ '@/pages/blog/views/Artcle.vue')
    },
    {
        path: '/blog/edit',
        name: 'edit',
        component: ()=>import(/* webpackChunkName: "blogEdit" */ '@/pages/blog/views/Edit.vue')
    }
]

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})