const values = [0, 1, -1, "", "hello", "0", null, undefined, NaN,false, [], {}];
for (const v of values){
   if (v){
      console.log(v, " is truthy")
   } else{
      console.log(v, " is falsy")
   }
}
// v is falsy
// v is truthy
// v is truthy
// v is falsy
// v is truthy
// v is truthy
// v is falsy
// v is falsy
// v is falsy
// v is falsy
// v is truthy
// v is truthy


console.log(true&&false)  //false
console.log(true||false)  //true
console.log(true)   //true
console.log("hello"&&"world")  //world
console.log(""&&"world") // 
console.log(0||"default")    // default
console.log(0??"default")    // 0

// A Ternary
const age = 20;
const status = age >= 18? "adult": "minor";
console.log(status) //adult