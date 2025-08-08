function swapHeadAndTail(arr) {
  const len = arr.length;
  const half = len / 2;
  const array1 = arr.slice(Math.ceil(half), len);
  const array2 = arr.slice(0, Math.ceil(half));
  return [...array1, ...array2];
}

console.log(swapHeadAndTail([ 1]))


console.log([12,12,3,1,2,6,4,3].slice(-3))