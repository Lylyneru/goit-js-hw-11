// export function clearGallery(gallery) {
//   gallery.innerHTML = '';
// }

// export function renderImages(images, gallery) {
//   const markup = images
//     .map(
//       image => `
//         <a class="gallery__item" href="${image.largeImageURL}">
//           <img class="gallery__image" src="${image.webformatURL}" alt="${image.tags}" loading="lazy"/>
//           <div class="info">
//             <p><b>Likes:</b> ${image.likes}</p>
//             <p><b>Views:</b> ${image.views}</p>
//             <p><b>Comments:</b> ${image.comments}</p>
//             <p><b>Downloads:</b> ${image.downloads}</p>
//           </div>
//         </a>
//       `
//     )
//     .join('');
//   gallery.insertAdjacentHTML('beforeend', markup);
// }

// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// export function renderImages(images) {
//   const gallery = document.querySelector('.gallery');
//   const markup = images
//     .map(
//       image => `
//       <a href="${image.largeImageURL}" class="gallery-item">
//         <div class="photo-card">
//           <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
//           <div class="info">
//             <p><b>Likes:</b> ${image.likes}</p>
//             <p><b>Views:</b> ${image.views}</p>
//             <p><b>Comments:</b> ${image.comments}</p>
//             <p><b>Downloads:</b> ${image.downloads}</p>
//           </div>
//         </div>
//       </a>
//     `
//     )
//     .join('');

//   gallery.innerHTML += markup;

//   // Ініціалізація SimpleLightbox
//   const lightbox = new SimpleLightbox('.gallery a', {
//     captions: true,
//     captionsData: 'alt',
//     captionDelay: 250,
//   });

//   lightbox.refresh(); // Оновлення галереї після додавання нових елементів
// }

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(
      image => `
      <a href="${image.largeImageURL}" class="gallery-item">
        <div class="photo-card">
          <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
          <div class="info">
            <p><b>Likes:</b> ${image.likes}</p>
            <p><b>Views:</b> ${image.views}</p>
            <p><b>Comments:</b> ${image.comments}</p>
            <p><b>Downloads:</b> ${image.downloads}</p>
          </div>
        </div>
      </a>
    `
    )
    .join('');

  gallery.innerHTML += markup;

  // Ініціалізація SimpleLightbox
  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });

  lightbox.refresh(); // Оновлення галереї після додавання нових елементів
}
