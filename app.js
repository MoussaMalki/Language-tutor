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
sr.reveal(`#menu-icon`, { delay: 200, origin: `left` });
sr.reveal(`.home-text h2, p, .home-text a`, { delay: 400, origin: `top` });
sr.reveal(`.socialIcons`, { delay: 500, origin: `left` });
sr.reveal(`.title`, { delay: 500, origin: `left` });
sr.reveal(`.home-pic`, { delay: 600, origin: `top` });
sr.reveal(`.about-pic`, { delay: 600, origin: `bottom` });
sr.reveal(`.about-text`, { delay: 600, origin: `top` });
sr.reveal(`.card`, { delay: 600, origin: `top` });
sr.reveal(`.contact-form`, { delay: 600, origin: `top` });
sr.reveal(`.contact-pic`, { delay: 600, origin: `bottom` });

// =================> main pic animation

let mainPic = doc.querySelector(`.home-pic`);

// setTimeout(() => {
//   setInterval(() => {
//     mainPic.style.cssText = `position: relative; top: `
//   }, 500);
// }, 5000);

window.onscroll = function (e) {
  if (window.scrollY > 650) {
    doc.querySelector(`.scrollBack`).style.cssText = `display: initial`;
  }
  if (window.scrollY < 650) {
    doc.querySelector(`.scrollBack`).style.cssText = `display: none`;
  }
};

/// ====> for side bar

let dropMenu = doc.querySelector(".sidenav");
dropMenu.style.cssText = `display: none`;
doc.querySelector("#menu-icon").onclick = () => {
  dropMenu.style.cssText = `display: flex;`;
};

doc.querySelectorAll("section").forEach((e) => {
  e.addEventListener("click", () => {
    dropMenu.style.cssText = `display: none`;
  });
});
