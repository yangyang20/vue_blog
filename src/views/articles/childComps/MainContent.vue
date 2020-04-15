<template>
  <div class="left">
    <ul class="articles-list" v-infinite-scroll="load" style="overflow:auto" infinite-scroll-distance="30px"
        :infinite-scroll-immediate="false">
      <li  class="item" v-for="item in articlesList">
        <a :href="href + item.id"
           target="_blank">
          <img class="wrap-img img-blur-done"
               :data-src="item.img"
               data-has-lazy-src="false"
               :src="item.img"
               alt="文章封面" />
          <div class="content">
            <h4 class="title">{{item.title}}</h4>
            <p  class="abstract">{{item.synopsis}}</p>
            <div class="meta">
              <span>查看 {{item.meta.browseNum}}</span>
              <span> 评论 {{item.meta.discussNum}}</span>
              <span> 赞 {{item.meta.praiseNum}}</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import {getDataList} from "../../../api/articles";
  import {getScrollTop,getDocumentHeight,getWindowHeight} from "../../../utils/utils";


  export default {
    name: "MainContent",
    created() {
      this.getData()
    },
    data(){
      return {
        href:'articlesDetail?article_id=',
        page:0,
        articlesList:[]
      }
    },
    methods:{
      load () {
        if(getScrollTop() + getWindowHeight() > getDocumentHeight() - 150){
          this.getData()
        }
      },
      getData(){
        this.page++
        getDataList(this.page).then(res=>{
          this.articlesList = this.articlesList.concat(res.data)
        })
      }
    }
  }
</script>

<style scoped lang="less">
  a{
    text-decoration:none;
  }
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
  .item .wrap-img {
    position: absolute;
    top: 50%;
    margin-top: -50px;
    right: 0;
    width: 125px;
    height: 100px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      border: 1px solid #f0f0f0;
    }
  }
</style>