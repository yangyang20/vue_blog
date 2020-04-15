<template>
  <layout>
    <div>
      <div class="title">{{info.title}}</div>
      <div v-html="info.content" class="content">
      </div>
    </div>
  </layout>
</template>

<script>
  import Layout from "../../components/content/Layout";

  import {getDataDetail} from "../../api/tattle";

  export default {
    name: "TattleDetail",
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
        getDataDetail(this.id).then(res=>{
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
  .title{
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    margin-top: 15px;
  }
.content{
  margin: 10px 20px;
  padding: 20px 30px;
  line-height: 30px;
}
</style>