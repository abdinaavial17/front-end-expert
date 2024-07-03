import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItem } from '../templates/template-restaurant';

const Restaurant = {
  async render() {
    return `
    <div class="hero">
    <div class="hero-inner">
        <center>
            <h1 class="hero-title">Selamat datang di Lapua restaurant catalogue</h1>
            <p class="hero-tagline">Temukan rekomendasi restoran terbaik di sini beserta dengan rating dan deskripsinya. Tentukan restoran terbaik kamu!</p>
        </center>
    </div>
    </div>
    <h1 align="center" style="color: #5F8670;" tabindex="0">Explore Restaurant</h1>
    <div id="loadingIndicator" style="display: none;"></div>
    <div class="restoran" id="restoran"></div>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.restaurantList();
    const restaurantsContainer = document.querySelector('#restoran');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItem(restaurant);
    });
  },
};

export default Restaurant;
