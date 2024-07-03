Feature('Favoriting Restos');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restos', ({ I }) => {
  I.see('Maaf, daftar favorite anda kosong.', '.resto-not-found');
});

Scenario('favoriting one resto', ({ I }) => {
  I.see('Maaf, daftar favorite anda kosong.', '.resto-not-found');
  I.amOnPage('/');

  I.seeElement('.location-link');
  I.click(locate('.location-link').first());

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto');
});

Scenario('cancel favoriting resto', ({ I }) => {
  I.see('Maaf, daftar favorite anda kosong.', '.resto-not-found');
  I.amOnPage('/');

  I.seeElement('.location-link');
  I.click(locate('.location-link').first());

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto');

  I.seeElement('.location-link');
  I.click(locate('.location-link').first());

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.see('Maaf, daftar favorite anda kosong.', '.resto-not-found');
});
