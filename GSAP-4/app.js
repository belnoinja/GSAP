let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let imaged = document.querySelector("#image");

main.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.6,
    ease: "back.out",
  });
});

imaged.addEventListener("mouseenter", (dets) => {
  cursor.innerHTML = "VIEW MORE";
  gsap.to(cursor, {
    scale: 4,
    backgroundColor:"#ffffff7c"
  });
});

imaged.addEventListener("mouseleave", (dets) => {
  cursor.innerHTML = "";

  gsap.to(cursor, {
    scale: 1,
    backgroundColor:"#fff"
  });
});
