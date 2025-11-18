// jsを記述する際はここに記載していく

setTimeout(() => {
  document.querySelector('.intro').classList.add('hide');
}, 2400);

setTimeout(() => {
  document.querySelector('.intro').classList.add('hide');
  document.querySelector('.hero').classList.add('show');
}, 2800);

const elements = document.querySelectorAll(".reveal");
window.addEventListener("scroll", function() {
  elements.forEach(function(element) {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) { //0.85ラインくらいが自然？
      element.classList.add("visible"); // visibleクラスを付与する
    }
  });
});
