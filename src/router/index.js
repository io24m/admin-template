import Vue from "vue"
import Router from "vue-router"
import Layout from "@/layout/Layout"
// import Layout2 from "@/components/layout2/Layout"
import constantRouter from './constantRouter.js'
Vue.use(Router)

const createRouter = () => new Router({
    // mode: 'history', // require service support
    // scrollBehavior: () => ({
    //     y: 0
    // }),
    routes: constantRouter.concat([{
        path: "/*",
        redirect: "/404",
        component: Layout,
        children: [{
            path: "/404",
            component: () => import("@/components/errPage/404")
        }]
    }])
})

const router = createRouter()

export default router