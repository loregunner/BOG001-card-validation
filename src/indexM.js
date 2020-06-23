const { createTransformer } = require("babel-jest");

let modal = document.getElementById("miModal");
let flex = document.getElementById("flex");
let abrir = document.getElementById("abrir1");
let close = document.getElementById("close");

abrir.addEventListener("click", function () {
    modal.style.display = "block";
});

cerrar.addEventListener("click", function () {
    modal.style.display = "none";
});