let cursor = document.querySelector("#cursor")
let blur = document.querySelector("#blur")
document.addEventListener("mousemove",(data)=>{
    cursor.style.left = data.x -10 +"px"
    cursor.style.top = data.y -10 +"px"
    blur.style.left = data.x -250 +"px"
    blur.style.top = data.y -250 +"px"
})
let tl = gsap.timeline()
tl
.to("nav",{
    backgroundColor:"black",
    height:100,
    duration:.1,
   "padding-top":20,
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        // markers:true,
        start:"top -0%",
        end:"top -2%",
        scrub:1,
    }
})
.to("#main",{
    "background-color": "black",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        // markers:true,
        start:"top -40%",
        end:"top 40%",
        scrub:1,
    }

})



//swiper.js intialize
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });