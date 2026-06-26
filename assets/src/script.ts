// import { scrollReveal } from "scrollreveal";
import scrollReveal from "scrollreveal";

// For Active Link
const nav: NodeListOf<Element> = document.querySelectorAll(
  "nav a",
) as NodeListOf<Element>;

nav.forEach((e) => {
  e.addEventListener("click", () => {
    nav.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.classList.add("active");
  });
});

// For Scroll Reveal Animation

const sr = scrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(".hero h1", { delay: 200, origin: "top" });
sr.reveal(".hero p", { delay: 200, origin: "top" });
sr.reveal(".hero .btn", { delay: 200, origin: "top" });
sr.reveal(".content-area", { delay: 300, origin: "left" });
sr.reveal(".image-area", { delay: 400, origin: "right" });
