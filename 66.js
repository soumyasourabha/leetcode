const a = [9, 9, 9, 9];
const b = [1, 2, 3];
const res = (Number(a.join('')) + 1)
  .toString()
  .split('')
  .map((item) => Number(item));
console.log(res);
