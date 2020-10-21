<template>
  <div class="home">
    <img alt="Vue logo" :src="bg_img">
    <Contents :nav="nav" :t_slogan="t_slogan" :head_portrait="head_portrait"></Contents>
    <div class="footer">
      <span>©2020  (鄂)-非经营性鄂ICP备18031587号-3</span>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Contents from "./childComps/Contents";
  import {getDataList} from "@/api/getPage";


  export default {
    name: 'Home',
    created() {
      this.getData()
    },
    data(){
      return {
        nav:[],
        head_portrait:'',
        bg_img:'',
        t_slogan:''
      }
    },
    methods:{
      getData(){
        getDataList().then(res=>{
          this.t_slogan = res.data.slogan
          this.head_portrait = res.data.head_portrait
          this.bg_img = res.data.background_img
          this.nav = res.data.nav
        })
      }
    },
   watch:{
      nav(newVal,oldVal){
        this.$store.commit('pages/setNavList',newVal)
      }
   },
    components: {
      Contents
    }
  }
</script>

<style lang="less" scoped>
  .home {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    img{
      width: 100%;
    }
  }

  .footer {
    background-color: #00ffff;
    color: #333;
    text-align: center;
    line-height: 60px;
    width: 100%;
    z-index: 999;
    position: fixed;
    bottom: 0;
    left: 0;
  }
</style>