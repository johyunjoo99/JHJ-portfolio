// slogan
const visual = document.querySelector("#visual");
const slogan = visual.querySelector(".slogan");
const origin = slogan.querySelector(".origin");
const clone = origin.cloneNode(true);

clone.classList.remove("origin");
clone.classList.add("clone");
slogan.append(clone);


//profile
const profile = document.querySelector("#profile");
const tableBox = profile.querySelector(".table-box");

tableBox.querySelectorAll("table").forEach((table) => {
    if(table.classList.contains("responsive")){
        const ths = table.querySelectorAll("thead th");

        table.querySelectorAll("tbody tr").forEach((tr) => {
            tr.querySelectorAll(":scope > *").forEach((cell, index) => {
                if(ths[index]){
                    cell.setAttribute("data-th", ths[index].textContent);
                }
            });
        });
    }    
})



//project
let projectIndex = 0;
const speed = 700;
const autoplaySpeed = 5000;
const project = document.querySelector("#project");
const btns = project.querySelector(".btns");
const num = project.querySelector(".num");
const length = num.querySelector(".length");
const idx = num.querySelector(".idx");
const count = project.querySelectorAll(".img .swiper-slide").length;

length.textContent = String(count).padStart(2, "0");

const projectText = new Swiper("#project .text .swiper", {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    autoplay: {
        delay: autoplaySpeed,
        disableOnInteraction: false,
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
        delay: autoplaySpeed,
        disableOnInteraction: false,
    },
    thumbs: {
        swiper: projectText,
    },
    on: {
        slideChangeTransitionStart(){
            //direction
            let direction;

            if(this.realIndex === 0 && projectIndex === count - 1){
                direction = "swiper-direction-next";
            }else if(this.realIndex === count - 1 && projectIndex === 0){
                direction = "swiper-direction-prev";
            }else{
                direction = this.realIndex > projectIndex ? "swiper-direction-next" : "swiper-direction-prev";
            }

            this.el.classList.remove("swiper-direction-next", "swiper-direction-prev");
            this.el.classList.add(direction);

            projectIndex = this.realIndex;

            //num idx
            idx.textContent = String(this.realIndex + 1).padStart(2, "0");
        }, 
    },
});

projectText.autoplay.stop();
projectImg.autoplay.stop();


//btns
btns.addEventListener("click", (e) => {
    if(e.target.closest(".prev")){
        projectImg.slidePrev();
    }else if(e.target.closest(".next")){
        projectImg.slideNext();
    }
});


//slide autoplay
const autoplay = document.querySelectorAll(".autoplay");
const autoplayArray = new Array(autoplay.length).fill(true);

window.addEventListener("load", autoplayStart);
window.addEventListener("scroll", autoplayStart);


//functions
function autoplayStart(){
    autoplay.forEach((item, i) => {
        if(item.classList.contains("aos-animate") && autoplayArray[i]){
            if(item.querySelector(".tab-content")){
                const on = item.querySelector(".tab-content > .on");
                const slides = on.querySelectorAll(".swiper");

                slides.forEach((slide) => {
                    slide.swiper.autoplay.start();
                });

            }else{
                const slides = item.querySelectorAll(".swiper");

                slides.forEach((slide) => {
                    slide.swiper.autoplay.start();
                });
            }

            autoplayArray[i] = false;
        }
    });
}