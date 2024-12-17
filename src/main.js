import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

const searchForm = document.querySelector('form');
const input = document.querySelector('input[name="searchQuery"]');
const galleryContainer = document.querySelector('.gallery');

searchForm.addEventListener('submit', event => {
  event.preventDefault(); // Забороняє перезавантаження сторінки

  const query = input.value.trim(); // Отримуємо значення з інпуту

  if (query === '') {
    alert('Please enter a search term!'); // Перевірка на порожній ввід
    return;
  }

  fetchImages(query) // Виконуємо запит до API
    .then(images => {
      renderImages(images, galleryContainer); // Рендеримо галерею
    })
    .catch(error => {
      console.error('Error fetching images:', error);
    });
});
