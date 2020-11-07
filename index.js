function iterativeLog(arr) {
  arr.forEach((element, index) => console.log(`${index}: ${element}`));
}

function iterate(myFunc) {
  let arr = ['JJO', 'SC', 'JSJ', 'JCJ'];
  arr.forEach(myFunc);
  return arr;
}

function doToArray(element, index, array) {
  array[index] = `${index + 1}: ${element}`
}