
function merge(a, b, arr) {
  let i = 0, j = 0, k = 0;
  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      arr[k] = a[i];
      i += 1
    } else {
      arr[k] = b[j];
      j += 1
    }
    k += 1
  }
  while (i < a.length) {
    arr[k] = a[i];
    i += 1
    k += 1
  }
  while (j < b.length) {
    arr[k] = b[j];
    j += 1
    k += 1
  }
  return arr
}
const list = [4, 2, 10, 5]
let x = 0

function mergeSort(arr) {
  if (arr.length > 1) {
    let e = arr.length
    let M = Math.floor((0 + e) / 2)
    let L = arr.slice(0, M)
    let R = arr.slice(M, e)
    mergeSort(L)
    mergeSort(R)
    return merge(L, R, arr)
  }
}
export function analyzeArray(arr){
  let min = mergeSort(arr)[0]
  let max = mergeSort(arr)[arr.length-1]
  let average = Math.round(arr.reduce((previous, current) => previous + current,0)/arr.length);
  let length = arr.length; 
  return {
    min:min,
    max:max,
    average:average,
    length:length
  } 
}
let arr = [51,63,32,23,31,55]
analyzeArray(arr)
