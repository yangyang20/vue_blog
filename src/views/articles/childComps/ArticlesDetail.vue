<template>
  <Layout>
    <div>
<!--//      <div class="title">{{info.title}}</div>-->
      <div v-html="info.content" class="content">
      </div>
    </div>
  </Layout>
</template>

<script>
  import Layout from "../../../components/content/Layout";
  import {getDataInfo} from "../../../api/articles";

  export default {
    name: "ArticlesDetail",
    created() {
      this.getData()
    },
    data(){
      return {
        id:0,
        info:{}
      }
    },
    methods:{
      getData(){
        this.id = this.$route.query.article_id;
        getDataInfo(this.id).then(res=>{
          this.info = res.data
        })
      }
    },
    components:{
      Layout
    }
  }
</script>

<style scoped>
.content{
  margin: 20px 20px;
}
</style>