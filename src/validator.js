const validator = function getData()
 {
  var nombre = document.getElementById("nombres").value;
  var creditCardNumber1 = document.getElementById("creditCardNumber").value;
  console.log(getData)
  console.log(nombre, creditCardNumber1);
  localStorage.setItem("nombre", nombre);
  localStorage.setItem("creditCardNumber1", creditCardNumber1);
  const aNumeroTarjeta = Array.from(creditCardNumber1);
  const mascara = aNumeroTarjeta.slice(0, -4).fill('#') + aNumeroTarjeta.slice(-4);
   console.log(mascara)
  console.log(aNumeroTarjeta)
  const aInvertido = aNumeroTarjeta.reverse();
  console.log(aInvertido)
  aInvertido.forEach (function (element, index) {
    let nueva = index + 1;
    if (nueva % 2 == 0) { element = element * 2 };
    if (element > 9) { element = element - 9 }
    aInvertido[index] = element;
   console.log(aInvertido);
    });
  console.log(aInvertido);
  var suma = 0;
  for (var i = 0; i < aInvertido.length; i++) {
    suma = suma + parseInt(aInvertido[i]);
  
  }
  console.log(suma);
  var division = suma % 10
  console.log(division);
  if (division === 0) { return true } else { return false }

}
console.log(validator("378282246310005"))
const boton = document.getElementById("BotonTarjeta");
boton.addEventListener("click", validator);

export default validator;
