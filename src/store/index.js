import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    value: null,
    commitType: 0,
    form: {}
  },
  mutations: {
    setToken(state, data) {
      if (data !== undefined) {
        state.token = data;
      }
    },
    setValue(state, data) {
      state.value = data;
    },
    commitForm(state, data) {
      state.form = Object.assign({}, data.form);
    },
    firstForm(state, data) {
      state.form = Object.assign({}, data);
    },
    commitType(state, data) {
      state.commitType = data;
    }
  },
  actions: {},
  modules: {}
});
