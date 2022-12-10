var up = document.getElementById("up"); 

window.onscroll = function() {
  if (this.scrollY >= 550) {
    up.classList.add("show");
  } else {
    up.classList.remove("show");
  }
}

up.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  }) 
}

let toggle = document.querySelector(".toggle");
let list = document.querySelector(".list");

toggle.onclick = function(){
  list.classList.toggle("show");
}

let tracks = document.getElementById("tracks-link");
let courses = document.getElementById("courses-link");
let topic = document.getElementById("topic-link");
let projects = document.getElementById("projects-link");
let challenge = document.getElementById("challenge-link");

tracks.onclick = removeShow
courses.onclick = removeShow
topic.onclick = removeShow
projects.onclick = removeShow
challenge.onclick = removeShow

function removeShow() {
  list.classList.remove("show");
}