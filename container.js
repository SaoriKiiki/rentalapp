const menuHamIcon = document.querySelector('.ham-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const initBox = document.querySelector(".screen-container");


const photoList = [];

menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
  mobileMenu.classList.toggle('inactive');
}


photoList.push({
  tag: "Buró- Feria de Diseño Independiente",
  image: "./assets/buro.jpg",
});
photoList.push({
  tag: "Estereo Picnic- Concierto al Aire Libre",
  image: "./assets/estereo.jpg",
});
photoList.push({
  tag: "Miis Cosmetics- Maquillaje accequible",
  image: "./assets/miisCosmetics.jpg",
});
photoList.push({
  tag: "Trendy- Maquillaje accequible",
  image: "./assets/trendy.jpg",
});
photoList.push({
  tag: "Ruby Rose- Maquillaje innovador cosmético",
  image: "./assets/screen.jpg",
});
photoList.push({
  tag: "Bohio Playa- Cuidado y salud de la piel",
  image: "./assets/bohio.jpg",
});
photoList.push({
  tag: "Alelí- Decoración de interiores",
  image: "./assets/aleli.jpg",
});
photoList.push({
  tag: "Soreil- Ropa íntima femenina",
  image: "./assets/soreil.jpg",
});
photoList.push({
  tag: "Wawaw- Tienda para mascotas",
  image: "./assets/wawaw.jpg",
});
photoList.push({
  tag: "Libertario- Cuidado y salud de la piel",
  image: "./assets/libertario.jpg",
});
photoList.push({
  tag: "Loto del sur- Cuidado y salud de la piel",
  image: "./assets/loto-sur.jpg",
});
photoList.push({
  tag: "D'amici- Restaurante italiano prêt a manger",
  image: "./assets/pizza-website.jpg",
});
function loadPhotos(array) {
  for (photo of array) {
    const cardGroup = document.createElement("div");
    const groupImage = document.createElement("img");
    const screenTag = document.createElement("div");
    const nameTag = document.createElement("p");

    cardGroup.classList.add("screen-card");
    groupImage.setAttribute("src", photo.image);
    screenTag.classList.add("screen-info");
    nameTag.innerText = photo.tag;

    screenTag.appendChild(nameTag);
    cardGroup.appendChild(groupImage);
    cardGroup.appendChild(screenTag);
    initBox.appendChild(cardGroup);
  }
}
loadPhotos(photoList);
