const arr = [
  [1,2,3],
  [0,[3,[7,8],4], 5],
  6,9
]

let newArr = [] // 存放新的数组
function flat(arr, deth) {
  if(deth <= 0) return arr
  arr.forEach(it => {
    if(Array.isArray(it)) {
      deth--
      flat(it, deth)
    }else {
      newArr.push(it)
    }
  })
  return newArr
}
console.log(flat(arr, Infinity))








// 检测
// const checkType = (arr) => {
//   return Object.prototype.toString.call(arr).slice(8, -1);
// }

// // let type = typeof arr
// // console.log(typeof arr) // object

// Array.prototype.myFlat =  function (arr, deth) {

//   let type = checkType(this)
//   const newArr = [] // 保存拆分后的数组

//   if (!Object.is(type, 'Array')) { // 当前对象非数组
//     return
//   }
//   //遍历所有子元素并判断类型，若为数组则继续递归，若不为数组则直接加入新数组
//   this.forEach(it => {
//     let secondType = checkType(it)
//     if(!Object.is(secondType, 'Array')) {
//       deth--

//     }
//   })

// }
// console.log(flat(arr, 3))