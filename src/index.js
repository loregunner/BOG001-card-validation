import validator from './validator.js';

console.log(validator);

function final(){

  var creditCardNumber1 = document.getElementById("creditCardNumber").value;
  const aNumeroTarjeta = Array.from(creditCardNumber1);

  
  validator.isvalid (creditCardNumber1)
  let decodificado = validator.maskify (creditCardNumber1)
  

  if (validator.isvalid(creditCardNumber1)=== true ) {
    swal(`Tu tarjeta ${decodificado} es válida`);
    //innerHeight ""

  } else {
    swal(`Tu tarjeta ${decodificado} es inválida`);

  }
 //  window.location.href = 'indexP4.html' 
}


  


const boton = document.getElementById("BotonTarjeta");
boton.addEventListener("click", final); 