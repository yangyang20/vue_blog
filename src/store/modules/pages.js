export default {
  namespaced:true,

  state:{
    //导航栏
    navList:[],
    //导航栏的当前地址
    activeIndex:"",
    //标签集
    cates:[],
  //  头像
    protrait:"",

  },

  mutations:{
    addNavList (state, payload){
      state.navList.push(payload)
    },
    setNavList(state,payload){
      state.navList = payload
    },
    setCates(state,payload){
      state.cates = payload
    },
    setProtrait(state,payload){
      state.protrait = payload
    },
    setActiveIndex(state,payload){
      state.activeIndex = payload
    }
  },
  actions:{

  }
}