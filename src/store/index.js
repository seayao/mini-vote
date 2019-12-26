import wepy from '@wepy/core'
import vuex from '@wepy/x'

wepy.use(vuex)

const store = new vuex.Store({
  state: {
    userInfo: {},
    guestList: [],
    isRefresh: false
  },
  mutations: {
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo
    },
    SET_GUEST_LIST: (state, guestList) => {
      state.guestList = guestList
    },
    SET_IS_REFRESH: (state, isRefresh) => {
      state.isRefresh = isRefresh
    }
  },
  actions: {
    setUserInfo({ commit }, userInfo) {
      commit('SET_USER_INFO', userInfo)
    },
    setGuestList({ commit }, guestList) {
      commit('SET_GUEST_LIST', guestList)
    },
    setIsRefresh({ commit }, isRefresh) {
      commit('SET_IS_REFRESH', isRefresh)
    }
  }
})

export default store
