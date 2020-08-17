<template>
  <main class="recipe" :class="{ 'recipe--reading': this.food }">
    <recipe-title :food-name="title" :filters="filters" />
    <recipe-nav :content="content" :filters="filters" :navs="navs"/>
    <recipe-feed :filters="filters"/>
    <recipe-food :food="food"/>
    <recipe-footer/>
  </main>
</template>

<script>
import RecipeTitle from './RecipeTitle'
import BlogNav from './BlogNav'
import RecipeFeed from './RecipeFeed'
import RecipeFood from './RecipeFood'
import BlogFooter from './BlogFooter'

export default {
  name: 'recipe',
  components: { RecipeTitle, BlogNav, RecipeFeed, RecipeFood, BlogFooter },
  resource: 'Recipe',
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