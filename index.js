let btn = document.querySelectorAll(".nav-buttons");
let icon = document.querySelectorAll("i");
btn.forEach((element) => {
  element.addEventListener("click", () => {
    icon.forEach((element) => {
      element.style.color = "black";
    });
    btn.forEach((element) => {
      element.style.backgroundColor = "white";
      element.style.color = "black";
    });
    element.style.backgroundColor = "black";
    element.style.color = "white";
    element.childNodes[1].style.color = "white";
  });
});
