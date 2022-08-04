// ================> scrolling animation
let doc = document;
let log = console.log;

const sr = ScrollReveal({
  distance: `60px`,
  duration: 2500,
  delay: 400,
  reset: true,
  mobile: true,
});

sr.reveal(`.logo`, { delay: 200, origin: `bottom` });
sr.reveal(`.nav-bar`, { delay: 200, origin: `right` });
sr.reveal(`.home-text h2, p, .home-text a`, { delay: 400, origin: `top` });
sr.reveal(`.socialIcons`, { delay: 500, origin: `left` });
sr.reveal(`.home-pic`, { delay: 600, origin: `top` });
sr.reveal(`.about-pic`, { delay: 600, origin: `bottom` });
sr.reveal(`.about-text`, { delay: 600, origin: `top` });
sr.reveal(`.card`, { delay: 600, origin: `top` });

// =================> main pic animation

let mainPic = doc.querySelector(`.home-pic`);

// setTimeout(() => {
//   setInterval(() => {
//     mainPic.style.cssText = `position: relative; top: `
//   }, 500);
// }, 5000);
