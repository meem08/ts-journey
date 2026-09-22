const secretNumber = Math.floor(Math.random() * 100) + 1
const keepGuess = []
alert("Hello guess the secret number between 1 and 100")
let guess = 1;
while (guess <= 7) {
    let guessNum = Number(window.prompt("Enter number between 1 and 100"));
    guess++
    keepGuess.push(guessNum)

    if (guessNum == secretNumber) {
        console.log(`Your guess number is Perfect!,${secretNumber}`);
        break;
    }
    if (guessNum > secretNumber) {
        console.log("Your number is too high, try lower numbers")
    }
    if (guessNum < secretNumber) {
        console.log("Your number is too low, try higher numbers")
    }
}
console.log("Your guesses: ", keepGuess);

