import { ref } from 'vue';

const favorites = ref([]);

const addToFavorites = (movie) => {
  favorites.value = [...favorites.value, movie];
  console.log('Película agregada a favoritos. Longitud de Favoritos:', favorites.value.length);
};

export { favorites, addToFavorites };

