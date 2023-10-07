function continueStatement(num) {
    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un array y retornarlo.
    // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
    // se continua con la siguiente iteración.
    // [PISTA]: utiliza el statement 'continue'.
    // Tu código:
    final = [];
    for (i = 1; i < 11; i++){
     num += 2;
     if (i === 5){
        continue
     } else {
        final.push('la iteracion numero '+ i + ' es '+ num)
     }
 } return (final)
}
 
 console.log(continueStatement(50))