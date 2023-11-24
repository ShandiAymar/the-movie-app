<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
  </q-page>
  <div>
    <router-link to="/movies">
      <q-btn>Ver Listado de Películas</q-btn>
    </router-link>
    <router-link to="/favorites">
      <q-btn>Ver Favoritos</q-btn>
    </router-link>

    <router-view :favorites="favorites" @movieAddedToFavorites="addToFavorites" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { ref } from 'vue';
import { favorites } from 'src/favoritesService.js';

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      favorites: [],
    };
  },
  methods: {
    addToFavorites(movie) {
      if (!this.isInFavorites(movie)) {
        this.favorites.push(movie);
        console.log('Película añadida a favoritos', this.favorites);
      } else {
        console.log('Película ya está en favoritos');
      }
    },

    isInFavorites(movie) {
      // Verifica si la película ya está en la lista de favoritos
      return this.favorites.some(favorite => favorite.id === movie.id);
    },
  },
});
</script>
