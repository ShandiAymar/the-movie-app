
<template>
  <div>
    <h1>Listado de Películas Favoritas</h1>
    <ul>
      <li v-for="favorite in favorites" :key="favorite.id">
        {{ favorite.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favorites: [],
    }
  },
  mounted() {
    this.fetchFavorites()
  },
  methods: {
    async fetchFavorites() {
      try {
        const response = await this.$axios.get('/account/{account_id}/favorite/movies', {
          params: {
            api_key: '3279c8a95e8766108057e3c654d5b2ea',
            session_id: 'shandiam',
          },
        })
        this.favorites = response.data.results
      } catch (error) {
        console.error('Error al obtener el listado de películas favoritas', error)
      }
    },
  },
}
</script>
