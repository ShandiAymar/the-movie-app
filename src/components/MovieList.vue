<template>
    <div>
      <h1>Listado de Películas</h1>
      <ul>
        <li v-for="movie in movies" :key="movie.id">
          {{ movie.title }}
          <button @click="addToFavorites(movie.id)">Agregar a Favoritos</button>
        </li>
      </ul>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        movies: [],
      }
    },
    mounted() {
      this.fetchMovies()
    },
    methods: {
      async fetchMovies() {
        try {
          const response = await this.$axios.get('/discover/movie', {
            params: {
              api_key: '3279c8a95e8766108057e3c654d5b2ea',
            },
          })
          this.movies = response.data.results
        } catch (error) {
          console.error('Error al obtener el listado de películas', error)
        }
      },
      async addToFavorites(movieId) {
        // Implementar lógica para agregar la película a favoritos
      },
    },
  }
  </script>
