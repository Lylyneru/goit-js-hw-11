import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// const searchForm = document.querySelector('form');
const searchForm = document.querySelector('.search-form');
// const input = document.querySelector('input[name="searchQuery"]');
const galleryContainer = document.querySelector('.gallery');

searchForm.addEventListener('submit', event => {
  event.preventDefault(); // Забороняє перезавантаження сторінки

  // const query = input.value.trim(); // Отримуємо значення з інпуту
  const query = event.currentTarget.elements.searchQuery.value.trim();
  // if (query === '') {
  //   alert('Please enter a search term!'); // Перевірка на порожній ввід
  //   return;
  // }
  if (!query) {
    showError('Please enter a search query');
    return;
  }

  fetchImages(query) // Виконуємо запит до API
    .then(images => {
      renderImages(images, galleryContainer); // Рендеримо галерею
    })
    .catch(error => {
      console.error('Error:', error);
      showError('No images found. Please try another query.');
      clearGallery();
    });
});
