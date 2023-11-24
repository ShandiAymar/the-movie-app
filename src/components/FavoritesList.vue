// FavoritesList.vue

<template>
  <div>
    <h1 v-if="favoritesList && favoritesList.length > 0">Listado de Películas Favoritas</h1>
    <ul>
      <li v-for="favorite in favoritesList" :key="favorite.id">
        {{ favorite.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { favorites } from 'src/favoritesService.js';

export default {
  setup() {
    const favoritesList = ref([]);

    onMounted(() => {
      console.log('Componente FavoritesList montado. Longitud de Favoritos:', favorites.value.length);
      console.log('Lista de Favoritos:', favorites.value);
      favoritesList.value = favorites.value; // Actualizar la referencia local
    });

    watch(() => favorites.value, (newFavorites) => {
      console.log('Lista de Favoritos actualizada:', newFavorites);
      favoritesList.value = newFavorites;
    });

    return {
      favoritesList,
    };
  },
};
</script>



