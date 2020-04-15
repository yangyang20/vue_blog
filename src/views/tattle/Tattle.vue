<template>
  <layout>
    <div class="left">
      <ul class="articles-list" v-infinite-scroll="load" style="overflow:auto">
        <li  class="item" v-for="item in articlesList">
          <a :href="href + item.id"
             target="_blank">
            <div class="content">
              <h4 class="title">{{item.title}}</h4>
              <p  class="abstract">{{item.synopsis}}</p>
              <div class="meta">
<!--        //        <span>查看 {{item.meta.browseNum}}</span>-->
<!--      //          <span>评论 {{item.meta.discussNum}}</span>-->
<!--        //        <span>赞 {{item.meta.praiseNum}}</span>-->
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </layout>
</template>

<script>
  import Layout from "../../components/content/Layout";

  import {getDataList} from "../../api/tattle";

  export default {
    name: "Tattle",
    created() {
      this.getData()
    },
    data(){
      return {
        href:'/tattleDetail?article_id=',
        page:0,
        articlesList:[]
      }
    },
    methods:{
      load () {
        console.log("出发了吗");
      },
      getData(){
        getDataList(this.page).then(res=>{
          this.page++
          this.articlesList = res.data
        })
      }
    },
    components:{
      Layout
    }
  }
</script>


<style scoped>
.left{
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  /*padding-right: 20px!important;*/
  padding-left: 30px;
}
.title{
  color: #333;
  margin: 7px 0 4px;
  display: inherit;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
}
.abstract{
  min-height: 30px;
  margin: 0 0 8px;
  font-size: 13px;
  line-height: 24px;
  color: #555;
}
.meta{
  padding-right: 0!important;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
}
.articles-list{
  margin: 0;
  padding: 0;
  list-style: none;
}
.item{
  line-height: 20px;
  position: relative;
  padding: 15px 0;
  padding-right: 150px;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
  cursor: pointer;
}
a{
  text-decoration:none;
}
</style>