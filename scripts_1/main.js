const anoNovo = new Date('December 31, 2024 23:59:59').getTime();

setInterval(() => {
  const agora = new Date().getTime();
  const falta = anoNovo - agora;

  const dias = Math.floor(falta / (86400000));
  const horas = Math.floor((falta % (86400000)) / 3600000);
  const minutos = Math.floor((falta % (3600000)) / 60000);
  const segundos = Math.floor((falta % (60000)) / 1000);

  const texto = ${dias}d ${horas}h ${minutos}m ${segundos}s;
  document.getElementById('countdown').innerHTML = texto;
  console.log(texto);

  if (falta < 0) {
    document.getElementById('countdown').innerHTML = "ANO NOVO! 🎉";
  }
}, 1000);



const myHeading = document.querySelector("#dem");

myHeading.addEventListener("click", function() {
  myHeading.textContent = "Novo nome";
  myHeading.removeEventListener("click", this);
});








