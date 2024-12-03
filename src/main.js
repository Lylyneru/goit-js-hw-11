import { fetchImages } from './pixabay-api.js';
import { renderGallery, showNotification } from './render-functions.js';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('#gallery');
const loadingMessage = document.querySelector('#loading-message');

// Обробник форми
form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = form.searchQuery.value.trim();

  if (!query) {
    showNotification('error', 'Error', 'Please enter a search query!');
    return;
  }

  // Показуємо повідомлення про завантаження
  loadingMessage.style.display = 'block';
  gallery.innerHTML = '';

  try {
    const data = await fetchImages(query);

    if (data.hits.length === 0) {
      showNotification(
        'info',
        'Info',
        'Sorry, there are no images matching your search query. Please try again!'
      );
    } else {
      renderGallery(data.hits, gallery);
    }
  } catch (error) {
    showNotification(
      'error',
      'Error',
      'Failed to load images. Please try again later.'
    );
  } finally {
    loadingMessage.style.display = 'none';
  }
});
