const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Freelancer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Developer";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Student";
  }, 8000);
};

textLoad();
setInterval(textLoad, 12000);
