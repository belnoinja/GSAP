// gsap.from("#page1 #box", {
//   scale: 0,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   scrollTrigger: {
//     scroller: "body",
//     trigger: "#page1 #box",
//   },
// });

// gsap.from("#page2 #box", {
//   scale: 0,
//   duration: 1,
//   rotate: 1080,
//   scrollTrigger: {
//     scroller: "body",
//     trigger: "#page2 #box",
//     markers:true,
//     start:"top 60%",
//     end:"top 10%",
//     scrub: 2,
//     pin:true
//   },
// });

// gsap.from("#page2 h1", {
//   opacity: 0,
//   duration: 2,
//   x: 500,
//   scrollTrigger: {
//     scroller: "body",
//     trigger: "#page2 h1",
//     markers: true,
//     start: "top 50%",
//   },
// });

// gsap.from("#page2 h2", {
//     opacity: 0,
//     duration: 2,
//     x: -500,
//     scrollTrigger: {
//       scroller: "body",
//       trigger: "#page2 h2",
//       markers: true,
//       start: "top 50%"
//     },
//   });

gsap.to("#page2 h1", {
    transform: "translateX(-150%)",
    duration: 2,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      markers: true,
      start: "top 0%",
      end: "top -150%",
      scrub: 2,
      pin: true,
    },
  });