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

 console.log(buscoInterseccion([1,2,3,4,5,6,7,9],[9,4,1,8]))
 

