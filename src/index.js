import validator from './validator.js';

console.log(validator);

function final() {

  var creditCardNumber1 = document.getElementById("creditCardNumber").value;
  const aNumeroTarjeta = Array.from(creditCardNumber1);


  validator.isvalid(creditCardNumber1)
  let decodificado = validator.maskify(creditCardNumber1)


  if (validator.isvalid(creditCardNumber1) === true) {
    swal(`Tu tarjeta ${decodificado} es válida, tu compra ha sido exitosa`);
    //innerHeight ""

  } else {
    swal(`Tu tarjeta ${decodificado} es inválida, intenta nuevamente`);

  }


  function factura() {

    var falda1 = localStorage.getItem('falda1');
    document.getElementById('facturaF1').innerHTML = (falda1);

    var falda2 = localStorage.getItem('falda2');
    document.getElementById('facturaF2').innerHTML = (falda2)

    var falda3 = localStorage.getItem('falda3');
    document.getElementById('facturaF3').innerHTML = (falda3)


  }

  window.onload = factura();
  //  window.location.href = 'indexP4.html' 
}
const boton = document.getElementById("BotonTarjeta");
boton.addEventListener("click", final);



let modal = document.getElementById("miModal");
let flex = document.getElementById("flex");
let abrir = document.getElementById("abrir1");
let close = document.getElementById("close");

abrir.addEventListener("click", function () {
  modal.style.display = "block";
});