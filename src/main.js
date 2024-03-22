import { getImage } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import { gallery } from './js/render-functions';
form.addEventListener('submit', submitImageFinder);

function submitImageFinder(event) {
  event.preventDefault();

  const value = event.target.elements.formInput.value.trim();

  //   if (value === '') {
  //     iziToast.error({
  //       title: 'Error',
  //       position: 'topLeft',
  //       message: 'Please, type correct value',
  //       color: 'red',
  //     });
  //   }
  // else {
  getImage(value).then(collection => {
    renderGallery(collection.hits);

    const lightbox = new simpleLightbox('.gallery a');
    lightbox.refresh();
  });
  //   }
}
