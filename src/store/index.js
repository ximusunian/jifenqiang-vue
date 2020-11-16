import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: false,
    network: false
  },
  mutations: {
    updateStatus(state, data) {
      state.status = data
    },
    setNetWork(state, data) {
      state.network = data
    }
  },
  actions: {},
  modules: {}
});
