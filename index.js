function iterativeLog(arr) {
  arr.forEach((item, index) => console.log(`${index}: ${element}`));
}

function iterate(item, index, array) {
  let arr = [];
  arr[index] = `${index}: ${element}`
  return arr;
}

function iterativeLog(arr, myFunc) {
  arr.forEach(myFunc);
}