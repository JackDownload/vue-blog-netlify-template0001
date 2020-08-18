import Vue from 'vue'
import Router from 'vue-router'
import Blog from '../components/Blog'
import Recipe from '../components/Recipe'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    name: 'feed',
    component: Blog
  }, {
    path: '/blog/by/:author',
    name: 'author',
    props: true,
    component: Blog
  }, {
    path: '/read/:post',
    name: 'post',
    props: true,
    component: Blog
  }, {
    path: '/recipe',
    name: 'recipe',
    component: Recipe
  }, {
    path: '/recipe/by/:author',
    name: 'author',
    props: true,
    component: Recipe
  }, {
    path: '/recipe/:recipe',
    name: 'recipe',
    props: true,
    component: Recipe
  }]
})
