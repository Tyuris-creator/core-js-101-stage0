function generateOdds(len) {
  let i = 1;
  const arr = new Array(len).fill(0).map((num) => {
    let changedVal = num;
    changedVal = i
    i += 2;
    return changedVal;
  });
  return arr;
}


console.log(generateOdds(10))