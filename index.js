function iterativeLog(arr) {
  arr.forEach((item, index) => console.log(`${index}: ${element}`));
}

function iterate(myFunc) {
  let arr = ['JJO', 'SC', 'JSJ', 'JCJ'];
  arr.forEach(myFunc);
  return arr;
}

function doToArray(item, index, array) {
  array[index] = `${index + 1}: ${element}`
}