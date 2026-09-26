// const operator = function (){}

function calculator(operator, a, b) {
   return operator(a,b);
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
      return "It cannot be divided"
   }
   return a/b;
}
console.log(calculator(add, 6, 4))
console.log(calculator(subtract, 7, 1))
console.log(calculator(multiply, 25 , 2))
console.log(calculator(divide, 5 , 1))