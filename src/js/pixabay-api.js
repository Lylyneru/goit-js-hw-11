const API_KEY = '47392920-efce9c2b3427e3353db7767ab';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query, page = 1, perPage = 20) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      return response.json();
    })
    .then(data => {
      return data.hits; // Масив зображень
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error;
    });
}
