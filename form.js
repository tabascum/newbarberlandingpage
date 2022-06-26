//First modal displaying a cut schedule form

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Second modal displaying SMS type message on pushing the "submit" button

let myModal = document.getElementById("myModal2");
let submit = document.getElementById("submit");

submit.onclick = function() {
  myModal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == myModal) {
    myModal.style.display = "none";
  }
}