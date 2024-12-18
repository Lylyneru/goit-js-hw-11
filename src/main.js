import { fetchImages } from './src/js/pixabay-api.js';
import { renderImages, clearGallery } from './src/js/render-functions.js';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('#search-form');
const galleryContainer = document.querySelector('.gallery');
let lightbox = new SimpleLightbox('.gallery a');

// Функція обробки події на формі
searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();

  const query = event.currentTarget.searchQuery.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
    });
    return;
  }

  // Показуємо індикатор завантаження
  showLoader();

  fetchImages(query)
    .then(images => {
      clearGallery(galleryContainer); // Очищаємо галерею
      renderImages(images, galleryContainer, lightbox); // Рендеримо зображення
      iziToast.success({
        title: 'Success',
        message: 'Images loaded successfully!',
      });
    })
    .catch(error => {
      clearGallery(galleryContainer); // Очистка галереї у разі помилки
      iziToast.error({
        title: 'Error',
        message:
          error.message ||
          'Sorry, there are no images matching your search query. Please try again!',
      });
    })
    .finally(() => {
      hideLoader(); // Ховаємо індикатор завантаження
    });
}

// Показ індикатора завантаження
function showLoader() {
  galleryContainer.innerHTML = `<div class="loader"></div>`;
}

// Сховати індикатор завантаження
function hideLoader() {
  document.querySelector('.loader')?.remove();
}
