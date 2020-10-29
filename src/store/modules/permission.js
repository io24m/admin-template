import Layout from "@/components/layout/Layout"

const state = {
    routers: [{
        icon: "home",
        name: "首页",
        path: "/",
        component: Layout,
        children: [{
            name: "首页",
            path: "/",
            component: () => import("@/views/home/Home")
        }]
    }]
}
const getters = {
    getRouters(state) {
        return state.routers
    }
}
const mutations = {
    addRouter(state,r) {
        state.routers = state.routers.concat(r)
    }
}
const actions = {
    addRouter({
        commit
    },r) {
        commit("addRouter",r)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}