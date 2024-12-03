const API_KEY = '47392920-efce9c2b3427e3353db7767ab';
const API_URL = 'https://pixabay.com/api/';

// Функція для виконання запиту до API
export async function fetchImages(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const response = await fetch(`${API_URL}?${params}`);
  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }
  return response.json();
}
