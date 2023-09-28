function multiplicarArgumentos(arguments) { 
  arr = [...arguments];
  var product = 1;
 if (arr.length === 0){
  return 0
 } else if (arr.length === 1){
  return arr[0]
 } else {
  for (let i = 0 ; i < arr.length ; i++){
  product *= arr[i]
} 
} return product
}

console.log(multiplicarArgumentos([7,2,3,4,1,2,3,6]))




