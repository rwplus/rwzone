import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    { path: '/', name: 'index', component: r => { require(['./App'], r) }, meta: { title: 'index' } }
]

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})