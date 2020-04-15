<template>
  <Layout>
    <el-timeline :reverse="reverse">
      <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :timestamp="activity.timestamp">

        <el-card class="box-card">
<!--          <div slot="header" class="clearfix">-->
<!--            <span>卡片名称</span>-->
<!--            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
<!--          </div>-->
          <div class="text item">
            <h3>{{activity.title}}</h3>
            <p>{{activity.content }}</p>
            <p>
              <span>{{activity.start_date}}--</span>
              <span>{{activity.end_date}}</span>
            </p>
          </div>
        </el-card>

      </el-timeline-item>
    </el-timeline>
  </Layout>
</template>

<script>
  import Layout from "../../components/content/Layout";
  import {getDataList} from "../../api/timeline";

  export default {
    name: "Timeline",
    created() {
      this.getData()
    },
    data() {
      return {
        reverse: true,
        page:0,
        activities: []
      };
    },
    methods:{
        getData(){
          getDataList(this.page).then(res=>{
            this.activities = res.data
          })
        }
    },
    components:{
      Layout
    }
  }
</script>

<style scoped>
.item{
  padding: 20px;
}
</style>