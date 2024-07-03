import FavoriteRestaurantDb from '../../data/favorite-restaurant';
import { createRestaurantItem } from '../templates/template-restaurant';

const Favorite = {
  async render() {
    return `
        <h1 align="center" style="color: #5F8670;" tabindex="0">Favorite Restaurant</h1>
        <div id="loadingIndicator" style="display: none;"></div>
        <div class="restoran" id="restoran"></div>
    `;
  },

  async afterRender() {
    const restos = await FavoriteRestaurantDb.getAllResto();
    const restoContainer = document.querySelector('#restoran');

    if (restos.length === 0) {
      restoContainer.innerHTML = `
      <center>
      <h3 style="color: #5F8670;" tabindex="0">Maaf, daftar favorite anda kosong.</h3>
      </center>
      `;
    } else {
      restos.forEach((resto) => {
        restoContainer.innerHTML += createRestaurantItem(resto);
      });
    }
  },
};

export default Favorite;
