function reverseString(str) {
  const arr = str.split("");
  console.log(arr)
  const newArr = [];
  const lastIndex = arr.length - 1;
  console.log(lastIndex)
  for (let i = lastIndex; i >= 0; i -= 1) {
    console.log(i)
    newArr.push(arr[i]);
  }
  return newArr;
}



console.log(reverseString("The quick brown fox jumps over the lazy dog"))
