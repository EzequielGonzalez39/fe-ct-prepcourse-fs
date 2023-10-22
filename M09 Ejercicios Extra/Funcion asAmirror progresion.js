function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  var array1 = [[]];
  var array2 = [];
  var array3 = frase.split('');
  array3.push(' ')

  for (let i = 0; i < array3.length; i++){
    if (array3[i] !== (' ')){
      array1[0].push(array3[i])
    } else {
      array2.push(array1[0])
      array1.pop()
      array1.push([])
    }
    };
    var array4 = []
    for (let x = 0; x < array2.length; x++){
      array4.push(array2[x].reverse())
    };
    var array5 = []
    for (let z = 0; z < array4.length; z++){
      array5.push(array4[z].join(''))
      array5.push(' ')
    }; 
    var array6 = array5.join('');
   
    return array6.trim()
  };
  
// Final
  function asAmirror(frase) {
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




