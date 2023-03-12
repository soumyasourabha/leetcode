let str = 'USA';
let flag = true;

if (new RegExp(/[A-Z]/g).test(str[0])) {
  if (
    !(
      str
        .slice(1)
        .split('')
        .every((s) => new RegExp(/[A-Z]/g).test(s)) ||
      str
        .slice(1)
        .split('')
        .every((s) => new RegExp(/[a-z]/g).test(s))
    )
  ) {
    flag = false;
  }
} else {
  if (
    !str
      .slice(1)
      .split('')
      .every((s) => new RegExp(/[a-z]/g).test(s))
  ) {
    flag = false;
  }
}

if (flag) {
  console.log('Capital');
} else {
  console.log('Not a Capital');
}
