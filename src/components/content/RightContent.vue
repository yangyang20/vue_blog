<template>
  <div class="right">
    <div class="title-img">
      <div class="avatar">
        <el-avatar :size="100"
            :src="protrait"></el-avatar>
      </div>
      <div class="title">桃白白</div>
    </div>
    <div class="tags">
      <div class="title-tags">标签云</div>

      <div class="tag-group">
        <el-tag class="tag"
            v-for="item in cates"
            :key="item.name"
            type="info"
            effect="dark">
          {{ item.name }}
        </el-tag>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RightContent",
    props:{
      protrait:{
        type:String
      },
      cates:{
        type:Array
      }
    },
  }
</script>

<style scoped lang="less">
  .right{
    text-align: center;
  }
  .title-img{
    width: 100%;

    .avatar{
      width: 130px;
      height: 130px;
      padding-top: 50px;
      margin: 0 auto;
    }
    .title{
      font-size: 25px;
      font-weight: 700;
      line-height: 10px;
      height: 50px;
      border-bottom: 1px solid #D3DCE6;
    }
  }

  .tags{
    .title-tags{
      height: 50px;
      font-size: 14px;
      color: #969696;
      line-height: 55px;
    }
    .tag{
      margin: 0 10px;
    }
  }
</style>