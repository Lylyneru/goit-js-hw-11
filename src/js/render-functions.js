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

  const markup = images
    .map(
      image => `
    <div class="card">
      <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
      <div class="card-info">
        <span>Likes: ${image.likes}</span>
        <span>Views: ${image.views}</span>
        <span>Comments: ${image.comments}</span>
        <span>Downloads: ${image.downloads}</span>
      </div>
    </div>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}
