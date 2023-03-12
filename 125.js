let str = 'A man, a plan,a canal:    panama'
  .toLowerCase()
  .replace(/[^a-z]/gi, '');
let flag = true;
for (let i = 0; i < str.length; i++) {
  if (str[i] !== str[str.length - i - 1]) {
    flag = false;
    console.log('Not a Palindrome');
    break;
  }
}
if (flag) {
  console.log('Palindrome');
}
// let left = 0;
// let right = str.length - 1;
// let res = '';
// while (left < right) {
//   //compare
//   let l = String.fromCharCode(str[left]);
//   let r = String.fromCharCode(str[left]);
//   if (l < 97 && l > 122) {
//     left += 1;
//   } else if (r < 97 && r > 122) {
//     right -= 1;
//   } else if (str[left] !== str[right]) {
//     console.log(str[left]);
//     console.log(str[right]);
//     res = 'Not a palindrome';
//     break;
//   } else {
//     left += 1;
//     right -= 1;
//   }
// }

// if (res === '') {
//   res = 'palindrome';
// }
// console.log(res);
