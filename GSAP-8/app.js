let tl = gsap.timeline();
let t = gsap.timeline({
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 50%",
    end: "top 0%",
    scrub: 4,
  },
});
let t3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page3",
    scroll: "body",
    start: "top 50%",
    end: "top 0%",
    scrub: 4,
  },
});

function page1Animation() {
  tl.from("#navbar h1,#navbar h2,#navbar button", {
    y: -30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "back.out",
  });

  tl.from("#c1 h1", {
    x: -100,
    opacity: 0,
    duration: 0.5,
    ease: "back.out",

  });

  tl.from("#c1 p", {
    x: -100,
    opacity: 0,
    duration: 0.5,
    ease: "back.out",

  });

  tl.from("#c1 button", {
    opacity: 0,
    duration: 0.5,
    ease: "back.out",
  });

  tl.from(
    "#c2 img",
    {
      x: 100,
      opacity: 0,
      duration: 0.8,
      ease: "back.out",
    },
    "-=0.8"
  );

  tl.from(
    "#links img",
    {
      y: 60,
      opacity: 0,
      duration: 0.8 ,
    ease: "back.out",

    },
    "-=1.5"
  );
}
function page2Animation() {
  t.from("#services h1", {
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: "back.out",

  });
  t.from("#services p", {
    x: 30,
    opacity: 0,
    ease: "back.out",
    duration: 0.8,
  });
  t.from(
    "#b1",
    {
      x: -100,
      opacity: 0,
    ease: "back.out",
      duration: 1.5,
    },
    "anim1"
  );
  t.from(
    "#b3",
    {
      x: 100,
      opacity: 0,
    ease: "back.out",
      duration: 1.5,
    },
    "anim1"
  );
  t.from(
    "#b2",
    {
      x: -100,
      opacity: 0,
    ease: "back.out",
      duration: 1.5,
    },
    "anim2"
  );
  t.from(
    "#b4",
    {
      x: 100,
      opacity: 0,
    ease: "back.out",
      duration: 1.5,
    },
    "anim2"
  );
}
function page3Animation() {
  t3.from(".about h1", {
    x: -100,
    opacity: 0,
    ease: "back.out",
    duration: 0.5,
  });

  t3.from(".about p", {
    x: -100,
    opacity: 0,
    ease: "back.out",
    duration: 0.5,
  });

  t3.from(".about button", {
    opacity: 0,
    ease: "back.out",
    duration: 0.5,
  });
  t3.from(".case h1", {
    x: -50,
    opacity: 0,
    ease: "back.out",
    duration: 0.8,
  });
  t3.from(".case p", {
    x: 30,
    ease: "back.out",
    opacity: 0,
    duration: 0.8,
  });
  t3.from(
    "#ca1",
    {
      x: -100,
      opacity: 0,
    ease: "back.out",
    duration: 0.8,
    },
    "ani"
  );
  t3.from(
    "#ca2",
    {
      y: -100,
      opacity: 0,
    ease: "back.out",
    duration: 0.8,
    },
    "ani"
  );
  t3.from(
    "#ca3",
    {
      x: 100,
      opacity: 0,
    ease: "back.out",
    duration: 0.8,
    },
    "ani"
  );
}
page1Animation();
page2Animation();
page3Animation();
