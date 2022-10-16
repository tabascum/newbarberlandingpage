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
    `Os dados foram gravados localmente: \nNome: ${userData} \nTelefone: ${phoneData}`
  );
});
