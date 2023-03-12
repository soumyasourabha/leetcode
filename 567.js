/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  return (
    new RegExp(s1, 'ig').test(s2) ||
    new RegExp(s1.split('').reverse().join(''), 'ig').test(s2)
  );
};
