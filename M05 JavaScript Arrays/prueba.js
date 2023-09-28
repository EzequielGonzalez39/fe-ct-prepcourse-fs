
function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   final = [];
   for (i = 0; i < 10; i++){
    if (i === 5){
       continue
    } else { num += 2;
       final.push(num)
    }
} return final
}

console.log(continueStatement(50))