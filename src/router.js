import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Views/Home'
import About from '@/Views/About'
import Error from '@/Views/Error'

Vue.use(Router)

export default new Router({
    mode: 'history',

    routes: [
        {
            path:'/',
            name: 'home',
            component: Home
        },

        {
            path: '/about',
            name: 'about',
            component: About
        },

        {
            path: '*',
            name: 'Error',
            component: Error
        }
    ]
})