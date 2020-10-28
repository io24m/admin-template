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
        icon:"home",
        name: "首页1",
        path: "/",
        component: Layout,
        children: [{
            name: "首页1",
            path: "/",
            component: () => import("@/views/index/Index")
        }]
    }, {
        icon:"home",
        name: "首页2",
        path: "/home",
        component: Layout,
        redirect: "/home",
        children: [{
            icon:"mail",
            name:"h1",
            path: "/",
            component: () => import("@/views/home/Home")
        },{
            icon:"home",
            name:"h2",
            path: "/home",
            component: () => import("@/views/home/Home"),
            children: [{
                icon:"mail",
                name:"h1",
                path: "/",
                component: () => import("@/views/home/Home")
            },{
                icon:"mail",
                name:"h2",
                path: "/home",
                component: () => import("@/views/home/Home"),
                
            }]
        }]
    } ]
})

const router = createRouter()

export default router