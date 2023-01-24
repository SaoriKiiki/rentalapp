/*Blog*/ 
const lastWriting = document.getElementById('unfold-blog');
const seeText = document.getElementById('writes');
/*About Me*/
const aboutMe = document.getElementById('unfold-card');
const selectProfile = document.getElementById('profile-card');
/*Mobile*/
const menuHamIcon = document.querySelector('.ham-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const initBox = document.querySelector(".screen-container");

const photoList = [];

lastWriting.addEventListener('click', toggleBrief);
aboutMe.addEventListener('click', togglePersonalCard);
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
  mobileMenu.classList.toggle('inactive');
}
function togglePersonalCard() {
  window.scrollTo(0, 0);
  seeText.style.display = 'none';
  selectProfile.style.display = 'flex';
}
function toggleBrief() {
  window.scrollTo(0, 0);
  seeText.style.display = 'flex';
  selectProfile.style.display = 'none';
}
photoList.push({
  tag: "https://www.feriaburo.com/",
  image: "./assets/buro.jpg",
});
photoList.push({
  tag: "https://www.festivalestereopicnic.com/#/",
  image: "./assets/estereo.jpg",
});
photoList.push({
  tag: "https://miiscosmetics.com/",
  image: "./assets/miisCosmetics.jpg",
});
photoList.push({
  tag: "https://maquillajetrendyshop.com/",
  image: "./assets/trendy.jpg",
});
photoList.push({
  tag: "https://www.rubyrose.com.co/",
  image: "./assets/screen.jpg",
  href: "",
});
photoList.push({
  tag: "https://bohioplaya.com/",
  image: "./assets/bohio.jpg",
});
photoList.push({
  tag: "https://www.alelihomedecor.com/",
  image: "./assets/aleli.jpg",
});
photoList.push({
  tag: "https://soreil.com.co/es",
  image: "./assets/soreil.jpg",
});
photoList.push({
  tag: "https://wawaw.co/",
  image: "./assets/wawaw.jpg",
});
photoList.push({
  tag: "https://libertariocoffee.co/",
  image: "./assets/libertario.jpg",
});
photoList.push({
  tag: "https://www.lotodelsur.com/",
  image: "./assets/loto-sur.jpg",
});
photoList.push({
  tag: "http://damici.co/",
  image: "./assets/pizza-website.jpg",
});
function loadPhotos(array) {
  for (photo of array) {
    const cardGroup = document.createElement("div");
    const groupImage = document.createElement("img");
    const screenTag = document.createElement("div");
    const nameTag = document.createElement("p");
    const linkPage = document.createElement("p");

    cardGroup.classList.add("screen-card");
    groupImage.setAttribute("src", photo.image);
    screenTag.classList.add("screen-info");
    nameTag.innerText = photo.tag;
    linkPage.innerHTML = photo.href;

    screenTag.appendChild(nameTag);
    cardGroup.appendChild(groupImage);
    cardGroup.appendChild(screenTag);
    initBox.appendChild(cardGroup);
  }
}
loadPhotos(photoList);
