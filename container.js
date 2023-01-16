const initBox = document.querySelector(".album");

const photos = [];

photos.push({
  image: ""
});
photos.push({
  image: ""
});

function loadPhotos() {
  for (photo of photos) {
    const cardGroup = document.createElement("section");
    const groupImage = document.createElement("img");

    cardGroup.classList.add("photo");

    groupImage.setAttribute("src", photo.image);

    cardGroup.appendChild(groupImage);
    initBox.appendChild(cardGroup);
  }
}
loadPhotos(photos);
