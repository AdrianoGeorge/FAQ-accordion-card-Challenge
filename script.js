// v2 - for accordion
const btns = document.querySelectorAll(".question");
// function for accordion
function accordion() {
  // this = the btn | icon & bg changed
  this.classList.toggle("active");
}
// event
btns.forEach((buttons) => buttons.addEventListener("click", accordion));
