const secretNumber = Math.floor(Math.random() * 100) + 1
const keepGuess = []
alert("Hello guess the secret number between 1 and 100")
let guess = 1;
while (guess <= 7) {
    let input = window.prompt("Enter number between 1 and 100")
    if (input === null) {
        alert("you  quit!!!")
        break;
    }
    let guessNum = Number(input);
    guess++
    keepGuess.push(guessNum)

    if (guessNum === secretNumber) {
        alert(`Your guess number is Perfect!,${secretNumber}`)
        console.log(`Your guess number is Perfect!,${secretNumber}`);
        break;
    }
    if (guess === 7) {
        alert(`You have used up all your ${guess} attempts.`)
        console.log(`You have used up all your ${guess} attempts.`)

    }
    if (guessNum > secretNumber) {
        alert("Your number is too high, try lower numbers")
        console.log("Your number is too high, try lower numbers")
    }
    if (guessNum < secretNumber) {
        alert("Your number is too low, try higher numbers")
        console.log("Your number is too low, try higher numbers")
    }
    if (isNaN(guessNum)) {
        alert("This is not a number, Enter a number!!")
        console.log("This is not a number, Enter a number!!")
    }


}
console.log("Your guesses: ", keepGuess);

