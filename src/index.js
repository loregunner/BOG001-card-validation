function agregar() {
    var arrayInput = new Array();
    var inputsValue = document.getElementsByClassName('creditCarnumberinput');
    creditoValue = [].map.call(inputsValue, function (dataInput) {
        arrayInput.push(dataInput.value);


    });
    arrayInput.forEach(function (inputsValue) {
        console.log("numero en array" + inputsValue);
    });


}
import validator from './validator.js';

console.log(validator);


