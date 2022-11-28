function openToggel() {
  this.classList.toggle("open");
}
function openActivr(e) {
  if (e.propertyName == "flex-grow") {
    this.classList.toggle("open-active");
  }
}
(() => {
  const pannels = document.querySelectorAll(".pannel");
  pannels.forEach((panner) => {
    panner.addEventListener("click", openToggel);
    panner.addEventListener("transitionend", openActivr);
  });
})();
