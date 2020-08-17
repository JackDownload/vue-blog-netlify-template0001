<template>
  <main class="blog" :class="{ 'recipe--reading': this.food }">
    <blog-title :food-name="title" :filters="filters" />
    <blog-nav :content="content" :filters="filters" :navs="navs"/>
    <blog-feed :filters="filters"/>
    <blog-post :post="post"/>
    <blog-footer/>
  </main>
</template>

<script>
import BlogTitle from './BlogTitle'
import BlogNav from './BlogNav'
import BlogFeed from './BlogFeed'
import BlogPost from './BlogPost'
import BlogFooter from './BlogFooter'

export default {
  name: 'blog',
  components: { BlogTitle, BlogNav, BlogFeed, BlogPost, BlogFooter },
  resource: 'Blog',
  props: {
    food: String,
    author: String
  },

  data() {
    return {
      navs: 0,
      title: '',
      labels: {
        food: '',
        author: ''
      }
    }
  },

  computed: {
    content() {
      return { title: this.title, labels: this.labels }
    },
    filters() {
      let filters = {}

      if (this.food) filters.food = this.food
      if (this.author) filters.author = this.author

      return filters
    }
  },

  watch: {
    '$route.name' (to, from) {
      if (to !== from) this.navs++
    }
  },

  beforeMount() {
    this.$getResource('recipe')
  }
}
</script>