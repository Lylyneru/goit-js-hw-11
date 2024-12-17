import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// let lightbox = new SimpleLightbox('.gallery a'); // Ініціалізація

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionClass: 'emageTitle',
});

export function renderImages(images) {
  const gallery = document.querySelector('.gallery');

  gallery.innerHTML = ''; // Очищення попередніх результатів

  if (images.length === 0) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
  }

  // Генеруємо HTML для зображень
  const markup = images
    .map(
      image => `
        <a href="${image.largeImageURL}" class="gallery-link">
          <div class="card">
            <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
            <div class="card-info">
              <span>Likes: ${image.likes}</span>
              <span>Views: ${image.views}</span>
              <span>Comments: ${image.comments}</span>
              <span>Downloads: ${image.downloads}</span>
            </div>
          </div>
        </a>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh(); // Оновлюємо SimpleLightbox
}
