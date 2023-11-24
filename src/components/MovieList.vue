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
import { addToFavorites } from 'src/favoritesService.js';
export default {
  data() {
    return {
      movies: [],
    };
  },
  methods: {
    addToFavorites(movieId) {
      const movieToAdd = this.movies.find(movie => movie.id === movieId);
    if (movieToAdd) {
      addToFavorites(movieToAdd);
      console.log('Película ${movieId} agregada a favoritos');
    }
    },
    async fetchMovies() {
      try {
        const response = await this.$axios.get('/discover/movie', {
          params: {
            api_key: '3279c8a95e8766108057e3c654d5b2ea',
          },
        });
        console.log('Respuesta de la API:', response.data);
        this.movies = response.data.results;
      } catch (error) {
        console.error('Error al obtener el listado de películas', error);
      }
    },
  },
  mounted() {
    console.log('Componente MovieList montado');
    this.fetchMovies();
  },
};
</script>

