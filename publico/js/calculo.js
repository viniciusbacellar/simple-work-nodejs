const checkboxes = document.querySelectorAll('input[name="input"]');
const button = document.querySelector('#button');
const finalValor = document.querySelector('#finalValor');
const buttonInicial = document.querySelector('#buttonInicial');
console.log(button);
console.log(checkboxes);
var valorFinal = 800;
function handleClick() {
  checkboxes.forEach((item) => {
    if (item.checked == true) {
      valorFinal += parseFloat(item.value);
    }
  });
  finalValor.innerHTML = `Valor final do aluguel: R$${valorFinal.toFixed(2)}`;
}
function handleClick2() {
  valorFinal = 800;
  finalValor.innerHTML = `Valor final do aluguel: R$${valorFinal.toFixed(2)}`;
}
buttonInicial.addEventListener('click', handleClick2);
button.addEventListener('click', handleClick);
