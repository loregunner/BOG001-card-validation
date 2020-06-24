var f1 = function (){

    var falda1 = "Falda descripcion   precio: $40.000";

    localStorage.setItem("falda1",falda1);
    document.getElementById('facturaF1').innerHTML = (falda1);

  };

var f2 = function (){
    

    var falda2 = "Falda descripcion   precio: $20.000";

    localStorage.setItem("falda2",falda2);
    document.getElementById('facturaF2').innerHTML = (falda2)
 
  };

var f3 = function (){

    var falda3 = "Falda descripcion   precio: $50.000";

    localStorage.setItem("falda3",falda3);
    document.getElementById('facturaF3').innerHTML = (falda3)
  
  };

  const boton1 = document.getElementById("botonUno");
boton1.addEventListener("click", f1); 

const boton2 = document.getElementById("botonDos");
boton2.addEventListener("click", f2); 

const boton3 = document.getElementById("botonTres");
boton3.addEventListener("click", f3); 