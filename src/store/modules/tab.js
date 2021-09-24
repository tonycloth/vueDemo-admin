const state = {
  menu: [],
  currentMenu: null,
  tabsList: [
    {
      path: '/',
      name: 'home',
      label: '首页',
      icon: 's-home'
    }
  ]
}
const mutations = {
  selectMenu (state, val) {
    // 增加tag
    // val.name !== 'home' ? state.currentMenu = val : state.currentMenu = null
    if (val.name !== 'home') {
      state.currentMenu = val
      let result = state.tabsList.findIndex(item => item.name === val.name)
      // console.log(result)
      // console.log(state.tabsList)
      if (result === -1) {
        state.tabsList.push(val)
      }
    } else {
      state.currentMenu = null
    }
  },
  // 关闭tag
  closeTab (state, val) {
    let result = state.tabsList.findIndex(item => item.name === val.name)
    state.tabsList.splice(result, 1)
  }
}
const actions = {

}
export default {
  state,
  mutations,
  actions
}
