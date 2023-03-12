// const allPossibleStr = [];
// let s = '';
// let str = 'pineapplepenapple';
// for (let i = 0; i < str.length; i++) {
//   a.push(str.substring(i))
// }
// const mapper = {};
// for (let i = 0; i < str.length; i++) {
//   // const posi = dist.filter((item) => str.substring(0, i + 1).startsWith(item));
//   // if (posi.length > 0 && posi.includes(str.substring(0, i + 1))) {
//   //   mapper[str.substring(0, i + 1)] = posi;
//   // }
//   str = str.substring(i);
//   console.log(str);
// }

// for (let i = 0; i < str.length; i++) {
//   if (mapper[str.substring(0, i + 1)]) {
//   }
// }

// if (s.length > 0) {
//   allPossibleStr.push(s);
// }

// for (let p = 0; p < posi.length; p++) {
//   s += posi[p];
// }
// str = str.substring(i + 1);
// i = 0;
const dist = ['apple', 'pen', 'applepen', 'pine', 'pineapple'];
let str = 'pineapplepenapple';
let mapper = {};
for (let i = 0; i < str.length; i++) {
  // mapper[str.slice(i)]
  console.log(str);

  const posi = dist.filter((item) => str.substring(0, i + 1).startsWith(item));
  if (posi.length > 0 && posi.includes(str.substring(0, i + 1))) {
    mapper[str.substring(0, i + 1)] = posi;
    str = str.substring(i + 1);
  }
}
console.log(mapper);
