function getDigitalRoot(num) {
  let sum = 0;
  let iterator = num
  while (iterator > 0) {
    sum += iterator % 10;
    iterator = Math.floor(iterator / 10);
  }
  iterator = 0
  if (sum > 9) {
    iterator = sum;
    sum = 0;
    while (iterator > 0) {
      sum += iterator % 10;
      iterator = Math.floor(iterator / 10);
    }
  }
  return sum;
}



console.log(getDigitalRoot(23456))
