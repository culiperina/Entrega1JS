// 1. Identifico el elemento más importante de la aplicación: CURSOS (básico, intermedio y avanzado)
class Producto {
    constructor(id,nombre, precio) {
    this.id=id;
    this.nombre = nombre;
    this.precio= precio;
    this.envio=0.20;
    }

detalle(){
  return  this.nombre +" $"+ this.precio
}

precio(){
  return parseInt(this.precio);
}  

sumarEnvio(){
          return this.precio= this.precio+(this.precio * this.envio);
        }     

productoElegido (){
  if (producto1){
  return alert ("Excelente elección! Agregaste " + producto1+ " al carrito.");
  }
}
        
      }
const producto1 = new Producto(1,"Curso Básico",250);
const producto2 = new Producto(2,"Curso Intermedio",450);
const producto3 = new Producto(3,"Curso Avanzado",1000);
var total= parseInt(0)

let compra = prompt("Seleccioná el curso que querés aprender: \n 1." + producto1.detalle() + "\n 2." + producto2.detalle() +"\n 3."+ producto3.detalle());

const funcioncompra = (compra) => {
switch (compra){
  case "1":
    alert ("Excelente elección! Agregaste " + producto1.detalle()+ " al carrito.");
   function suma() {total + producto1.precio()};
     

  break;
  case "2":
    alert ("Excelente elección! Agregaste " + producto2.detalle() + " al carrito.");
  function suma() {total= total + producto2.precio()};

    break;
    case "3":
      alert ("Excelente elección! Agregaste " + producto3.detalle() + " al carrito.");
      function suma() {total + producto3.precio()};
 

      break;
      default:
        alert ("No seleccionaste ningún producto");
        break; 
}
}
while (compra<=3 && compra>0){
  funcioncompra(compra);
 compra= prompt("Seleccioná el curso que querés aprender: \n 1." + producto1.detalle() + "\n 2." + producto2.detalle() +"\n 3."+ producto3.detalle()+ "\n 4. Finalizar compra envío");
}
  alert("Compra finalizada, el total es"+ total);



console.log (producto1.detalle());
console.log (producto2.detalle());
console.log (producto3.detalle()); 