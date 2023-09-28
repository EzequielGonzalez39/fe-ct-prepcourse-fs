// Spread operator.........................................................................................................................................
/* 
- Lo que hace el spreed operator es que crea una copia de un arreglo u objeto por ejemplo tenemos un
arreglo con tantos elementos y queremos pasarle esos elementos a otro arreglo sin tener que hacer mucho
con un spreed operator seri asi de facil:
*/
​
let array1 = [1,2,3,4,5];
let array2 = [...array1, 6,7,8,9,10];
​
/* 
- Lo que va a pasar aqui es que el segundo array va a contener los elementos del array1 porque para especificar 
que array2 va a contener los elementos de array 1 es colocar (...array1) 
*/
​
// estos son mas ejemplos 
​
//Descomponer un arreglo:
​
//javascript
​
const arreglo1 = [1, 2, 3];
const arreglo2 = [...arreglo1, 4, 5, 6];
console.log(arreglo2); // [1, 2, 3, 4, 5, 6]
​
//Descomponer un objeto:
​
//javascript
​
const objeto1 = { a: 1, b: 2 };
const objeto2 = { ...objeto1, c: 3, d: 4 };
console.log(objeto2); // { a: 1, b: 2, c: 3, d: 4 }
​
//Pasando argumentos de función:
​
//javascript
​
const parametros = [1, 2, 3, 4, 5];
function suma(a, b, c, d, e) {
  return a + b + c + d + e;
}
const resultado = suma(...parametros);
console.log(resultado); 
// Aca va a dar 15 porque le estamos pasando como parametro el arreglo "parametros" pero como spread operator y lo que hace entonces es 
 // asignarle a cada parametro cada elemento del arreglo en orden siempre en orden 
​
​
//Clonar un arreglo u objeto:
​
//javascript
​
const originalArreglo = [1, 2, 3];
const clonArreglo = [...originalArreglo];
​
const originalObjeto = { a: 1, b: 2 };
const clonObjeto = { ...originalObjeto };
​
​
// Ademas gracias al Spread operator podemos hacer este tipo de cosas:
​
let numeroMaximo = Math.max(...array1)
console.log (numeroMaximo)// Nos va a dar 5 pues es el numero maximo del arreglo
// De esa manera podemos saber el numero maximo de un arreglo super facil
​
​
// RECORDAR QUE ESTO CREA UNA COPIA DEL ARREGLO ASI QUE EL ARREGLO ORIGINAL NO LE PASA NADA
​
​
// Slice..........................................................................................................................................................
​
/* 
- Lo que hace Slice es que crea otro arreglo con los elementos seleccionados los cuales se los tenemos que pasar
como parametro en el Slice el primer parametro en start el cual va a decir desde donde va a empezar a agarrar
elementos y el segundo es end el cual va a decir hasta donde va a llegar 
  
​
- El método .slice() en JavaScript se utiliza para crear una nueva matriz (o submatriz) que contiene copias 
superficiales de elementos de una matriz existente. Este método no modifica la matriz original, sino que 
devuelve una nueva matriz con los elementos seleccionados.
​
​
- start (índice inicial, inclusive): El índice desde el cual comenzará a copiar elementos. Si se omite este 
argumento, se inicia desde el principio de la matriz (índice 0).
​
- end (índice final, exclusivo): El índice hasta el cual se copiarán elementos. La copia no incluirá el 
elemento en este índice. Si se omite este argumento, se copiarán todos los elementos desde start hasta el 
final de la matriz.
*/
​
​
// Aquí hay un ejemplo de cómo usar .slice():
// EJEMPLO 
​
​
const originalArray = [1,2,3,4,5];
​
let pio = originalArray.slice();
​
// Aqui vamos a tener un arreglo con todos los elementos de originalArray porque no le pasamos un start ni un end
​
​
// otros ejemplos 
​
// Copia la matriz desde el índice 1 hasta el final
const newArray2 = originalArray.slice(1);
console.log(newArray2); // [2, 3, 4, 5]
​
// Copia la matriz desde el índice 1 (inclusive) hasta el índice 3 (exclusivo)
const newArray3 = originalArray.slice(1, 3);
console.log(newArray3); // [2, 3]
​
// Copia la matriz completa (equivalente a usar slice() sin argumentos)
const newArray4 = originalArray.slice(0, originalArray.length);
console.log(newArray4); // [1, 2, 3, 4, 5]
​
​
// entonces ya tenemos dos metodos para pasar elementos de un arreglo a otro, primero el spreed operador y el 
// slice
​
/* 
- Recuerda que .slice() no modifica la matriz original; en su lugar, crea una nueva matriz con los elementos 
seleccionados. Esto es útil para realizar operaciones en subconjuntos de una matriz sin afectar la original.
*/
​
​
// Fusionar elementos con .CONCAT()......................................................................................................................
​
/* 
- Lo que hace concat es crear un nuevo arreglo con uno o mas arreglos, por ejemplo si yo tengo dos arreglos
y quiero unirlos puedo crear un nuevo arreglo con concat, un arreglo que contendra todos los elementos de 
los dos arreglos.
​
- El método concat() en JavaScript se utiliza para combinar dos o más matrices (arrays) en una nueva matriz 
sin modificar las matrices originales. Este método toma una o más matrices como argumentos y devuelve una 
nueva matriz que contiene todos los elementos de las matrices originales en el orden en que se pasaron 
como argumentos.
*/
​
 //por EJEMPLO:
