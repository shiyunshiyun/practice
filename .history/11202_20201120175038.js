// const arr = [[1,2,3],[2,[3,4], 5]]
let arr = [1, [2, 3, [4, 5, [12, 3, "zs"], 7, [8, 9, [10, 11, [1, 2, [3, 4]]]]]]];

// 检测
const checkType = (arr) => {
  return Object.prototype.toString.call(arr).slice(8, -1);
}

let type = 
Array.prototype.myFlat =  function (arr, deth) {
  // console.log(arr, deth)
  let type = checkType(this)
  const newArr = [] // 保存拆分后的数组

  if (!Object.is(type, 'Array')) { // 当前对象非数组
    return
  }
  //遍历所有子元素并判断类型，若为数组则继续递归，若不为数组则直接加入新数组
  this.forEach(it => {

  })

}
console.log(flat(arr, 3))