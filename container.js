

/*Menu aside*/
let toggleStatus = 1
/*Mobile*/
const menuHamIcon = document.getElementById("unfold-icon");
const asideMenu = document.getElementById("left-menu")
const asideBanners = [];
/*Header Blog*/
let infoCapsule
const lastWriting = document.getElementById("unfold-blog");
const seeText = document.getElementById("writes");
/* Header About Me*/
const aboutMe = document.getElementById("unfold-card");
const selectProfile = document.getElementById("profile-card");
/* Body content */
const initBox = document.querySelector(".screen-container");
const initTitle = document.querySelector(".title-container");

const titleLists = [];
const photoList = [];

lastWriting.addEventListener("click", toggleBrief);
aboutMe.addEventListener("click", togglePersonalCard);
menuHamIcon.addEventListener("click", rowOfArguments);


//Mosaic of services explained
titleLists.push({
  basic: "List of main activities ",
  question: "What did I do in my 2022 previous job? ",
  answer:"To maintain the code. To checked and shared pain points in the design of the website. To ask for reviews from my peers colleges. Asssit team meetings, mediate terms and conditions, coordinate updates, debug errors. "
})
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
//Display headers
function togglePersonalCard() {
  window.scrollTo(0, 0);
  seeText.style.display = "none";
  if (toggleStatus == 1) {
  selectProfile.style.display = "flex";
  toggleStatus = 0
  } else if (toggleStatus == 0) {
    selectProfile.style.display = "none";
    toggleStatus = 1    
  }
}
function toggleBrief() {
  window.scrollTo(0, 0);
  selectProfile.style.display = "none";
  if (toggleStatus == 1) {
    seeText.style.display = "flex";
    toggleStatus = 0;
  } else if ( toggleStatus == 0) {
    seeText.style.display = "none";
    toggleStatus = 1
  }

  
}
// Display options on the left
function rowOfArguments () {
  if (toggleStatus == 1) {
      asideMenu.style.display = "flex"
      launchNew = `
      <ul>
                      <li>
                        <a href="/">PORTFOLIO</a>
                      </li>
                      
                    <ul>
                      <li>
                        <a href="https://www.linkedin.com/in/saori-tovar-64890b166/" target="_blank">LinkedIn</a>
                      </li>
                      <li>
                        <a href="https://dribbble.com/SaoriUX" target="_blank">Dribble</a>
                      </li>
                      <li>
                        <a href="https://www.behance.net/arteisa201c55a/" target="_blank">Behance</a>
                      </li>
                      <li>
                        <a href="https://saoridev.blogspot.com/" target="_blank">Blogger</a>
                      </li>
                      <li>
                        <a href="https://linkr.bio/saoridev" target="_blank">Linkr</a>
                      </li>
                      
              </ul>
      `
    asideMenu.innerHTML = launchNew
    toggleStatus = 0;
  } else if (toggleStatus == 0) {
    asideMenu.style.display = "none";
    toggleStatus = 1
    
  }  
}

function startTitles(array) {
  for (title of array) {
    const boxGreat = document.createElement("div");
    const groupUnordered = document.createElement("ul");
    const contentTitle = document.createElement("li");

    contentTitle.innerHTML = title.basic;

    boxGreat.appendChild(groupUnordered);
    groupUnordered.appendChild(contentTitle);
    initTitle.appendChild(boxGreat);
  }
} 
function loadPhotos(array) {
  for (photo of array) {
    const cardGroup = document.createElement("div");
    const groupImage = document.createElement("img");
    const ancherLink = document.createElement("a");

    ancherLink.setAttribute("href", photo.tag);
    ancherLink.setAttribute("target", "_blank");
    cardGroup.classList.add("screen-card");
    groupImage.setAttribute("src", photo.image);
    ancherLink.innerHTML = photo.tag;

    cardGroup.appendChild(ancherLink);
    ancherLink.appendChild(groupImage);
    initBox.appendChild(cardGroup);
  }

}

startTitles(titleLists);
loadPhotos(photoList)
