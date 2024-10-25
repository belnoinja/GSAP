let tl = gsap.timeline();
let cross = document.querySelector("#full i");

let menu = document.querySelector("#nav i");

tl.to(full, {
  right: "0",
  duration: 0.5,
});

tl.from("#full h4", {
  x: 150,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
});
tl.from("#full i", {
  opacity: 0,
});

tl.pause();

menu.addEventListener("click", (dets) => {
  tl.play();
});

cross.addEventListener("click", () => {
  tl.reverse();
});
