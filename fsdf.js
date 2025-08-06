function toCsvText(arr) {
  return  arr.reduce((acc, i) => {
    const tab = '\n';
    i.forEach((num) => {
      acc.push(num);
    });
    acc.push(tab);
    return acc;
  }, []).join(",");
}

console.log(
  toCsvText([
    [0, 1, 2, 3, 4],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34],
  ])
);
