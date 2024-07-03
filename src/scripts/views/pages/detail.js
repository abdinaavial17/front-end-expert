import RestaurantDbSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import FavoriteButtonInitiator from '../../utils/favorite-button';
import { createDetailRestaurant } from '../templates/template-restaurant';

const Detail = {
  async render() {
    return `
    <h1 align="center" style="color: #5F8670;" tabindex="0">Detail Restaurant</h1>
    <div id="loadingIndicator" style="display: none;"></div>
    <div class="detail" id="detail"></div>
    <div id="favoriteButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detail');
    restaurantContainer.innerHTML = createDetailRestaurant(resto);
    FavoriteButtonInitiator.init({
      FavoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      resto: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        city: resto.city,
        address: resto.address,
        pictureId: resto.pictureId,
        rating: resto.rating,
      },
    });
  },
};

export default Detail;
