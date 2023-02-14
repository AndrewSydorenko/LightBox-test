import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const galleryEl = document.querySelector('.gallery');

function createMarkup(images) {
    return images
        .map(
            ({ original, preview, description }) =>
                `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join("");
}

galleryEl.insertAdjacentHTML('beforeend', createMarkup(galleryItems));



new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });