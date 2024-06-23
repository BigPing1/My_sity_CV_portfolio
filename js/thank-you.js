let thank = document.querySelector("#thank-word");
let footerBlock = thank.parentNode;

const handle = () => {
  thank.textContent = "Thank you";
  footerBlock.style.background = "darkred";
  footerBlock.style.transition = 0.9 + "s";
};

footerBlock.addEventListener("click", handle);
