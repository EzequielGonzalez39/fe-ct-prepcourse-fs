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

    console.log(sortArray(['aaa', 'aa', 'a', 'aaaaaa', 'sadkhgbajkdfhbak', 'asda']))