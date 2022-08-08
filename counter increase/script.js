let container = document.querySelector(".container");
let counter = document.querySelectorAll(".counter");
let started = true;

window.onscroll = function () {
  if (window.scrollY >= container.offsetTop) {
    if (started) {
      counter.forEach((el) => addCounter(el));
    }
    started = false;
  }
};

function addCounter(el) {
  let target = el.dataset.target;
  el.textContent = 0;
  let interval = setInterval(() => {
    el.textContent++;
    if (el.textContent === target) {
      clearInterval(interval);
    }
  }, 5000 / target);
}
