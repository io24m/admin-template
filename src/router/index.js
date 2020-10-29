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
        icon: "home",
        name: "首页",
        path: "/",
        component: Layout,
        children: [{
            name: "首页",
            path: "/",
            component: () => import("@/views/home/Home")
        }]
    // }, {
    //     icon: "home",
    //     name: "邮件",
    //     path: "/mail",
    //     component: Layout,
    //     // redirect: "/mail",
    //     children: [{
    //         icon: "mail",
    //         name: "h1",
    //         path: "/mail",
    //         component: () => import("@/views/index/Index")
    //     }]
    }]
})

const router = createRouter()

export default router