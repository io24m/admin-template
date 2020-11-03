// import Layout from "@/components/layout/Layout"
import Layout from "@/layout/Layout"

const constantRouter = [{
    name: "控制台",
    path: "/",
    redirect: "/dashboard",
    component: Layout,
    meta: {
        icon: "home"
    },
    children: [{
        path: "/dashboard",
        component: () => import("@/views/dashboard/Dashboard")
    }]
}, {
    name: "首页",
    path: "/home",
    redirect: "/home/index",
    component: Layout,
    meta: {
        icon: "home"
    },
    children: [{
        path: "/home/index",
        component: () => import("@/views/home/Home")
    }]
}, {
    name: "邮件",
    path: "/mail",
    component: Layout,
    // redirect: "/mail", 
    meta: {
        icon: "mail"
    },
    children: [{
        name: "h1",
        path: "/mail",
        component: () => import("@/views/index/Index")
    }]
}, {
    name: "组件",
    path: "/component",
    component: Layout,
    meta: {
        icon: "table"
    },
    children: [{
        name: "表格",
        path: "/component/table",
        component: () => import("@/views/table/Table")
    }, {
        name: "组件列表",
        path: "/component/list",
        component: () => import("@/views/table/List")
    }]
}]

export default constantRouter