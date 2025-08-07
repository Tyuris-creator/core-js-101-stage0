function propagateItemsByPositionIndex(arr) {
  let count = 1;
  return arr.reduce((acc, el) => {
    console.log(typeof el)
    const elements = el.repeat(count).split('');
    count += 1;
    acc.push(...elements);
    return acc;
  }, []);
}
console.log(propagateItemsByPositionIndex(['a', 'b']));


console.log([].length)