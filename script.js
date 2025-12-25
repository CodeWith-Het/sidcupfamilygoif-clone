let body = document.querySelector("body");
let crsr = document.querySelector("#cursor")
let crsrBlur = document.querySelector("#cursor-blur")

body.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px";
    crsr.style.top=dets.y+"px";
})

body.addEventListener("mousemove",function(dets){
    crsrBlur.style.left=dets.x-200+"px";
    crsrBlur.style.top=dets.y-200+"px";
})

gsap.to("#nav", {
    backgroundColor: "#000",
    height: "120px",
    duration: 1,
    delay:1,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -10%",
        scrub: true
    }
});

gsap.to("main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"main",
        scroller:"body",
        markers:true,
        start:"top -50%",
        end:"top -100%",
        scrub:2
    }
})