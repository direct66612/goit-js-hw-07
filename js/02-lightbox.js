import { galleryItems } from "./gallery-items.js";
const list = document.querySelector(".gallery");
// Change code below this line
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item"><a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/></a></li>`
  )
  .join("");
list.insertAdjacentHTML("beforeend", markup);
list.addEventListener("click", handleClick);
function handleClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
}
const instance = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});
instance.on("show.simpleLightbox");
