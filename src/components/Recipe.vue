<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Cosmic Vue App</h1>
    <div v-if="loading">Loading...</div>
    <ul>
      <li v-for="food in foods" :key="food.slug">
        <div>{{ food.title }}</div>
        <img alt="" :src="food.metadata.hero.imgix_url + '?w=400'"/>
      </li>
    </ul>
  </div>
</template>
<script>
const Cosmic = require('cosmicjs')
const api = Cosmic()
// Set these values, found in Bucket > Settings after logging in at https://app.cosmicjs.com/login
const bucket = api.bucket({
  slug: 'COSMIC_BUCKET',
  read_key: 'COSMIC_READ_KEY'
})
export default {
  name: 'App',
  data () {
    return {
      loading: false,
      foods: null
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.error = this.food = null
      this.loading = true
      bucket.getObjects({
        type: 'foods',
        props: 'slug,title,content,metadata' // Limit the API response data by props
      }).then(data => {
        const foods = data.objects
        this.loading = false
        this.foods = foods
      })
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
</style>