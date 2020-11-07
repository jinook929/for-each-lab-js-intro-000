function iterativeLog(arr) {
  arr.forEach((element, index) => console.log(`${index}: ${element}`));
}

function iterate(element, index) {
  let arr = ['JJO', 'SC', 'JSJ', 'JCJ'];
  arr[index] = `${index + 1}: ${element}`
  return arr;
}

function doToArray(array, myFunc) {
  array.forEach(myFunc);
}