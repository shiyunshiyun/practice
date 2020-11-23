const arr = [[1,2,3],[2,[3,4], 5]]
const tem = arr.flat()
console.log(tem)
// function flat(arr, deth) {
//   // console.log(arr, deth)
//   const newArr = []
//   for(let i =0; i< deth; i++) {
//     Object.assign(newArr, [...arr])
//     console.log('newArr', newArr)
//   }
// }
// console.log(flat(arr, 3))