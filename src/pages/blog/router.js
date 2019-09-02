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
        path: '/blog/article/:id',
        name: 'article',
        component: () => import(/* webpackChunkName: "blogContent" */ '@/pages/blog/views/Article.vue')
    }
]

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})