// first attempt
// function fizzBuzz(num){
//    if (num <= 0 || num >= 100){
//       return "Number must be between 1 and 100"
//    } else if (num % 3==0 && num %5==0){
//       return "FizzBuzz"
//    } else if (num % 3===0){
//       return "Fizz"
//    } else if (num %5===0){
//       return "Buzz"
//    }else{
//       return num
//    }
// }
// let numb = 22
// console.log(fizzBuzz(numb))

// second attempt
for (i=1; i <= 100; i++){
   if (i % 3==0 && i %5==0){
     console.log("FizzBuzz")
   } else if (i % 3==0){
      console.log("Fizz")
   } else if (i %5==0){
      console.log("Buzz")
   } else{
      console.log(i)
   }
 }