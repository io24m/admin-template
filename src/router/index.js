import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const createRouter = () => new Router({
    // mode: 'history', // require service support
    // scrollBehavior: () => ({
    //     y: 0
    // }),
    routes: [{
        path: "/",
        component: () => import("@/components/Index")
    },{
        path: "/hello",
        component: () => import("@/components/HelloWorld")
    }]
})

const router = createRouter()

export default router