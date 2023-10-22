//  function reverse (palabra){
//    var palabraSeparada = palabra.split('');
//    var palabraInvertida = [];
//       for (let i = 0; i < palabraSeparada.length; i++){
//          palabraInvertida.unshift(palabraSeparada[i])
//       }
//       var palabraFinal = palabraInvertida.join('');
//       return palabraFinal
//    }

//    console.log(reverse('hola'))


// function mayuscula(nombre) {
//    // Esta función recibe un nombre (string).
//    // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
//    // [Ejemplo]: "mario" ----> "Mario".
//    // Tu código: 
//  var p1 = nombre.toString();
//  var p2 = p1.split('');
//  var p3 = p2.shift();
//  return p3
// };

function mayuscula(nombre) {
    // Esta función recibe un nombre (string).
    // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
    // [Ejemplo]: "mario" ----> "Mario".
    // Tu código: 
    var p1 = nombre.toString();
    var p2 = p1.split('');
    var p3 = nombre[0].toUpperCase();
    p2.shift();
    p2.unshift(p3);
    return p2.join('')
 }

console.log(mayuscula('eze'))

