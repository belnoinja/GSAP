function breakTheText() {
  let h1 = document.querySelector("h1");

  let h1Text = document.querySelector("h1").textContent;
  let splittedText = h1Text.split("");
  let halfValue = Math.floor(splittedText.length / 2);

  let clutter = "";

  splittedText.forEach((e, i) => {
    if (i <= halfValue) {
      clutter += `<span class="a">${e}</span>`;
    } else {
      clutter += `<span class="b">${e}</span>`;
    }
  });

  h1.innerHTML = clutter;
}

breakTheText();

gsap.from(".a", {
  y: 80,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.15,
});

gsap.from(".b", {
  y: 80,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: -0.15,
});
