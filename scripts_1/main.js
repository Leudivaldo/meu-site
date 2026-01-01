const myHeading = document.querySelector("#dem");

myHeading.addEventListener("click", function() {
  myHeading.textContent = "Novo nome";
  myHeading.removeEventListener("click", this);
});const anoNovo = new Date('December 31, 2024 23:59:59').getTime();

const x = setInterval(() => {
  const agora = new Date().getTime();
  const falta = anoNovo - agora;

  const dias = Math.floor(falta / (1000 * 60 * 60 * 24));
  const horas = Math.floor((falta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((falta % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((falta % (1000 * 60)) / 1000);





