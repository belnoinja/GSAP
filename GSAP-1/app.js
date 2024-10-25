// // gsap.from("h1",{
// //     opacity:0,
// //     y:30,
// //     duration:1,
// //     delay:1,
// //     stagger:0.3
// // });

let tl = gsap.timeline();

tl.from("h2",{
    y:-20,
    opacity:0,
    duration:0.5,
    delay:0.2       
})

tl.from("h4",{
    y:-20,
    opacity:0,
    duration:0.5,
    stagger:0.1
})

tl.from("h1",{
    y:20,
    opacity:0,
    duration:0.5,
    scale:0.2
})

// tl.to("#box1", {
//   x: 1000,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   backgroundColor: "blue",
// });

// tl.to("#box2", {
//   x: 1000,
//   duration: 2.5,
//   rotate: 1080,
//   backgroundColor: "red",
//   borderRadius: "50%",
//   scale: 0.5,
// });

// tl.to("#box3", {
//   x: 1000,
//   duration: 2,
//   rotate: 90,
//   scale: 0.75,
//   borderRadius: "10%",
//   backgroundColor: "green",
// });
