let count = 0
let total = 0
function findAverage(numbers){
   for (const n of numbers){
      total += n
      count++
   }
   let result = total/count
   return result.toFixed(3)
}

function findMax(numbers){
   let big = numbers[0];
   for (i = 1; i < numbers.length; i++){
      if (numbers[i] > big){
         big = numbers[i]
      }
   }
   return big
}
function findMin(numbers){
   let small = numbers[0]
   for (i =1; i< numbers.length; i++){
      if (numbers[i] < small){
         small = numbers[i]
      }
   }
   return small
}

const nums = [12, 5, 88, 3, 45, 88, -7]
console.log(findAverage(nums))
console.log(findMax([]))
console.log(findMin(nums))