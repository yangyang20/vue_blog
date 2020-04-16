import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/home/Home";
import Articles from "../views/articles/Articles";
import Timeline from "../views/timeline/Timeline";
import Project from "../views/project/Project";
import About from "../views/about/About";
import Tattle from "../views/tattle/Tattle";
import TattleDetail from "../views/tattle/TattleDetail";
import ArticlesDetail from "../views/articles/childComps/ArticlesDetail";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/articles',
    name: 'Articles',
    component: Articles
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: Timeline
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/tattle',
    name: 'Tattle',
    component: Tattle,

  },
  {
    path:'/tattleDetail',
    name:'TattleDetail',
    component:TattleDetail,
  },
  {
    path:'/articlesDetail',
    name:'ArticlesDetail',
    component:ArticlesDetail,
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
