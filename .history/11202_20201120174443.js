const arr = [[1,2,3],[2,[3,4], 5]]

// 检测
const checkType = (arr) => {
  return Object.prototype.toString.call(arr).slice(8, -1);
}

function myFlat(arr, deth) {
  // console.log(arr, deth)
  let 
  const newArr = []
  for(let i =0; i< deth; i++) {
    Object.assign(newArr, [...arr])
    console.log('newArr', newArr)
  }
}
console.log(flat(arr, 3))