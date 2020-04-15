<template>
  <div class="nav">
    <el-row :gutter="0">
      <el-col :span="2" :offset="2">
        <div class="demo-type">
          <div>
            <el-avatar :size="60"
                :src="protrait"></el-avatar>
          </div>
        </div>
      </el-col>
      <el-col :span="10" :offset="2">
        <div class="nav-menu">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
            <el-menu-item :index="'/'+item.src" :key="index" v-for="(item,index) in navList">{{item.column}}</el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="6" :offset="2">
        <div class="operation">
          <el-button type="primary" plain>登录</el-button>
          <el-button type="success" plain>注册</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {getDataList} from "@/api/getPage";

  export default {
    name: "Nav",
    created() {
      this.isNav()
    },
    props:{
      protrait:{
        type:String
      }
    },
    data(){
      return{
        activeIndex:this.$store.state.pages.activeIndex,
        navList:[]
      }
    },
    methods:{
      handleSelect(key, keyPath){
        this.activeIndex = key
        this.$store.commit('pages/setActiveIndex',this.activeIndex)
      },
      isNav(){
        this.navList = this.$store.state.pages.navList
        this.activeIndex = this.$route.path
        this.$store.commit('pages/setActiveIndex',this.activeIndex)
        if (this.navList.length == 0){
          getDataList().then(res=>{
            this.navList = res.data.nav
            this.$store.commit('pages/setNavList',this.navList)
          })
        }
      },
    },
  }
</script>

<style scoped>
  .nav{
    background-color: #FFF;
  }
  .nav-menu{
    padding-left: 30px;
  }
  .operation{
    padding-top: 10px;
  }
  .el-menu{
    border-bottom: 0 !important;
  }
</style>