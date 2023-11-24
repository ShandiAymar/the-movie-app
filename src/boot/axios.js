import { boot } from 'quasar/wrappers'
import axios from 'axios'

const apiKey = '3279c8a95e8766108057e3c654d5b2ea';
const apiToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjc5YzhhOTVlODc2NjEwODA1N2UzYzY1NGD5YjJlYSIsInN1YiI6IjY1NWNhNzUzNTM4NjZlMDEzOWU1NTY5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2IoBqfWvkUKdGKUGgFLRj3IzLwZDF9rJCdhKdzu1yKs';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: apiKey,
    api_token: apiToken,
  }
})

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axiosInstance
})

