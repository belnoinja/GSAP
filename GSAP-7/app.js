window.addEventListener("wheel", function(dets){
  if (dets.deltaY > 0) {
    gsap.to(".marque", {
      transform: "translateX(-50%)",
      repeat: -1,
      duration: 8,
      ease: "none",
    });

    gsap.to(".marque img", {
      rotate: 180,
    });
  } else {
    gsap.to(".marque", {
      transform: "translateX(50%)",
      repeat: -1,
      duration: 8,
      ease: "none",
    });

    gsap.to(".marque img", {
      rotate: 0,
    });
  }
});
