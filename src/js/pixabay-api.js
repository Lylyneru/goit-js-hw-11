export function fetchImages(query) {
  const API_KEY = '47392920-efce9c2b3427e3353db7767ab';
  const BASE_URL = 'https://pixabay.com/api/';
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })

    .then(data => {
      console.log('API response:', data);
      if (data.hits.length === 0) {
        throw new Error('No images found');
      }
      return data.hits; // Повертаємо масив зображень
    })
    .catch(error => {
      // Обробка помилок у функції fetchImages
      console.error('Error fetching images:', error);
      throw error; // Передаємо помилку далі для обробки у main.js
    });
}
