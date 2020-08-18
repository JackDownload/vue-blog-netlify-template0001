// pages/index.vue
<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        cosmic-nuxt-app
      </h1>
      <div v-if="loading">Loading...</div>
      <div v-for="food in foods" :key="food.slug">
        <h3>{{ food.title }}</h3>
        <img alt="" :src="food.metadata.hero.imgix_url + '?w=400'"/>
      </div>
    </div>
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
  data() {
    return {
      loading: true
    }
  },
  async asyncData () {
    const data = await bucket.getObjects({
      type: 'foods',
      props: 'slug,title,content,metadata' // Limit the API response data by props
    })
    const foods = await data.objects
    return {
      foods,
      loading: false
    }
  }
}
</script>
<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>