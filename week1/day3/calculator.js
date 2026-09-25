function calculator(function(), a,b){
   return function(a,b);
}

function add(a, b){
   return a + b
}
function subtract(a, b){
   return a-b;
}
function multiply(a, b){
   return a * b;
}
function divide(a, b){
   if (b == 0){
      return "It can be divided"
   }
   return a/b;
}
console.log(calculator(divide(5,1)))