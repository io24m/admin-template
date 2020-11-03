// import Layout from "@/components/layout/Layout"
import Layout from "@/layout/Layout"

const constantRouter = [{
    icon: "home",
    name: "控制台",
    path: "/",
    redirect: "/dashboard",
    component: Layout,
    children: [{
        path: "/dashboard",
        component: () => import("@/views/dashboard/Dashboard")
    }]
}, {
    icon: "home",
    name: "首页",
    path: "/home",
    redirect: "/home/index",
    component: Layout,
    children: [{
        path: "/home/index",
        component: () => import("@/views/home/Home")
    }]
}, {
    icon: "mail",
    name: "邮件",
    path: "/mail",
    component: Layout,
    // redirect: "/mail",
    children: [{
        icon: "mail",
        name: "h1",
        path: "/mail",
        component: () => import("@/views/index/Index")
    }]
}, {
    icon: "table",
    name: "组件",
    path: "/component",
    component: Layout,
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