import { gsap } from "gsap";

function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
      .querySelector(".custom_menu-btn")
      .classList.toggle("menu_btn-style");
  }

  let tl = gsap.timeline({
    scrollTrigger:{
      trigger: '.mockup-landing',
      start: "center",
      end:".section__footer",
      // scrub: true,
      markers: true,
      toggleActions: "play none play reverse"

    }
  });
  tl.from(".set2",{
    y: 200,
    oppacity: 0,
    duration: 1
  }, "-=1");

  let tel = gsap.timeline({
    scrollTrigger:{
      trigger: '.box3',
      start: "bottom",
      end:".section__footer",
      // scrub: true,
      markers: true,
      toggleActions: "play none play reverse"

    }
  });
  tel.from(".set4",{
    y: 200,
    oppacity: 0,
    duration: 1
  }, "-=1");
  

  let ic = gsap.timeline({
    scrollTrigger:{
      trigger: '.infinite-slider',
       start: "-250px",
      // scrub: true,
      markers: true,
      toggleActions: "play none play reverse"
    }
  });
  ic.from(".icon1", {
    x: 1350,
    oppacity: 0,
    duration: 1.5
  })
  .from(".icon2",{
    x: 900,
    oppacity: 0,
    duration: 1
  }, "-=1")

  .from(".icon3",{
    x: 600,
    oppacity: 0,
    duration: 1
  }, "-=1");










const el = gsap.timeline();

el.from('.text-1', {
    opacity: 0,
    duration: 2,
})
.to('.text-1',{ 
    opacity: 0,
    duration: 2,
}, "+=2")

.set('.logo',{
    opacity: 1,
}, "+=1")

.to('.logo',{
    scale: 0,
    duration: 8,
})
.to('.logo',{
    opacity:0,
    duration: 4,
}, "-=6")


.from('.text-2',{
    top:'100%',
    duration: 20,
}, "-+6")

/*gsap.to ('.sec-box', {
    duration: 5,
    backgroundColor: "black",
    rotate: 360,
    duration: 5,
    backgroundColor: "orange",
    scale: 2, 
})
gsap.from('.box', {
    y: 100,
   opacity: 0,
    duration: 2,
    scale: 0,
    ease: "bounce",
})
gsap.to ('.circle', {
    backgroundColor: "orange",
    duration: 3,
    scale: 1.5,
})
gsap.to ('.square', {
    backgroundColor: "black",
    duration: 3,
    rotateY:160,
})*/