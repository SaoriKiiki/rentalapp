const initBox = document.querySelector(".screen-container");

const photoList = [];

photoList.push({
  tag: "Buró- Feria de Diseño Independiente, Bogotá -2022",
  image: "./assets/buro.jpg",
});
photoList.push({
  tag: "Estereo Picnic- Concierto al Aire Libre, Bogotá -2022",
  image: "./assets/estereo.jpg",
});
photoList.push({
  tag: "Miis Cosmetics- Maquillaje accequible, Bogotá -2022",
  image: "./assets/miisCosmetics.jpg",
});
photoList.push({
  tag: "Trendy- Maquillaje accequible, Bogotá -2022",
  image: "./assets/trendy.jpg",
});
photoList.push({
  tag: "Ruby Rose- Maquillaje innovador cosmético, Bogotá -2022",
  image: "./assets/screen.jpg",
});
photoList.push({
  tag: "Bohio Playa- Cuidado y salud de la piel, Bogotá -2022",
  image: "./assets/bohio.jpg",
});
photoList.push({
  tag: "Alelí- Decoración de interiores, Bogotá -2021",
  image: "./assets/aleli.jpg",
});
photoList.push({
  tag: "Soreil- Ropa íntima femenina, Bogotá -2021",
  image: "./assets/soreil.jpg",
});
photoList.push({
  tag: "Wawaw- Tienda para mascotas, Bogotá -2021",
  image: "./assets/wawaw.jpg",
});
photoList.push({
  tag: "Libertario- Cuidado y salud de la piel, Bogotá -2020",
  image: "./assets/libertario.jpg",
});
photoList.push({
  tag: "Loto del sur- Cuidado y salud de la piel, Bogotá -2020",
  image: "./assets/loto-sur.jpg",
});
photoList.push({
  tag: "D'amici- Restaurante italiano prêt a manger, Bogotá -2020",
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
    groupImage.appendChild(screenTag);
    initBox.appendChild(cardGroup);
  }
}
loadPhotos(photoList);
