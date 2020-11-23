const arr = [[1,2,3],[2,[3,4], 5]]

function flat(arr, deth) {
  // console.log(arr, deth)
  const newArr = []
  for(let i =0; i< deth; i++) {
    // newArr = [...arr]
    console.log(arr)
    Object.assign(newArr, [...arr])
    console.log('newArr', newArr)
  }
}
console.log(flat(arr, 3))