let container = document.querySelector("#container");
let panels = document.querySelectorAll(".panel");

function delActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

panels.forEach((panel) => {
  panel.addEventListener("click", (e) => {
    delActiveClass();
    e.target.classList.add("active");
  });
});
