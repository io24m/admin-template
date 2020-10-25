import Vue from "vue"
import Router from "vue-router"
import Layout from "@/components/layout/Layout2"

Vue.use(Router)

const createRouter = () => new Router({
    // mode: 'history', // require service support
    // scrollBehavior: () => ({
    //     y: 0
    // }),
    routes: [{
        path: "/",
        component: Layout, 
        children: [{
            path: "/",
            component: () => import("@/views/index/Index")
        }] 
    }, {
        path: "/home",
        component: Layout, 
        redirect:"/home",
        children: [{
            path: "/home",
            component: () => import("@/views/home/Home")
        }]
    }]
})

const router = createRouter()

export default router