<template>
  <div>
    <h1 v-if="favorites && favorites.length > 0">Listado de Películas Favoritas</h1>
    <ul>
      <li v-for="favorite in favorites" :key="favorite.id">
        {{ favorite.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    favorites: Array,
  },
  mounted() {
    console.log('Componente FavoritesList montado. Favoritos:', this.favorites);
  },
};

</script>
