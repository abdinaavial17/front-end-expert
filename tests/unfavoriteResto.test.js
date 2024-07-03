import FavoriteRestaurantDb from '../src/scripts/data/favorite-restaurant';
import * as TestFactories from './helpers/testFactories';

describe('Unfavorite a resto', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
  };

  beforeEach(async () => {
    addFavoriteButtonContainer();
    await FavoriteRestaurantDb.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantDb.deleteResto(1);
  });

  it('should display unfavorite widget when the resto has been favorited', async () => {
    await TestFactories.createFavoritePresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="Hapus dari favorite"]')).toBeTruthy();
  });

  it('should not display favorite widget when the resto has been favorited', async () => {
    await TestFactories.createFavoritePresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="Masukan ke favorite"]')).toBeFalsy();
  });

  it('should be able to remove favorited movie from the list', async () => {
    await TestFactories.createFavoritePresenterWithResto({ id: 1 });

    document.querySelector('[aria-label="Hapus dari favorite"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantDb.getAllResto()).toEqual([]);
  });

  it('should not throw error when user click unfavorited widget if the unfavorited resto is not in the list', async () => {
    await TestFactories.createFavoritePresenterWithResto({ id: 1 });

    await FavoriteRestaurantDb.deleteResto(1);

    document.querySelector('[aria-label="Hapus dari favorite"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantDb.getAllResto()).toEqual([]);
  });
});
