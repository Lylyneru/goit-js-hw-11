import { renderImages, clearGallery } from './render-functions.js';
import { fetchImages } from './pixabay-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  const query = e.target.elements.searchQuery.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Search field cannot be empty!',
    });
    return;
  }

  clearGallery();

  fetchImages(query)
    .then(images => {
      if (images.length === 0) {
        iziToast.info({
          title: 'No results',
          message: 'Sorry, no images found. Try another query.',
        });
        return;
      }
      renderImages(images);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: error.message,
      });
    });
}

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    currentPage += 1;
    fetchImages(query, currentPage)
      .then(images => {
        renderImages(images);
      })
      .catch(error => {
        iziToast.error({
          title: 'Error',
          message: error.message,
        });
      });
  }
});

let isFetching = false;

window.addEventListener('scroll', () => {
  if (isFetching) return;

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    isFetching = true;
    currentPage += 1;

    fetchImages(query, currentPage)
      .then(images => {
        if (images.length === 0) {
          iziToast.info({
            title: 'End of results',
            message: 'No more images to load.',
          });
          return;
        }
        renderImages(images);
      })
      .catch(error => {
        iziToast.error({
          title: 'Error',
          message: error.message,
        });
      })
      .finally(() => {
        isFetching = false;
      });
  }
});
