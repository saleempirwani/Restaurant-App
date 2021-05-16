import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [result, setResult] = useState([]);

  const searchAPI = async searchTerm => {
    try {
      const {
        data: {businesses},
      } = await yelp.get('/search', {
        params: {
          limit: 50,
          location: 'san jose',
          term: searchTerm,
        },
      });
      setResult(businesses);
    } catch (err) {
      console.log('ERROR => ', err.message);
      alert('Something went wrong! try again later.');
    }
  };

  useEffect(() => {
    searchAPI('pasta');
  }, []);

  return [searchAPI, result];
};
