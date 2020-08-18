<template>
  <div id="recipe">
    <h1>Cosmic Vue App</h1>
    <div v-if="loading">Loading...</div>
    <ul>
      <li v-for="food in foods" :key="food.slug">
        <div>{{ food.title }}</div>
      </li>
    </ul>
  </div>
</template>
<script>
const Cosmic = require('cosmicjs')
const api = Cosmic()
// Set these values, found in Bucket > Settings after logging in at https://app.cosmicjs.com/login
const bucket = api.bucket({
  slug: '403ce750-e0bf-11ea-a7da-416cf5f0e16c',
  read_key: 'KUQwJBqttZxNKM4Y2iAZndrEqCTaH0g4f5Uj7gnV0Uqdwpe8bF'
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
        props: 'slug,title' // Limit the API response data by props
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