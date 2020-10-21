<template>
  <Layout>
    <div class="project">
      <el-row :gutter="20">
        <el-col class="el-col-pointer"
                :span="isMobileOrPc ? 24 : 12"
                v-for="(l, index) in list"
                :key="index"
                style="margin-bottom: 20px">
          <a :href="l.src"
             target="_blank"
             rel="noopener noreferrer">
            <el-card shadow="hover">
              <img :src="l.img"
                   class="image">
              <div style="padding: 14px;">
                <h4>{{l.title}}</h4>
                <div class="content">{{l.synopsis}}</div>
                <span>
                {{l.start_date}}--
                </span>
                <span>
                {{l.end_date}}
                </span>
              </div>
            </el-card>
          </a>
        </el-col>
      </el-row>
    </div>
  </Layout>
</template>

<script>
  import Layout from "../../components/content/Layout";
  import {isMobileOrPc} from "utils/utils.js"

  import {getDataList} from "../../api/project";

  export default {
    name: "Project",
    created() {
      this.getData()
    },
    data(){
      return{
        isMobileOrPc:isMobileOrPc(),
        page:0,
        list: []
      }
    },
    methods:{
      getData(){
        getDataList(this.page).then(res=>{
          this.list = res.data
        })
      }
    },
    components:{
      Layout
    }
  }
</script>

<style lang="less" scoped>
  .project {
    overflow: hidden;
    padding: 40px 0;
    .el-col-pointer {
      cursor: pointer;
    }
    .content {
      height: 70px;
      text-overflow: ellipsis;
    }
    .image {
      width: 100%;
      height: 250px;
    }
    a{text-decoration:none}
  }
</style>