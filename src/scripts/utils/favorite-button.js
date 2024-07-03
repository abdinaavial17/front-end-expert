import FavoriteRestaurantDb from '../data/favorite-restaurant';
import { createFavoriteButton, createFavoritedButton } from '../views/templates/template-restaurant';

const FavoriteButtonInitiator = {
  async init({ FavoriteButtonContainer, resto }) {
    this._FavoriteButtonContainer = FavoriteButtonContainer;
    this._resto = resto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;

    if (await this._isRestoExist(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestoExist(id) {
    const resto = await FavoriteRestaurantDb.getResto(id);
    return !!resto;
  },

  _renderFavorite() {
    this._FavoriteButtonContainer.innerHTML = createFavoriteButton();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantDb.putResto(this._resto);
      this._renderButton();
    });
  },

  _renderFavorited() {
    this._FavoriteButtonContainer.innerHTML = createFavoritedButton();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantDb.deleteResto(this._resto.id);
      this._renderButton();
    });
  },
};

export default FavoriteButtonInitiator;
