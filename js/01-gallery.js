import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

function setGalleryItem(item) {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");
  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  const galleryImg = document.createElement("img");
  galleryImg.classList.add("gallery__image");

  galleryImg.dataset.original = item.original;
  galleryImg.src = item.preview;
  galleryImg.alt = item.description;
  galleryLink.href = item.original;

  galleryItem.appendChild(galleryLink);
  galleryLink.appendChild(galleryImg);

  function handleClick(event) {
    event.preventDefault();
  }

  galleryImg.addEventListener("click", handleClick);

  galleryImg.onclick = () => {
    basicLightbox
      .create(`<img src="${item.original}" alt="${item.description}"/>`)
      .show();
  };

  return galleryItem;
}

galleryItems.forEach((item) => {
  const galleryItemElement = setGalleryItem(item);
  gallery.appendChild(galleryItemElement);
});

console.log(galleryItems);