​
​
let arrayEjemplo1 = [1,2,3];
let arrayEjemplo2 = [4,5,6];
let arrayEjemplo3 = [7,8,9];
​
​
let newArray = arrayEjemplo1.concat(arrayEjemplo2)
 console.log(newArray) // newArray[1,2,3,4,5,6]
​
// Acaba de agarrar todos los elementos de los dos arreglos y los metido en newArray
​
let newArray_dos = arrayEjemplo1.concat(arrayEjemplo2, arrayEjemplo3);
console.log(newArray_dos) // newArray_dos [1,2,3,4,5,6,7,8,9]
​
// No solo podemos concatenar dos arreglos, realmente podemos unir mas de dos arreglos
​
/* 
- Recordar que los arreglos arrayEjemplo 1, 2 y 3 no se van a modificar 
​
- Puedes usar concat() para combinar cualquier número de matrices en una nueva matriz. 
Ten en cuenta que este método no modifica las matrices originales, sino que crea una 
nueva matriz que contiene los elementos combinados.
*/
​
​
let newArray_tres = array1.concat()
console.log(newArray_tres)
​
// Y si, con concat tambien puedes crear un arreglo con los elementos de otro arreglo  
​
​
​
// SOME()....................................................................................................................................................................
​
​
/* 
- Lo que hace some es que crea evalua si el arreglo contiene o no contiene un elemento 
si contiene el elemento retornara true pero si no contiene el elemento retornara false
​
- Entonces el metodo some() va a recibir como parametro un callback, una funcion de retorno
y esta funcion se va a ejecutar por cada elemento del arreglo hasta que encuentre el elemento
que cumpla con la condicion o hasta que ya recorriera todo el arreglo
​
- Ademas de eso, some recibe tres parametros: 
​
  -  element: El valor actual del elemento siendo evaluado en el arreglo.
  -  index (opcional): El índice del elemento actual en el arreglo.
  -  array (opcional): La matriz original que está siendo evaluada.
​
- El método .some() devuelve true si la función de callback devuelve true para al menos un 
elemento en el arreglo, y false si la función de callback devuelve false para todos los 
elementos en el arreglo.
​
*/
​
//EJEMPLOS:
​
​
let numbers = [1,2,3,4,5];
​
​
// Aqui simplemente esta buscando el elemento que sea igual a 3 y retorna true si lo encuentra
​
let result = numbers.some(element => element === 3)
​
console.log (result) // retorna true pues contiene el numero 3
​
​
​
​
// Aqui lo que esta haciendo es buscar un numero que sea igual o mayor a tres y si lo encuentra retorna true 
​
let result1 = numbers.some(element => {if(element >= 3) return element; })
​
console.log (result1) // Retorna true porque encuentra un numero mayor o igual a 3
​
​
​
​
// Aqui verifica si almenos un numero es menor que 0
​
let result2 = numbers.some(element => {if(element < 0) return element})
​
console.log (result2) // Esto va a dar false porque no encuentra un valor menor a 0
​
​
​
​
// EVERY()............................................................................................................................................... 
​
/* 
- Lo que hace every es ver si cada uno de los elementos del arreglo cumplen con la condicion 
si todos los elementos cumplen con la condicion este devolvera true, pero si algun elemento no
cumple con la condicion este devolvera false.
​
- Otra cosa es que recibe por parametro un callback el cual al igual que some, va a pasar por cada
elemento y va a ejecutar esta funcion callback hasta que encuentre un elemento que no cumpla con la 
condicion y si encuentra este elemento, retornara false.
​
- Ademas de eso el callback recibe tres tipos de parametros:
​
    element: El valor actual del elemento siendo evaluado en el arreglo.
    index (opcional): El índice del elemento actual en el arreglo.
    array (opcional): La matriz original que está siendo evaluada.
 
- Entonces asi funciona every, si every devuelve true significa que la funcion a devuelto true para
todos los elementos del arreglo, osea paso por todos y son todos true, y es false si encuentra uno 
que no cumple la condicion.
​
- Recordar que este metodo retornara un valor BOLEANO 
*/
​
// EJEMPLOS:
​
let numbers2 = [1,2,3,4,5];
​
​
// Aqui vamos a verificar si los elementos son mayores a 0
​
let verificacion1 = numbers2.every(element => element>0);
​
console.log(verificacion1) // Esto va a dar TRUE pues como todos los elementos son mayores a 0 la funcion devuelve true. todos cumplieron la condicion
​
​
​
// Aqui vamos a verificar si los numeros son pares.
​
let verificacion2 = numbers2.every(element => element % 2 === 0)
​
console.log(verificacion2) // Retorna FALSE porque hay elementos que no cumplen la condicion de ser pares 
​
​
​
// FILL............................................................................................................................................................................................
​
/* 
- Lo que hace el metodo fill() es que llena el arreglo con elementos especificados por ejemplo si yo le paso un 7
el metodo se encargara de llenar el arreglo con 7s, es importante saber que modifica el arreglo original y cambia el
valor de los elementos por el valor que nosotros le pasamos, ademas recibe por parametro tres tipos:
​
​
   - value: El valor con el que se llenarán los elementos del arreglo.
   - start (opcional): El índice en el que se iniciará el llenado. Si se omite, el llenado comenzará desde el índice 0.
   - end (opcional): El índice en el que se detendrá el llenado (no se incluirá el elemento en este índice). 
     Si se omite, el llenado continuará hasta el final del arreglo.
*/
​
// EJEMPLO:
​
let arr = [1,2,3,4,5];
let arr2 = [1,2,3,4,5];
let arr3 = [1,2,3,4,5];
​
// Vamos a cambiar todos los elementos por 7 
​
let modificacion = arr.fill(7);
console.log(arr) 
// Ahora el arreglo original retorna un arreglo de puros 7 porque cambia el valor de cada uno de los elementos a 7.
​
​
// Ahora vamos a llenar los elementos del indice 2 para adelante con el valor 8
​
let modificacion1 = arr2.fill(8, 2)
console.log (arr2)
// Esto pasa porque le estoy especificando que empieze desde el indice 2 asi que convierte el indice 2, 3 y 4 
​
​
​
​
// Ahora vamos a llenar solo el tercer y cuarto elemento con el valor 9 osea el indice 2 hasta el indice 4 entonces como
 // le estamos diciendo que pare de llenar hasta el indice 4, el indice 4 no se cambiara
