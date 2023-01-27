/*Blog*/

const lastWriting = document.getElementById("unfold-blog");
const seeText = document.getElementById("writes");
/*About Me*/
const aboutMe = document.getElementById("unfold-card");
const selectProfile = document.getElementById("profile-card");
/*Mobile*/
const menuHamIcon = document.querySelector(".ham-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const initBox = document.querySelector(".screen-container");

const photoList = [];

lastWriting.addEventListener("click", toggleBrief);
aboutMe.addEventListener("click", togglePersonalCard);
menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
}
function togglePersonalCard() {
  window.scrollTo(0, 0);
  seeText.style.display = "none";
  selectProfile.style.display = "flex";
}
function toggleBrief() {
  window.scrollTo(0, 0);
  seeText.style.display = "flex";
  selectProfile.style.display = "none";
}
photoList.push({
  image: "./assets/buro.jpg",
  tag: "https://www.feriaburo.com/"
});
photoList.push({
  image: "./assets/estereo.jpg",
  tag: "https://www.festivalestereopicnic.com/#/"
});
photoList.push({
  image: "./assets/miisCosmetics.jpg",
  tag: "https://miiscosmetics.com/"
});
photoList.push({
  image: "./assets/trendy.jpg",
  tag: "https://maquillajetrendyshop.com/"
});
photoList.push({
  image: "./assets/screen.jpg",
  tag: "https://www.rubyrose.com.co/"
});
photoList.push({
  image: "./assets/bohio.jpg",
  tag: "https://bohioplaya.com/"
});
photoList.push({
  image: "./assets/aleli.jpg",
  tag: "https://www.alelihomedecor.com/"
});
photoList.push({
  image: "./assets/soreil.jpg",
  tag: "https://soreil.com.co/es"
});
photoList.push({
  image: "./assets/wawaw.jpg",
  tag: "https://wawaw.co/"
});
photoList.push({
  image: "./assets/libertario.jpg",
  tag: "https://libertariocoffee.co/"
});
photoList.push({
  image: "./assets/loto-sur.jpg",
  tag: "https://www.lotodelsur.com/"
});
photoList.push({
  image: "./assets/pizza-website.jpg",
  tag: "http://damici.co/"
});
function loadPhotos(array) {
  for (photo of array) {
    const cardGroup = document.createElement("div");
    const ancherLink = document.createElement("a");
    const groupImage = document.createElement("img");
    const screenTag = document.createElement("div");
    const nameTag = document.createElement("p");

    cardGroup.classList.add("screen-card");
    groupImage.setAttribute("src", photo.image, photo.tag);
    //screenTag.classList.add("screen-info");
    ancherLink.setAttribute("href", photo.tag);
    ancherLink.setAttribute("target", "_blank");
    ancherLink.innerHTML = photo.tag;

    //screenTag.appendChild(nameTag);
    cardGroup.appendChild(ancherLink);
    ancherLink.appendChild(groupImage);
    //cardGroup.appendChild(screenTag);
    initBox.appendChild(cardGroup);
  }
}
loadPhotos(photoList);
