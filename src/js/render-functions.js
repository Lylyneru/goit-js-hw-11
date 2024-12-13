export function clearGallery(gallery) {
  gallery.innerHTML = '';
}

export function renderImages(images, gallery) {
  const markup = images
    .map(
      image => `
        <a class="gallery__item" href="${image.largeImageURL}">
          <img class="gallery__image" src="${image.webformatURL}" alt="${image.tags}" loading="lazy"/>
          <div class="info">
            <p><b>Likes:</b> ${image.likes}</p>
            <p><b>Views:</b> ${image.views}</p>
            <p><b>Comments:</b> ${image.comments}</p>
            <p><b>Downloads:</b> ${image.downloads}</p>
          </div>
        </a>
      `
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}
