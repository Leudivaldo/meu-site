document.addEventListener('DOMContentLoaded', () => {
  const dataFutura = new Date('January 1, 2026 00:00:00').getTime();
  setInterval(() => {
    const agora = new Date().getTime();
    const falta = dataFutura - agora;
    const dias = Math.floor(falta / (1000*60*60*24));
    const horas = Math.floor((falta % (1000*60*60*24)) / (1000*60*60));
    const minutos = Math.floor((falta % (1000*60*60)) / (1000*60));
    const segundos = Math.floor((falta % (1000*60)) / 1000);
    document.getElementById('countdown').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    if (falta < 0) {
      document.getElementById('countdown').innerHTML = "ANO NOVO! 🎉";
    }
  }, 1000);
});


const myHeading = document.querySelector("#dem");

myHeading.addEventListener("click", function() {
  myHeading.textContent = "Novo nome";
  myHeading.removeEventListener("click", this);
});









