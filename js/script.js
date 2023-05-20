var menu = document.getElementById("menu");

var menuTop = menu.offsetTop;
var navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollPosition >= menuTop) {
    navbar.classList.add("sticky");
    document.body.classList.add("sticky-nav");
  } else {
    navbar.classList.remove("sticky");
    document.body.classList.remove("sticky-nav");
  }
});

const navLinks = navbar.querySelectorAll(".nav-element");

const sections = document.querySelectorAll("section");

////////
// Get all the elements with class "check-view"
const elements = document.querySelectorAll("figure");

// Check if an element is in the vertical viewport center
function isElementInViewportCenter(el) {
  const rect = el.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const top = rect.top;
  const bottom = rect.bottom;

  return top < viewportHeight / 2 && bottom > viewportHeight / 2;
}

// Check each element on scroll or resize
function checkElements() {
  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    if (isElementInViewportCenter(el)) {
      el.classList.add("in-view");
    } else {
      el.classList.remove("in-view");
    }
  }
}

window.addEventListener("scroll", checkElements);
window.addEventListener("resize", checkElements);

// Call the function once on page load
checkElements();

//reveal items

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    }
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.classList.add("reveal");
  });
});

// EXPERIENCES This adds some nice ellipsis to the description:
document.querySelectorAll(".projcard-description").forEach(function (box) {
  $clamp(box, { clamp: 6 });
});

// Get the navbar links
const navbarLinks = document.querySelectorAll("nav ul li a");
let buffer = 20;
function handleScroll() {
  const currentScrollPos = window.pageYOffset;

  // Loop through each section to check if it's in view
  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // Check if the current scroll position is within the section with buffer value
    if (
      currentScrollPos >= sectionTop - buffer &&
      currentScrollPos < sectionTop + sectionHeight
    ) {
      const targetLink = document.querySelector(
        `nav ul li a[href="#${section.id}"]`
      );

      // Remove the active class from all links
      navbarLinks.forEach((link) => link.classList.remove("active"));

      // Add the active class to the target link
      targetLink.classList.add("active");
    }
  });
}

// Initial call to handleScroll to set the initial active section
handleScroll();

///TITLE
let index = 0,
    interval = 1000;

const rand = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

for(const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);
    
    setInterval(() => animate(star), 1000);
  }, index++ * (interval / 3))
}

/* -- ↓↓↓ If you want the sparkle effect to only occur on hover, replace lines 16 and on with this code ↓↓↓ -- */

// let timeouts = [],
//     intervals = [];

// const magic = document.querySelector(".magic");

// magic.onmouseenter = () => {
//   let index = 1;
  
//   for(const star of document.getElementsByClassName("magic-star")) {
//     timeouts.push(setTimeout(() => {  
//       animate(star);
      
//       intervals.push(setInterval(() => animate(star), 1000));
//     }, index++ * 300));
//   };
// }

// magic.onmouseleave = onMouseLeave = () => {
//   for(const t of timeouts) clearTimeout(t);  
//   for(const i of intervals) clearInterval(i);
  
//   timeouts = [];
//   intervals = [];
// }

function copyEmail(){
  alert("ciao");
}