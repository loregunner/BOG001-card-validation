import validator from './validator.js';


console.log(validator)
function final() {
  var creditCardNumber1 = document.getElementById("creditCardNumber").value;
  const aNumeroTarjeta = Array.from(creditCardNumber1);
  validator.isvalid(creditCardNumber1)
 let mascara = validator.maskify(creditCardNumber1)
if(validator.isvalid(creditCardNumber1)===true){
 swal(`Tu tarjeta ${mascara} es válida, tu compra ha sido exitosa`)
 
}else{
swal(`Lo sentimos Tu tarjeta ${mascara} es invalida intenta nuevamente`)
}
console.log(mascara);
 
  //  window.location.href = 'indexP4.html'
}

const boton = document.getElementById("BotonTarjeta");
boton.addEventListener("click", final);
