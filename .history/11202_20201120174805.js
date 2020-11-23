const arr = [[1,2,3],[2,[3,4], 5]]

// 检测
const checkType = (arr) => {
  return Object.prototype.toString.call(arr).slice(8, -1);
}

Array.prototype.myFlat =  function myFlat(arr, deth) {
  // console.log(arr, deth)
  let type = checkType(this)
  const newArr = [] // 保存拆分后的数组

  if (!Object.is(type, 'Array')) { // 当前对象非数组
    return
  }

}
console.log(flat(arr, 3))