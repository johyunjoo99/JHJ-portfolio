const body = document.querySelector("body");
const header = document.querySelector("header");
const nav = document.querySelector("nav > ul");
const navDepth = nav.querySelectorAll("li");
const navClone = nav.cloneNode(true);
const menu = document.querySelector("#menu");
const menuBtn = document.querySelectorAll(".menuBtn");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;


//header
window.addEventListener("load", setActiveMenu);
window.addEventListener("scroll", setActiveMenu);

navDepth.forEach((item) => {
  item.addEventListener("click", moveSection);
});


//menu
menu.querySelector("nav").append(navClone);

menuBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    body.classList.toggle("open");  
  });
});

menu.querySelectorAll(".blank, a").forEach((target) => {
  target.addEventListener("click", (e) => {
    body.classList.remove("open");
  });
});

menu.querySelectorAll("nav li").forEach((li) => {
  li.addEventListener("click", moveSection);
});


//top button
document.querySelector("#top").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
});


//functions
function setActiveMenu(){
  const scrollTop = window.scrollY + header.offsetHeight;

  navDepth.forEach((item, i) => {
    const href = item.querySelector("a").getAttribute("href");
    const target = document.querySelector(href);
    const offset = target.offsetTop;
    const end = offset + target.offsetHeight;

    if(i === navDepth.length - 1){
      if(scrollTop >= offset){
        item.classList.add("on");
      }else{
        item.classList.remove("on");
      }
    }else{
      if(scrollTop >= offset && scrollTop < end){
        navDepth[i].classList.add("on");
      }else{
        navDepth[i].classList.remove("on");
      }
    }
  });
}

function moveSection(e){
  e.preventDefault();

  const href = this.querySelector("a").getAttribute("href");
  const target = document.querySelector(href);

  window.scrollTo({
    top: target.offsetTop - header.offsetHeight,
    behavior: reduceMotion ? "auto" : "smooth",
  });
}