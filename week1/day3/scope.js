let a = "global"

function outer(){
   let b = "outer";
   console.log(a); //global
   console.log(b); // outer

   function inner(){
      let c = "inner";
      console.log(a) // global
      console.log(b)// outer
      console.log(c)// inner
   }
   inner();
}
outer();
console.log(a)// global
console.log(b) //undefined
console.log(c) // undefined