import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

// const form = document.querySelector('#search-form');
// const loader = document.querySelector('.loader'); // Елемент завантажувача
// const gallery = document.querySelector('.gallery');

// // Показ завантажувача
// function showLoader() {
//   loader.classList.remove('hidden');
// }

// // Приховування завантажувача
// function hideLoader() {
//   loader.classList.add('hidden');
// }

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   const query = event.currentTarget.elements.query.value.trim();

//   if (!query) {
//     iziToast.warning({
//       title: 'Warning',
//       message: 'Please enter a search query.',
//     });
//     return;
//   }

//   // Очищуємо галерею та показуємо завантажувач
//   gallery.innerHTML = '';
//   showLoader();

//   // Виконання запиту до бекенду
//   fetchImages(query)
//     .then(images => {
//       renderImages(images, galleryContainer); // Рендеримо зображення
//     })
//     .catch(error => {
//       console.error('Error:', error);
//       iziToast.error({
//         title: 'Error',
//         message: error.message || 'Something went wrong. Please try again!',
//       });
//     })
//     .finally(() => {
//       hideLoader(); // Приховуємо завантажувач
//     });
// });

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
      renderGallery(images, galleryContainer); // Рендеримо галерею
    })
    .catch(error => {
      console.error('Error fetching images:', error);
    });
});
