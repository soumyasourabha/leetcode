// find all duplicate element in an array
const arr = [4, 1, 2, 7, 4, 2, 3, 3];
const freqMap = {};
const res = [];
// 0(M+N)
for (let i = 0; i < arr.length; i++) {
  if (!freqMap[arr[i]]) {
    freqMap[arr[i]] = 1;
  } else {
    freqMap[arr[i]] += 1;
  }
}

for (let i in freqMap) {
  if (freqMap[i] > 1) {
    res.push(Number(i));
  }
}
console.log(res);
