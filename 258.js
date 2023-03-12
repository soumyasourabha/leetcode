let s = 20519;

// 2 + 0 + 5 + 1 + 9 = 17
// 17 => 1 + 7 = 8
function singleDigit(d) {
  //base cond
  if (d < 10) {
    console.log(d);
  }

  d = d
    .toString()
    .split('')
    .reduce((acc, curr) => parseInt(acc) + parseInt(curr), 0);
  if (d > 10) {
    singleDigit(d);
  } else {
    console.log(d);
  }
}

singleDigit(s);
