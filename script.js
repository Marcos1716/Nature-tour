const btnNavEl = document.querySelector(".navigation__button");
const headerEl = document.body;

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// headerEl.style.pointerEvents
// for popup close

const btnNavE3 = document.querySelector(".close-popup");
const headerE3 = document.body;

btnNavE3.addEventListener("click", function () {
  headerE3.classList.toggle("popup-open");

  // remover
  headerEl.classList.remove("popup-open-1", "popup-open-2", "popup-open-3");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("navigation__link"))
      headerEl.classList.toggle("nav-open");

    // for popup open
    if (link.classList.contains("popup-link"))
      headerEl.classList.toggle("popup-open");
  });
});

// ============POPUPS=====

const pop1 = document.querySelector(".pop1");
const pop2 = document.querySelector(".pop2");
const pop3 = document.querySelector(".pop3");

// 1
pop1.addEventListener("click", function () {
  headerEl.classList.toggle("popup-open-1");
  headerEl.classList.toggle("popup-open");

  // remover
  headerEl.classList.remove("popup-open-2", "popup-open-3");
});

// 2
pop2.addEventListener("click", function () {
  headerEl.classList.toggle("popup-open-2");
  headerEl.classList.toggle("popup-open");

  // remover
  headerEl.classList.remove("popup-open-1", "popup-open-3");
});

// 3
pop3.addEventListener("click", function () {
  headerEl.classList.toggle("popup-open-3");
  headerEl.classList.toggle("popup-open");

  // remover
  headerEl.classList.remove("popup-open-1", "popup-open-2");
});

// ============POPUPS ENDDDDDD=====
