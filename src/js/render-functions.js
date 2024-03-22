export const gallery = document.querySelector('.gallery');

export function renderGallery(arr) {
  const markup = arr
    .map(photo => {
      return `
        <div class="gallery-item">
        <a href="${photo.largeImageURL}">
        <img src="${photo.webformatURL}" 
        alt="${photo.tags}"/>
        <ul class="text-list">
        <li class="list-item">Likes:<span class="image-text">${photo.likes}</span></li>
        <li class="list-item">Views:<span class="image-text">${photo.views}</span></li>
        <li class="list-item">Comments:<span class="image-text">${photo.comments}</span></li>
        <li class="list-item">Downloads:<span class="image-text">${photo.downloads}</span></li>
        </ul>
        </a>
        </div>
      `;
    })
    .join(' ');

  gallery.innerHTML = markup;
}
