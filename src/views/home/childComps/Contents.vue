<template>
  <div class="content">
    <div class="home-header">
      <router-link class="link"
                   to="/home">
        <img class="home-logo"
             :src="logo"
             alt="logo" />
      </router-link>
    </div>
    <div class="home-body">
      <div class="list" >
        <router-link class="link"
                     v-for="(item,index) in navList" :key="index"  :to="item.src">
          {{item.column}}
        </router-link>
      </div>
      <div class="introduce"> {{slogan}} </div>
    </div>
  </div>
</template>




<script>
  export default {
    name: "Content",
    props:{
      t_slogan:{
        type:String,
      },
      head_portrait:{
        type:String
      },
      nav:{
        type:Array,
      }
    },
    data(){
     return{
      logo:'',
      navList:[],
       slogan:'',
     }
    },
    watch:{//非常重要，不然为空
      head_portrait(newVal,oldVal){
        this.logo = newVal
      },
      nav(newVal,oldVal){
        this.navList = newVal
      },
      t_slogan(newVal,oldVal){
        this.slogan = newVal
      },
    }
  }
</script>

<style scoped lang="less">

  .content {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    font-size: 20px;
    text-align: center;
    padding-top: 12%;
    .home-logo {
      width: 220px;
      border-radius: 50%;
      animation: mylogo 3s;
      -moz-animation: mylogo 3s; /* Firefox */
      -webkit-animation: mylogo 3s; /* Safari and Chrome */
      -o-animation: mylogo 3s; /* Opera */
      animation-iteration-count: infinite;
    }
    .home-header {
      .link {
        display: block;
      }
    }
    .home-body {
      padding-top: 20px;
      .list {
        .link {
          display: inline-block;
          padding: 20px;
          color: #409eff;
          min-width: 80px;
        }
        .link:hover {
          color: rgb(155, 35, 35);
        }
      }
    }
    .introduce {
      padding-top: 20px;
      color: #fff;
    }
  }

  @keyframes mylogo {
    0% {
      transform: rotate(0deg) scale(0.8, 0.8);
      opacity: 1;
    }
    25% {
      transform: rotate(0deg) scale(1, 1);
      opacity: 0.8;
    }
    100% {
      transform: rotate(0deg) scale(0.8, 0.8);
      opacity: 1;
    }
  }

  @-moz-keyframes mylogo {
    0% {
      transform: rotate(0deg) scale(0.8, 0.8);
      opacity: 1;
    }
    25% {
      transform: rotate(0deg) scale(1, 1);
      opacity: 0.8;
    }
    100% {
      transform: rotate(0deg) scale(0.8, 0.8);
      opacity: 1;
    }
  }

  @-webkit-keyframes mylogo {
    0% {
      transform: rotate(0deg) scale(0.8, 0.8);
      opacity: 1;
    }
    25% {
      transform: rotate(0deg) scale(1, 1);
      opacity: 0.8;
    }
    100% {
      transform: rotate(0deg) scale(0.8, 0.8);
      opacity: 1;
    }
  }

  @-o-keyframes mylogo {
    0% {
      transform: rotate(0deg) scale(0.8, 0.8);
      opacity: 1;
    }
    25% {
      transform: rotate(0deg) scale(1, 1);
      opacity: 0.8;
    }
    100% {
      transform: rotate(0deg) scale(0.8, 0.8);
      opacity: 1;
    }
  }
</style>