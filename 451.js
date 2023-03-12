const str = 'mississippi';
const mapper = {};
const res = [];
for (let i = 0; i < str.length; i++) {
  if (!mapper[str[i]]) {
    mapper[str[i]] = 1;
  } else {
    mapper[str[i]] += 1;
  }
}

for (let i in mapper) {
  const data = i.repeat(mapper[i]);
  res[data.length] = res[data.length] ? res[data.length] + data : data;
}
console.log(res.reverse().join(''));
