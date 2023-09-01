/*Js for class = location*/
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

/*Js for class = down2-section*/
const dosc21 = document.querySelector(".dosc21");
const dosc210 = document.querySelector(".dosc210");

dosc21.addEventListener("click", () => {
  dosc210.classList.toggle("doosc210");

  dosc21.classList.toggle("doosc21");
});

/*Js for login page */
function showModel() {
  document.querySelector(".container").classList.add("hideContainer");
  document.querySelector(".login-form").classList.add("showlogin-form");
}

function closeModel() {
  document.querySelector(".container").classList.remove("hideContainer");
  document.querySelector(".login-form").classList.remove("showlogin-form");
}

var lbtn = document.querySelector(".l-btn");
lbtn.addEventListener("click", showModel);

var c = document.querySelector(".m");
c.addEventListener("click", closeModel);

/*Js for password show */
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
