/* Setting a simple form validation */

let userName = document.querySelector("#name");
let nameLabel = document.querySelector("#name-label");
let cellphone = document.querySelector("#cellphone");
let cellphoneLabel = document.querySelector("#cellphone-label");

userName.oninput = () => {
  if (userName.value.length <= 2) {
    nameLabel.setAttribute("style", "color: red");
    nameLabel.innerHTML = "nome * mínimo 3 caracteres";
  } else {
    nameLabel.setAttribute("style", "color: limegreen");
    nameLabel.innerHTML = "nome" + " " + "&#10003";
  }
};

cellphone.oninput = () => {
  if (cellphone.value.length !== 9) {
    cellphoneLabel.setAttribute("style", "color: red");
    cellphoneLabel.innerHTML = "telemóvel * 9 digitos";
  } else {
    cellphoneLabel.setAttribute("style", "color: limegreen");
    cellphoneLabel.innerHTML = "telemóvel" + " " + "&#10003";
  }
};

/* Setting local storage */

document
  .getElementById("appointmentBtn")
  .addEventListener("click", function () {
    const user = document.getElementById("name");
    localStorage.setItem("text", user.value);
    user.input = "";
    const number = document.getElementById("cellphone");
    localStorage.setItem("tel", number.value);
    number.input = "";
  });

document.getElementById("displayData").addEventListener("click", function () {
  const userData = localStorage.getItem("text");
  const phoneData = localStorage.getItem("tel");
  alert(
    `Os dados gravados localmente foram: \nNome: ${userData} \nTelefone: ${phoneData}`
  );
});
