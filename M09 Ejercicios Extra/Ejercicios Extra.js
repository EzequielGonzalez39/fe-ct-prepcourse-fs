/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   
   var nuevoArreglo = [];
   for (let prop in objeto){
      nuevoArreglo.push([prop, objeto[prop]])
   } 
   return nuevoArreglo
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objetoFinal = {};
   var string1 = string.split('');
   string1.sort();
for (let i = 0; i < string1.length; i++){
if (objetoFinal.hasOwnProperty(string1[i]) == true){
   objetoFinal[string1[i]] += 1
} else (objetoFinal[string1[i]] = 1)
}; return objetoFinal
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayusculas = [];
   var minisculas = [];
 var newArray = string.split('')
 for (let i = 0; i < newArray.length; i++){
 if (newArray[i] === newArray[i].toUpperCase()){
   mayusculas.push(newArray[i])
 } else {
   minisculas.push(newArray[i])
 }
 }
 var final = mayusculas.concat(minisculas)
 return final.join('')
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabras = frase.split(' ');
    var arrayFinal = [];
    for (let x = 0; x < palabras.length; x++){
        arrayFinal.push(palabras[x].split('').reverse());
        arrayFinal.push([' '])
    }; 
    stringReturn = []
    for (let i = 0; i < arrayFinal.length; i++){
        stringReturn.push(arrayFinal[i].join(''))
    } return stringReturn.join('').trim()
   }

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let num = numero.toString();
    for (let i = 0; i < num.length; i++){
        for (let x = num.length - 1; x >= 0; x--){
            if (num[x] !== num[i]){
                return ('No es capicua')
            } else {
               return ('Es capicua')
            }
        }
    }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let arrayFinal = [];
     for (let i = 0; i < string.length; i++){
         if (string[i] !== 'a' && string[i] !== 'b' && string[i] !=='c' ){
             arrayFinal.push(string[i])
         }
     }; return arrayFinal.join('')
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var array1 = [];
    for (let i = 0; i < 20; i++){
        for (let b = 0; b < arrayOfStrings.length; b++){
            if (arrayOfStrings[b].length == i){
                array1.push(arrayOfStrings[b])
            }
        }
    } return array1
   }


function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   Array.prototype.contiene = function(x){
      for (let i = 0; i < this.length; i++){
          if (this[i] === x) {
              return (true)
          } 
       };
       for (let i = 0; i < this.length; i++){
          if (this[i] !== x) {
              return (false)
          } 
       }
  };
  let arrayFinal = [];
  for (let i = 0; i < array1.length; i++){
      if (array2.contiene(array1[i])){
          arrayFinal.push(array1[i])
      }
  }; return arrayFinal
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
