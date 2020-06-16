/*import validator from './validator.js';
console.log(validator);*/
function getData() {
  var nombre = document.getElementById("nombres").value;
  var creditCardNumber1 = document.getElementById("creditCardNumber").value;
  // console.log(getData)
  console.log(nombre, creditCardNumber1);
  localStorage.setItem("nombre", nombre);
  localStorage.setItem("creditCardNumber1", creditCardNumber1);
  const aNumeroTarjeta = Array.from(creditCardNumber1);
  //console.log(aNumeroTarjeta)
  const aInvertido = aNumeroTarjeta.reverse();
  aInvertido.forEach(function (element, index) {
    index++;
    if (index % 2 == 0) { element = element * 2 };
    if (element > 9) { element = element - 9 };
    console.log(element);
    var otroArray = element;
    var suma = 0;
    /*for (var i = 0; i < otroArray.length; i++) {
      suma += suma + parseInt(otroArray[i]);
    }
    console.log(suma)*/
  })
  //  window.location.href = 'indexP4.html' 
}
const boton = document.getElementById("BotonTarjeta");
boton.addEventListener("click", getData);