​
let modificacion2 = arr3.fill(9, 2, 4)
console.log(arr3)
​
// Esto es lo mismo que lo anterior, solo que le decimos que termine en el indice 4
​
​
​
​
​
// SORT.................................................................................................................................................................
​
​
/* 
- El método .sort() en JavaScript se utiliza para ordenar los elementos de un arreglo (array) en su lugar, es decir, 
modifica el arreglo original reorganizando sus elementos en un orden determinado. Por defecto, este método ordena los 
elementos como cadenas de caracteres (en orden lexicográfico), lo que puede no ser adecuado para arreglos de números o 
elementos de otros tipos.
​
-El método .sort() acepta un argumento opcional, que es una función de comparación (callback). Esta función de comparación 
se utiliza para especificar cómo se deben ordenar los elementos en el arreglo. La función de comparación toma dos argumentos, 
generalmente llamados a y b, que representan dos elementos del arreglo. La función debe devolver:
​
​
   - Un número negativo si a debe estar antes que b en el orden.
   - Cero si a y b son considerados iguales en el orden.
   - Un número positivo si a debe estar después que b en el orden.
​
 - Un EJEMPLO básico de cómo usar .sort() para ordenar un arreglo de números de menor a mayor:
*/
​
​
const numbersYes = [5, 2, 9, 1, 5];
​
let convertidos = numbers.sort(function(a, b) {
  return a - b;
});
​
console.log(convertidos); // [1, 2, 5, 5, 9]
​
/*
- En este ejemplo, la función de comparación function(a, b) { return a - b; } indica que los números deben 
ordenarse de menor a mayor. Si quisieras ordenarlos de mayor a menor, podrías usar return b - a;.
​
- También puedes usar el método .sort() para ordenar elementos no numéricos o personalizar el orden de acuerdo
 a tus necesidades utilizando una función de comparación adecuada.
*/
​
​
​
​
//SPLICE..............................................................................................................................................................
​
​
/* 
- El metodo splice() sirve para eliminar, reemplazar o agregar elementos a posiciones especificas del arreglo. 
Puede realizar varias acciones diferentes dependiendo de cómo se le pasen los argumentos.
​
​
- El método .splice() acepta tres argumentos principales:
​
   - start: El índice en el cual comenzará la operación de modificación. Es el índice donde se realizarán las acciones 
      (eliminar, reemplazar o agregar elementos).
​
   - deleteCount (opcional): La cantidad de elementos que se eliminarán desde la posición start. Si se omite o es 0, 
      no se eliminarán elementos y solo se agregarán elementos (si se especifica).
​
   - items (opcional): Los elementos que se agregarán al arreglo en la posición start.
​
*/
​
// EJEMPLOS:
​
//Eliminar elementos:
​
let arrTest = [1,2,3,4,5];
​
let deleted = arrTest.splice(1, 2) 
/* 
- Le estamos diciendo que empieze desde el elemento 1 y el 2 esta hay para esspecificar cuantos elementos borrar,
 osea que le estamos diciendo que elimine todos los elementos desde el indice 1 hasta el indice 2 
*/
​
console.log(deleted) // Podemos guardar los elementos que se borraron 
console.log(arrTest) // Se eliminaron los elementos con indice 1 y 2 osea el 2 y 3
​
​
​
// Reemplazar elementos:
​
let arrTest1 = [1,2,3,4,5];
​
let rempazo =arrTest1.splice(1, 2, "a", "b", "c")
​
console.log (arrTest1) // Aqui estamos reemplazando los elementos en los indices 1 y 2 y colocando esos strings
​
/* 
- Recordemos que el tercer parametro agrega elementos a la posicion donde se puso el start y el segundo parametro
elimina todos los indices que esten este el y el start, por ejemplo primero lo que hacemos es eliminar los indices
1 y 2 los cuales son 2 y 3 y luego le decimos a el tercer parametro el que agrega, que agrege esos string empezando
por la posicion del start osea el indice 1 y que simplemente le den espacio y el se acomodara hay 
​
- Igual si nosotros al segunda parametro el que borra, le pasamos un 0 el parametro que coloca elementos simplemete 
va a colocar elementos hay y creara un arreglo de esta forma:
​
[1, "a", "b", "c", 2, 3, 4, 5];
​
*/
​
​
​
// Agregar elementos sin eliminar:
​
let arrTest2 = [1,2,3,4,5];
​
​
let ceroKills =arrTest2.splice(1, 0, "A", "B", "C");
​
console.log (ceroKills) // Esto va hacer un arreglo vacio porque simplemente agregamos elementos al arreglo original
console.log (arrTest2) // El metodo hiso cambios en el arreglo original ahora tiene mas elementos
​
​
// RECORDAR QUE ESTEMETODO SI HACE CAMBIOS EN EL ARREGLO ORIGINAL

