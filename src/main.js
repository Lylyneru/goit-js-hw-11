import { fetchImages } from './src/js/pixabay-api.js';
import { renderImages } from './src/js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const query = e.target.searchQuery.value.trim();
  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search term!',
    });
    return;
  }

  fetchImages(query)
    .then(images => {
      renderImages(images);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again later.',
      });
    });
});
