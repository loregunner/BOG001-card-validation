let modal = document.getElementById("miModal");
let abrir = document.getElementById("abrir1");
let cerrar = document.getElementById("close");

abrir.addEventListener("click", function () {
    modal.style.display = "block";
});

cerrar.addEventListener("click", function () {
    modal.style.display = "none";
});