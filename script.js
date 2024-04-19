const hover = document.querySelector(".service");
const shownavbar = document.querySelector(".second-nav");

let c = 1;
hover.addEventListener("click", () => {
  if (c === 1) {
    shownavbar.style.display = "flex";
    c--;
  } else {
    shownavbar.style.display = "none";
    c++;
  }
});

const nav = document.querySelector(".first-nav");
const open = document.querySelector(".open");
const close = document.querySelector(".close");

open.addEventListener("click", () => {
  nav.style.top = "-34px";
  close.style.display = "inline-block";
});

close.addEventListener("click", () => {
  nav.style.top = "-300px";
  close.style.display = "none";
  shownavbar.style.display = "none";
});
