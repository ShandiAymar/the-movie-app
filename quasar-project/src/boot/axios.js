import { boot } from 'quasar/wrappers'
import axios from 'axios'
import Vue from 'vue'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: 'https://api.example.com' })
const apiKey = '3279c8a95e8766108057e3c654d5b2ea';
const apiToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjc5YzhhOTVlODc2NjEwODA1N2UzYzY1NGQ1YjJlYSIsInN1YiI6IjY1NWNhNzUzNTM4NjZlMDEzOWU1NTY5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2IoBqfWvkUKdGKUGgFLRj3IzLwZDF9rJCdhKdzu1yKs';

Vue.prototype.$axios = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: apiKey,
    api_token: apiToken,
  }
})

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }
