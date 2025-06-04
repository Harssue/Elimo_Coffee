var curs = document.querySelector("#cursor")

// document.addEventListener("mousemove",function(dets){
//     curs.style.left = dets.x+3+"px"
//     curs.style.top = dets.y + "px"
// })

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        curs.style.scale = 3;
        curs.style.border = "1px solid white"
        curs.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        curs.style.scale = 1;
        curs.style.border = "0px solid greenyellow"
        curs.style.backgroundColor = "greenyellow"
    })
})

gsap.to("#nav",{
    backgroundColor:"black",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start: "top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})

gsap.from(".cards",{
    y:90,
    opacity:0,
    duration:1,
    // stagger:0.1,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        // markers:true,
        start:"top 69%",
        end:"top 64%",
        scrub:1
    }
})

gsap.from("#colon1-page3",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:3
    }
})

gsap.from("#colon2-page3", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "body",
      // markers:true,
      start: "top 60%",
      end: "top 40%",
      scrub: 3,
    },
  });

  gsap.from("#colon1-page4",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:3
    }
})

gsap.from("#colon2-page4", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#page4",
      scroller: "body",
      // markers:true,
      start: "top 60%",
      end: "top 40%",
      scrub: 3,
    },
  });

  gsap.from("#colon1-page5",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:3
    }
})

gsap.from("#colon2-page5", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#page5",
      scroller: "body",
      // markers:true,
      start: "top 60%",
      end: "top 40%",
      scrub: 3,
    },
  });

  gsap.from("#colon1-page6",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#page6",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:3
    }
})

gsap.from("#colon2-page6", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#page6",
      scroller: "body",
      // markers:true,
      start: "top 60%",
      end: "top 40%",
      scrub: 3,
    },
  });

  gsap.from("#colon1-page7",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#page7",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:3
    }
})

gsap.from("#colon2-page7", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#page7",
      scroller: "body",
      // markers:true,
      start: "top 60%",
      end: "top 40%",
      scrub: 3,
    },
  });

  gsap.from("#colon1-page8",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#page8",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:3
    }
})

gsap.from("#colon2-page8", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#page8",
      scroller: "body",
      // markers:true,
      start: "top 60%",
      end: "top 40%",
      scrub: 3,
    },
  });