import wepy from '@wepy/core'
import vuex from '@wepy/x'

wepy.use(vuex)

const store = new vuex.Store({
  state: {
    num: 0
  },
  mutations: {
    increment (state) {
      state.num++;
    }
  },
  actions: {
    increment ({ commit }) {
      commit('increment');
    },
    incrementAsync ({ commit }) {
      setTimeout(() => commit('increment'), 1000);
    }
  }
})

export default store
