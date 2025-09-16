const input1 = document.querySelectorAll("input")[0];
const select1 = document.querySelectorAll("select")[0];
const input2 = document.querySelectorAll("input")[1];
const select2 = document.querySelectorAll("select")[1];
const button = document.querySelector("button");

function toCelsius(valor, unidade) {
    if (unidade === 'celsius') return valor;
    if (unidade === 'fahreinheit') return (valor - 32) * 5 / 9;
    if (unidade === 'kelvin') return valor - 273.15;
}

function fromCelsius(valor, unidade) {
    if (unidade === "celsius") return valor;
    if (unidade === "fahreinheit") return (valor * 9 / 5) + 32;
    if (unidade === "kelvin") return valor + 273.15;
}

button.addEventListener("click", () => {
  const valor = parseFloat(input1.value);
  const unidadeOrigem = select1.value;
  const unidadeDestino = select2.value;

  if (isNaN(valor)) {
    alert("Digite um número válido!");
    return;
  }

  const emCelsius = toCelsius(valor, unidadeOrigem);
  const resultado = fromCelsius(emCelsius, unidadeDestino);

  input2.value = resultado.toFixed(2);
});
