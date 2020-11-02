const state = {
    user: {
        name: "李先生"
    }
}
const getters = {
    getUser(state) {
        return state.user
    }
}
const mutations = {

}
const actions = {

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}