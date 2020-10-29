import Vue from "vue"
import Vuex from 'vuex'
import permission from './modules/permission'

Vue.use(Vuex)

const modules = {
    permission
}

const store = new Vuex.Store({
    modules
})

export default store