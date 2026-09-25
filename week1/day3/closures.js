function makeCounter(){
   let count = 0
   return function(){
      count++
      return count
   }
}
const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

const counter2 = makeCounter();
console.log(counter2());
console.log(counter());

//the function makeCounter() has no condition to stop the count, so anytime it is logged it increases the count and return the count.