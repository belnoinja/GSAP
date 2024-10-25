let initial = `M 50 250 Q 750 250 1450 250`;
let final = `M 50 250 Q 750 250 1450 250`;

let string = document.querySelector("#string");
    

string.addEventListener("mousemove", function (dets) {
  initial = `M 50 250 Q ${dets.x} ${dets.y} 1450 250`;
  gsap.to("svg path", {
    attr: { d: initial },
    duration: 0.2,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", function (dets) {
  gsap.to("svg path", {
    attr: { d: final },
    duration: 1.5,
    ease: "elastic.out(1,0.2)",
  });
});
