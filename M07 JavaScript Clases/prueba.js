 function reverse (palabra){
   var palabraSeparada = palabra.split('');
   var palabraInvertida = [];
      for (let i = 0; i < palabraSeparada.length; i++){
         palabraInvertida.unshift(palabraSeparada[i])
      }
      var palabraFinal = palabraInvertida.join('');
      return palabraFinal
   }

   console.log(reverse('hola'))