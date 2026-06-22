// slogan
const visual = document.querySelector("#visual");
const slogan = visual.querySelector(".slogan");
const origin = slogan.querySelector(".origin");
const clone = origin.cloneNode(true);

clone.classList.remove("origin");
clone.classList.add("clone");
slogan.append(clone);


//project
const speed = 700;
const autoplay = 5000;
const project = document.querySelector("#project");
const btns = project.querySelector(".btns");

const projectText = new Swiper("#project .text .swiper", {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    speed: speed,
    allowTouchMove: false,
});

const projectImg = new Swiper("#project .img .swiper", {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    speed: speed,
    autoplay: {
        delay: autoplay,
        disableOnInteraction: false,
    },
    thumbs: {
        swiper: projectText,
    },
    allowTouchMove: false,
});

projectImg.autoplay.stop();

//btns
btns.addEventListener("click", (e) => {
    if(e.target.closest(".prev")){
        projectImg.slidePrev();
    }else if(e.target.closest(".next")){
        projectImg.slideNext();
    }
});