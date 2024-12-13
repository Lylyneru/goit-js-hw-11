import { fetchImages } from './js/pixabay-api.js';
import { clearGallery, renderImages } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loadMoreButton = document.querySelector('.load-more');

let currentQuery = '';
let currentPage = 1;
const perPage = 20;

let lightbox = new SimpleLightbox('.gallery a');

searchForm.addEventListener('submit', onSearch);
loadMoreButton.addEventListener('click', onLoadMore);

function onSearch(event) {
  event.preventDefault();
  const searchQuery = event.target.elements.searchQuery.value.trim();

  if (searchQuery === '') {
    iziToast.error({
      title: 'Error',
      message: 'Search query cannot be empty!',
    });
    return;
  }

  currentQuery = searchQuery;
  currentPage = 1;

  clearGallery(gallery);

  fetchImages(currentQuery, currentPage, perPage)
    .then(data => {
      renderImages(data.hits, gallery);
      lightbox.refresh();

      if (data.totalHits > perPage) {
        loadMoreButton.classList.remove('is-hidden');
      } else {
        loadMoreButton.classList.add('is-hidden');
      }

      iziToast.success({
        title: 'Success',
        message: `Found ${data.totalHits} images!`,
      });
    })
    .catch(error => {
      iziToast.error({ title: 'Error', message: error.message });
    });
}

function onLoadMore() {
  currentPage += 1;

  fetchImages(currentQuery, currentPage, perPage)
    .then(data => {
      renderImages(data.hits, gallery);
      lightbox.refresh();

      if (currentPage * perPage >= data.totalHits) {
        loadMoreButton.classList.add('is-hidden');
      }
    })
    .catch(error => {
      iziToast.error({ title: 'Error', message: error.message });
    });
}
