<template>
  <layout><main-content></main-content></layout>
</template>

<script>
  import MainContent from "./childComps/MainContent";
  import Layout from "../../components/content/Layout";

  export default {
    name: "Articles",
    data(){
      return{

      }
    },
    components:{
      MainContent,
      Layout
   }
  }
</script>

<style lang="less">


</style>