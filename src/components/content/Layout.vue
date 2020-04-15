<template>
  <div>
    <el-container>
      <el-header><div class="home-nav"><Nav :protrait="protrait"></Nav></div></el-header>
      <el-container>
        <el-main>
<!--          插槽 主体内容-->
          <slot></slot>
        </el-main>
        <el-aside width="400px">
          <div>
            <RightContent :cates="cates" :protrait="protrait"></RightContent>
          </div>
        </el-aside>
      </el-container>
<!--      <el-footer>Footer</el-footer>-->
    </el-container>
  </div>
</template>

<script>
  import Nav from "../common/Nav";
  import RightContent from "./RightContent";

  import {getDataList} from "../../api/layout";

  export default {
    name: "Layout",
    created() {
      this.getData()
    },
    data(){
      return {
        cates:[],
        protrait:''
      }
    },
    methods:{
      getData(){
        this.cates = this.$store.state.pages.cates
        this.protrait = this.$store.state.pages.protrait
        if (this.protrait == ""){
          getDataList().then(res=>{
            this.cates = res.data.cates
            this.protrait = res.data.protrait
            this.$store.commit('pages/setCates',this.cates)
            this.$store.commit('pages/setProtrait',this.protrait)
          })
        }
      }
    },
    components:{
      Nav,
      RightContent,
    }
  }
</script>

<style scoped>
  .home-nav{
    width: 100%;
    border-bottom: 1px solid #f0f0f0 ;
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
  }


  /*.el-footer {*/
  /*  background-color: #B3C0D1;*/
  /*  color: #333;*/
  /*  text-align: center;*/
  /*  line-height: 60px;*/
  /*  width: 100%;*/
  /*  z-index: 999;*/
  /*  position: fixed;*/
  /*  bottom: 0;*/
  /*  left: 0;*/
  /*}*/




  body > .el-container {
    margin-bottom: 40px;
  }

  .main{
    padding: 40px;
  }
</style>