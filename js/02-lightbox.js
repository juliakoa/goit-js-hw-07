import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

function setGalleryItem(item) {
  const galleryItem = document.createElement("li");
  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__item");
  const galleryImg = document.createElement("img");
  galleryImg.classList.add("gallery__image");

  galleryImg.src = item.preview;
  galleryImg.alt = item.description;
  galleryLink.href = item.original;

  galleryItem.appendChild(galleryLink);
  galleryLink.appendChild(galleryImg);

  function handleClick(event) {
    event.preventDefault();
  }

  galleryImg.addEventListener("click", handleClick);

  return galleryItem;
}

galleryItems.forEach((item) => {
  const galleryItemElement = setGalleryItem(item);
  gallery.appendChild(galleryItemElement);
});

const lightBoxImplementation = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: "250",
});

console.log(galleryItems);
