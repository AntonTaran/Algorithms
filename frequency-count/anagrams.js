// validAnagram('cinema', 'cinema') // true

const validAnagram = (str1, str2) => {
  let obj1 = {};

  if (str1.length !== str2.length) return false;

  for (let key of str1) {
    obj1[key] ? (obj1[key] += 1) : (obj1[key] = 1);
  }

  for (let key of str2) {
    if (!obj1[key]) {
      return false;
    } else {
      obj1[key] -= 1;
    }
  }

  return true;
};

console.log(validAnagram('anagram', 'naragam'));
