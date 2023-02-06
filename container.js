/*Menu aside*/
let toggleStatus = 1;
/*Mobile*/
const menuHamIcon = document.getElementById("unfold-icon");
const asideMenu = document.getElementById("left-menu");
const asideBanners = [];
/*Header Blog*/
let infoCapsule;
const lastWriting = document.getElementById("unfold-blog");
const seeText = document.getElementById("writes");
/* Header About Me*/
const aboutMe = document.getElementById("unfold-card");
const selectProfile = document.getElementById("profile-card");
/* Header Experience*/
const initTitle = document.getElementById("unfold-experience");
const viewTask = document.querySelector(".experience-container");
/* Body content */
const initBox = document.querySelector(".screen-container");

menuHamIcon.addEventListener("click", rowOfArguments);
lastWriting.addEventListener("click", toggleBrief);
aboutMe.addEventListener("click", togglePersonalCard);

initTitle.addEventListener("click", toggleRoutine);

const titleLists = [];
const photoList = [];

//Mosaic of services explained
titleLists.push({
  basic:
    "Graphic designer +4 years of experience designing around softwares as Figma, Adobe XD and more user interfaces creation. English proficiency and fluency. Styling for the interactions modules for Version Books for web-based and mobile apps regarding brand and marketing. "
});
/*
titleLists.push({
  basic: "Strenghts",
  question: "How do I feel about my achievements?",
  answer:"Well, two: The first is dedication. The second one is to have clear concepts in my mind and to grow. "
})
titleLists.push({
  basic: "Weaknesses",
  question: "Why it was difficult to work?",
  answer:"Perfectionism, specificity in technical abstractions, doing unsignificant and artificial tasks is very difficult for me."
})
*/
//Mosaic of websites developed
photoList.push({
  tag: "https://www.feriaburo.com/",
  image: "./assets/buro.jpg"
});
photoList.push({
  tag: "https://www.festivalestereopicnic.com/#/",
  image: "./assets/estereo.jpg"
});
photoList.push({
  tag: "https://miiscosmetics.com/",
  image: "./assets/miisCosmetics.jpg"
});
photoList.push({
  tag: "https://maquillajetrendyshop.com/",
  image: "./assets/trendy.jpg"
});
photoList.push({
  tag: "https://www.rubyrose.com.co/",
  image: "./assets/screen.jpg"
});
photoList.push({
  tag: "https://bohioplaya.com/",
  image: "./assets/bohio.jpg"
});
photoList.push({
  tag: "https://www.alelihomedecor.com/",
  image: "./assets/aleli.jpg"
});
photoList.push({
  tag: "https://soreil.com.co/es",
  image: "./assets/soreil.jpg"
});
photoList.push({
  tag: "https://wawaw.co/",
  image: "./assets/wawaw.jpg"
});
photoList.push({
  tag: "https://libertariocoffee.co/",
  image: "./assets/libertario.jpg"
});
photoList.push({
  tag: "https://www.lotodelsur.com/",
  image: "./assets/loto-sur.jpg"
});
photoList.push({
  tag: "http://damici.co/",
  image: "./assets/pizza-website.jpg"
});
//Display main tasks during my experience
function toggleRoutine() {
  window.scrollTo(0, 0);
  seeText.style.display = "none";
  selectProfile.style.display = "none";
  if (toggleStatus == 1) {
    viewTask.style.display = "grid";
    toggleStatus = 0;
  } else if (toggleStatus == 0) {
    viewTask.style.display = "none";
    toggleStatus = 1;
  }
}
//Display headers
function togglePersonalCard() {
  window.scrollTo(0, 0);
  viewTask.style.display = "none";
  seeText.style.display = "none";
  if (toggleStatus == 1) {
    selectProfile.style.display = "flex";
    toggleStatus = 0;
  } else if (toggleStatus == 0) {
    selectProfile.style.display = "none";
    toggleStatus = 1;
  }
}
function toggleBrief() {
  window.scrollTo(0, 0);
  viewTask.style.display = "none";
  selectProfile.style.display = "none";
  if (toggleStatus == 1) {
    seeText.style.display = "flex";
    toggleStatus = 0;
  } else if (toggleStatus == 0) {
    seeText.style.display = "none";
    toggleStatus = 1;
  }
}
// Display options on the left
function rowOfArguments() {
  if (toggleStatus == 1) {
    asideMenu.style.display = "flex";
    launchNew = `
      <ul>
                      <li>
                        <a href="/">SOCIAL MEDIA</a>
                      </li>
                    <ul>
                      <li>
                        <a href="https://www.linkedin.com/in/saori-tovar-64890b166/" target="_blank">LinkedIn</a>
                      </li>
                      <li>
                        <a href="https://dribbble.com/SaoriUX" target="_blank">Dribble</a>
                      </li>
                      <li>
                        <a href="https://saoridev.blogspot.com/" target="_blank">Blogger</a>
                      </li>            
              </ul>
      `;
    asideMenu.innerHTML = launchNew;
    toggleStatus = 0;
  } else if (toggleStatus == 0) {
    asideMenu.style.display = "none";
    toggleStatus = 1;
  }
}
//Display main tasks during my experience
function toggleRoutine() {
  window.scrollTo(0, 0);
  seeText.style.display = "none";
  selectProfile.style.display = "none";
  if (toggleStatus == 1) {
    viewTask.style.display = "flex";
    toggleStatus = 0;
  } else if (toggleStatus == 0) {
    viewTask.style.display = "none";
    toggleStatus = 1;
  }
}
function startTitles(secondArray) {
  for (title of secondArray) {
    const contentTitle = document.createElement("li");

    contentTitle.innerHTML = title.basic;
    contentTitle.classList.add("list-styles");
    viewTask.appendChild(contentTitle);
  }
}
function loadPhotos(array) {
  for (photo of array) {
    const cardGroup = document.createElement("div");
    const groupImage = document.createElement("img");
    const ancherLink = document.createElement("a");

    cardGroup.classList.add("screen-card");
    ancherLink.innerHTML = photo.tag;

    ancherLink.setAttribute("href", photo.tag);
    ancherLink.setAttribute("target", "_blank");
    groupImage.setAttribute("src", photo.image);

    cardGroup.appendChild(ancherLink);
    ancherLink.appendChild(groupImage);
    initBox.appendChild(cardGroup);
  }
  startTitles(titleLists);
}

loadPhotos(photoList);
