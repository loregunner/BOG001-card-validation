const validator = {

  isvalid: (creditCardNumber1) => {

    let aNumeroTarjeta = Array.from(creditCardNumber1);
    console.log(aNumeroTarjeta)

    let aInvertido = aNumeroTarjeta.reverse();
    console.log(aInvertido)

    aInvertido.forEach(function (element, index) {
      let nueva = index + 1;
      if (nueva % 2 == 0) { element = element * 2 };

      if (element > 9) { element = element - 9 }

      aInvertido[index] = element;

      console.log(aNumeroTarjeta);

    });

    console.log(aInvertido);
    var suma = 0;

    for (var i = 0; i < aInvertido.length; i++) {
      suma = suma + parseInt(aInvertido[i]);

    }

    console.log(suma);

    var division = suma % 10
    console.log(division);

    if (division === 0) { alert('tu tarjeta es valida') }
    else { alert('tu tarjeta es invalidad') }

  },
  maskify: (aNumeroTarjeta) => aNumeroTarjeta.slice(0, -4).fill('#') + aNumeroTarjeta.slice(-4),
  
};




export default validator;