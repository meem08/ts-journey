const rate = 1332
function nariaToUsd(amount) {
   return amount/rate 
}
function usdToNaria(amount) {
    return amount*rate
}
function celsiusToFahrenheit(celsius) {
   return celsius *9/5 + 32
}
function kgToPounds(kg) {
    return kg * 2.20462
}
console.log(celsiusToFahrenheit(0))
console.log(celsiusToFahrenheit(100))
console.log(usdToNaria(nariaToUsd(5000)))