function isCreditCardNumber(ccn) {
  const array = ccn.toString().split('').reverse();
  let sumOfOddDigits = 0;
  for (let i = 0; i < array.length; i += 2) {
    sumOfOddDigits += Number(array[i]);
  }

  let sumOfEvenDigits = 0;
  for (let i = 1; i < array.length; i += 2) {
    let number = Number(array[i]) * 2;
    if (number >= 10) {
      number = Math.floor(number / 10) + (number % 10);
    }
    sumOfEvenDigits += number;
  }

  const total = sumOfEvenDigits + sumOfOddDigits;
  return total % 10 === 0;
}

console.log(isCreditCardNumber(371449635398431));
