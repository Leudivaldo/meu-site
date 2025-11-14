const myHeading = document.querySelector("#dem");

myHeading.addEventListener("click", function() {
  myHeading.textContent = "Novo nome";
  myHeading.removeEventListener("click", this);
});


