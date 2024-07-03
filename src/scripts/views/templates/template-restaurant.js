import CONFIG from '../../globals/config';

const createDetailRestaurant = (restaurants) => `
<img src="${CONFIG.BASE_IMAGE_URL}/large/${restaurants.pictureId}" alt="${restaurants.name}" class="detail-foto" tabindex="0" crossorigin="anonymous">
<div class="restoran-desc" align="left" >
    <b tabindex="0" class="name-detail">Nama : ${restaurants.name}</b><br>
    <b tabindex="0" class="categories">Kategori : ${restaurants.categories.map((category) => category.name).join(', ')}</b><br>
    <b tabindex="0" class="alamat">Alamat : ${restaurants.address}</b><br>
    <b tabindex="0" class="deskripsi">Deskripsi : ${restaurants.description}</b><br>
    <b tabindex="0" class="menu">Menu : </b><br>
    <b tabindex="0" class="makanan">Makanan : ${restaurants.menus.foods.map((food) => food.name).join(', ')}</b><br>
    <b tabindex="0" class="minuman">Minuman : ${restaurants.menus.drinks.map((drink) => drink.name).join(', ')}</b><br>
    <b tabindex="0" class="rating-detail">Rating : ${restaurants.rating}</b><br>
    <b tabindex="0" class="review">Review restoran : </b><br>
    ${restaurants.customerReviews.map((review) => `
        <div class="review-item" tabindex="0">
            <b class="reviewer" tabindex="0">Nama: ${review.name}</b><br>
            <b class="coment" tabindex="0">Komentar: ${review.review}</b><br>
            <b class="tanggal-review" tabindex="0">Tanggal: ${review.date}</b><br><br>
        </div>
    `).join('')}
</div>
`;

const createRestaurantItem = (restaurants) => `
    <div class="resto">
        <div class="gambar">
            <img src="${CONFIG.BASE_IMAGE_URL}/medium/${restaurants.pictureId}" alt="${restaurants.name}" tabindex="0" crossorigin="anonymous">
        </div>
        <div class="description">
            <b class="NamaKota" tabindex="0">${restaurants.city}</b>
            <b class="rating" tabindex="0">Rating ${restaurants.rating}</b>
            <h3 class="Namarestaurant" tabindex="0">${restaurants.name}</h3>
            <p class="desc" tabindex="0">${restaurants.description}</p>
        </div>
        <div class="location">
            <a href="#/detail/${restaurants.id}">Lihat Restoran</a>
        </div>
    </div>
`;

const createFavoriteButton = () => `
    <button aria-label="Masukan ke favorite" id="favoriteButton" class="favorite" tabindex="0">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createFavoritedButton = () => `
    <button aria-label="Hapus dari favorite" id="favoriteButton" class="favorite" tabindex="0">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
  createRestaurantItem,
  createDetailRestaurant,
  createFavoriteButton,
  createFavoritedButton,
};
