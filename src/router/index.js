import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/login',
        component: () => import('../views/user/Login')
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [
            {path: '/index', component: () => import('../views/info/Index')},
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
