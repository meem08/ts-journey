// const secretNumber = Math.floor(Math.random()*100)+1
// const keepGuess = []
// alert("halo")
// let guess = 1;
// while (guess <= 7){
//    let guessNum = Number(window.prompt("Enter number between 1 and 100"));
//    guess++
//    keepGuess.push(guessNum)

//    if (guessNum == secretNumber){
//       console.log(`Your guess number is Perfect!,${secretNumber}`)
//    }
//    if (guessNum > secretNumber){
//       console.log("Your number is too high, try lower numbers")
//    }
//    if (guessNum < secretNumber){
//       console.log("Your number is too low, try higher numbers")
//    }
   
// }


const secretNumber = Math.floor(Math.random() * 100) + 1;
const keepGuess = [];

let guess = 1;

alert("Hello! Guess the secret number between 1 and 100.");

while (guess <= 7) {

    let guessNum = Number(prompt("Enter a number between 1 and 100:"));

    keepGuess.push(guessNum);
    guess++;

    if (guessNum === secretNumber) {
        console.log("Your guess is perfect! The secret number is .");
        break;
    }

    if (guessNum > secretNumber) {
        console.log("Your number is too high, try a lower number.");
    }

    if (guessNum < secretNumber) {
        console.log("Your number is too low, try a higher number.");
    }
}

console.log("Your guesses:", keepGuess);
