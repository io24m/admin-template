import Vue from "vue"
import Router from "vue-router"
import Layout from "@/components/layout/Layout"

Vue.use(Router)

const createRouter = () => new Router({
    // mode: 'history', // require service support
    // scrollBehavior: () => ({
    //     y: 0
    // }),
    routes: [{
        name: "首页1",
        path: "/",
        component: Layout,
        children: [{
            name: "首页1",
            path: "/",
            component: () => import("@/views/index/Index")
        }]
    }, {
        name: "首页2",
        path: "/home",
        component: Layout,
        redirect: "/home",
        children: [{
            name:"h1",
            path: "/",
            component: () => import("@/views/home/Home")
        },{
            name:"h2",
            path: "/home",
            component: () => import("@/views/home/Home")
        }]
    } ]
})

const router = createRouter()

export default router