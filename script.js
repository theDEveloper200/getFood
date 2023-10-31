// Js for class = location
const seemorebtn = document.querySelector(".see-more-btn");
const subloc = document.querySelector(".sub-loc");
const location1 = document.querySelector(".location-1");
const seemore = document.querySelector(".see-more");

seemorebtn.addEventListener("click", () => {
  subloc.classList.toggle("see-more");
  location1.classList.toggle("location-2");
  if (seemorebtn.innerText === "See More") {
    seemorebtn.innerText = "See Less";
  } else {
    seemorebtn.innerText = "See More";
  }
});

// Js for class = down2-section
const dosc21 = document.querySelector(".dosc21");
const dosc210 = document.querySelector(".dosc210");

dosc21.addEventListener("click", () => {
  dosc210.classList.toggle("doosc210");

  dosc21.classList.toggle("doosc21");
});

// Js for login page
function showModel() {
  document.querySelector(".container").classList.add("darkContainer");
  document.querySelector(".login-form").classList.add("showlogin-form");
}

function closeModel() {
  document.querySelector(".container").classList.remove("darkContainer");
  document.querySelector(".login-form").classList.remove("showlogin-form");
}

var lbtn = document.querySelector(".l-btn");
lbtn.addEventListener("click", showModel);

var c = document.querySelector(".m");
c.addEventListener("click", closeModel);

var viewmore = document.querySelector(".view-more")
viewmore.addEventListener("click", closeModel);

// Js for view-section
function showBox(){
  document.querySelector(".container").classList.add("hideContainer");
  document.querySelector(".view-section").classList.add("showview-section");
}
function closeBox() {
  document.querySelector(".container").classList.remove("hideContainer");
  document.querySelector(".view-section").classList.remove("showview-section");
}

var viewmore = document.querySelector(".view-more");
viewmore.addEventListener("click", showBox);

var d = document.querySelector(".x");
d.addEventListener("click", closeBox);

var container = document.querySelector(".container")
container.addEventListener("click", closeBox)
 
//Js for dark mode
const dkm = document.querySelector(".Dkm");
const background = document.querySelector(".background");
const vmsec = document.querySelector(".vm-sec");
const down3section =document.querySelector(".down3-section");
const sdkm = document.querySelector(".s-dkm");

dkm.addEventListener("click" , () => {
document.body.classList.toggle("dark-theme");
location1.classList.toggle("dark-location1");
down3section.classList.toggle("dark-down3-section");
vmsec.classList.toggle("dark-vm-sec");
sdkm.classList.toggle("shift-s-dkm");


}
)

// Js for password show 
let password = document.getElementById("password");
let eyeicon = document.getElementById("eye-icon");

eyeicon.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    eyeicon.src = "img/open.icon.png";
  } else {
    password.type = "password";
    eyeicon.src = "img/close.icon.png";
  }
};

