import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer hAmkHfyR5S9ScCKOO_6o1U_IZ-83qQB4gYUFo67AmEOSpkxdqO8M-5q7owNki95FI9o5yw3D7JQBBfEfr0GmYnGeuq5yK7Vzzxiu6gVk3TM_O4ISFkbk_RSvFF1fYHYx',
  },
});
