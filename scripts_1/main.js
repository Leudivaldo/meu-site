const myHeading = document.querySelector("#dem");

myHeading.addEventListener("click", function() {
  myHeading.textContent = "Full Stack Developer";
  myHeading.removeEventListener("click", this);
});






const itens = document.querySelectorAll('.ddd li a');

itens.forEach(item => {
  item.addEventListener('click', function() {
    itens.forEach(i => i.style.backgroundColor = '');
    this.style.backgroundColor = '#cf1313';
  });
});
