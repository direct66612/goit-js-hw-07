import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");
const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item"><a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /></a></li>`;
  })
  .join("");
list.insertAdjacentHTML("beforeend", markup);
list.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }
  const currentProduct = e.target.closest(".gallery__image");
  const product = galleryItems.find(
    ({ original }) => original === currentProduct.dataset.source
  );
  const instance = basicLightbox.create(
    `<div class="modal"><img src="${product.original}" alt="${product.description}"/></div>`
  );
  instance.show();
  window.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
});
