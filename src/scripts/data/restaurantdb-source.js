import API_ENDPOINT from '../globals/api-endpoints';

class RestaurantDbSource {
  static async restaurantList() {
    try {
      const loadingIndicator = document.getElementById('loadingIndicator');
      loadingIndicator.style.display = 'block';

      const response = await fetch(API_ENDPOINT.RESTAURANT);
      const responseJson = await response.json();

      loadingIndicator.style.display = 'none';

      return responseJson.restaurants;
    } catch (error) {
      alert('Error fetching restaurant list:', error);
      return [];
    }
  }

  static async detailRestaurant(id) {
    try {
      const loadingIndicator = document.getElementById('loadingIndicator');
      loadingIndicator.style.display = 'block';

      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();

      loadingIndicator.style.display = 'none';

      return responseJson.restaurant;
    } catch (error) {
      alert('Error fetching restaurant detail:', error);
      return null;
    }
  }
}

export default RestaurantDbSource;
