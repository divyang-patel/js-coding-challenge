/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  if (s1.length === s2.length) {
    let diff = '';
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) 
        diff += s1[i] + s2[i];
    }
    return diff.length <= 4 && diff[0] === diff[3] && diff[1] === diff[2];
  }
  return false;
};

console.log(areAlmostEqual('aa','ac'));
