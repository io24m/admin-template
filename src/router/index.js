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
        path: "/",
        component: () => import("@/components/Index")
    }, {
        path: "/hello",
        component: Layout, 
        redirect:"/hello/hello1",
        children: [{
            path: "hello1",
            component: () => import("@/components/Index")
        }]
    }]
})

const router = createRouter()

export default router