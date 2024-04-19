const hamburer = document.querySelector(".hamburer");
const navList = document.querySelector(".nav-list");

if(hamburer){
    hamburer.addEventListener("click", () => {
        navList.classList.toggle("open")
    })
}

const swiper = new Swiper(".heroslider",{
    spaceBetween: 30,
    slidesPreview:1,
    spaceBetween:30,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    effect: "fade",
    navigation:{
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
    },
})