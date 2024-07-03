import * as TestFactories from './helpers/testFactories';
import FavoriteRestaurantDb from '../src/scripts/data/favorite-restaurant';

describe('Favoriting A Resto', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
  };

  beforeEach(() => {
    addFavoriteButtonContainer();
  });

  it('should show the favorite button when the resto has not been favorited before', async () => {
    await TestFactories.createFavoritePresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="Masukan ke favorite"]')).toBeTruthy();
  });

  it('should not show the unfavorite button when the resto has not been favorited before', async () => {
    await TestFactories.createFavoritePresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="Hapus dari favorite"]')).toBeFalsy();
  });

  it('should be able to favorite the resto', async () => {
    await TestFactories.createFavoritePresenterWithResto({ id: 1 });

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    const resto = await FavoriteRestaurantDb.getResto(1);
    expect(resto).toEqual({ id: 1 });

    await FavoriteRestaurantDb.deleteResto(1);
  });

  it('should not add a resto again when its already favorited', async () => {
    await TestFactories.createFavoritePresenterWithResto({ id: 1 });

    await FavoriteRestaurantDb.putResto({ id: 1 });

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantDb.getAllResto()).toEqual([{ id: 1 }]);

    await FavoriteRestaurantDb.deleteResto(1);
  });

  it('should not add a resto when it has no id', async () => {
    await TestFactories.createFavoritePresenterWithResto({});

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantDb.getAllResto()).toEqual([]);
  });
});
