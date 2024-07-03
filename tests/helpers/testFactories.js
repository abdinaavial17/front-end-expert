import FavoriteButtonInitiator from '../../src/scripts/utils/favorite-button';

const createFavoritePresenterWithResto = async (resto) => {
  await FavoriteButtonInitiator.init({
    FavoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
    resto,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createFavoritePresenterWithResto };
