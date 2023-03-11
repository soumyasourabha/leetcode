// Excel sheet
const str = 'AB';
let total = 0;
for (let i = str.length - 1; i >= 0; i--) {
  let a = str.charCodeAt(i) - 64;
  let b = Math.pow(26, str.length - i - 1);
  total += a * b;
}
console.log(total);

// AB
//  2
//  + 1 * 26

// ZY
//  25
//  26 * 26

//  aaa
//  1
//  1 * 26
//  1 *  26 * 26
