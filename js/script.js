/**Seleção de Elementos e variaveis */

const inputHeigh = document.querySelector("#input-height");
const inputWeight = document.querySelector("#input-weight");
const btnClear = document.querySelector("#btn-clear");
const btnBack = document.querySelector("#btn-back");
const container = document.querySelector("#container");
const containerResults = document.querySelector("#container-results");
const btnCalculate = document.querySelector("#btn-calculate");
const imcElement = document.querySelector("#imc-number span");
const situationElement = document.querySelector("#imc-info span");
const msg = document.querySelector("#msg");

/**Funções*/

/**Realiza o calculo do IMC e mostra as classificações */
const calcularIMC = () => {
  let height = parseFloat(inputHeigh.value);
  let weight = parseFloat(inputWeight.value);
  let imc = weight / Math.pow(height, 2);
  imcElement.innerText = imc.toFixed(1);
  if (imc < 18.5) {
    situationElement.innerText = "Magreza";
    situationElement.style.color = "#b73f38";
    imcElement.style.color = "#b73f38";
  } else if (imc >= 18.5 && imc <= 24.9) {
    situationElement.innerText = "Normal";
    situationElement.style.color = "#087829";
    imcElement.style.color = "#087829";
  } else if (imc >= 25.0 && imc <= 29.9) {
    situationElement.innerText = "Sobrepeso";
    situationElement.style.color = "#bb9313";
    imcElement.style.color = "#bb9313";
  } else if (imc >= 30.0 && imc <= 39.9) {
    situationElement.innerText = "Obesidade";
    situationElement.style.color = "#b73f38";
    imcElement.style.color = "#b73f38";
  } else {
    situationElement.innerText = "Obesidade Grave";
    situationElement.style.color = "#b73f38";
    imcElement.style.color = "#b73f38";
  }
  showResults();
};

const verificarCampoVazio = () => {
  if (inputHeigh.value == "" || inputWeight.value == "") {
    inputHeigh.style.borderColor = "red";
    inputWeight.style.borderColor = "red";
    return true;
  }
};

function checkChar(e) {
  const char = String.fromCharCode(e.keyCode);
  console.log(char);
  console.log(e.keyCode);
  const pattern = "[0-9.,]";
  if (char.match(pattern)) {
    return true;
  }
}

const fieldTextClear = () => {
  inputHeigh.value = "";
  inputWeight.value = "";
};

const showResults = () => {
  container.classList.toggle("hide");
};

const removeMsg = () => {
  msg.innerText = "";
  inputHeigh.style.borderColor = "initial";
  inputWeight.style.borderColor = "initial";
};

/**Eventos */
btnClear.addEventListener("click", () => {
  fieldTextClear();
});

btnBack.addEventListener("click", () => {
  backPrincipal();
  fieldTextClear();
});

inputHeigh.addEventListener("focus", () => {
  removeMsg();
});

inputWeight.addEventListener("focus", () => {
  removeMsg();
});

btnCalculate.addEventListener("click", () => {
  if (verificarCampoVazio() === true) {
    msg.innerText = "É necessário preencher os campos antes de prosseguir!";
  } else {
    calcularIMC();
  }
});

inputHeigh.addEventListener("keypress", (e) => {
  if (!checkChar(e)) {
    e.preventDefault();
    msg.innerText = "É permitido apenas números conforme o exemplo!";
  } else {
    removeMsg();
  }
});

inputWeight.addEventListener("keypress", (e) => {
  if (!checkChar(e)) {
    e.preventDefault();
    msg.innerText = "É permitido apenas números conforme o exemplo!";
  } else {
    removeMsg();
  }
});
