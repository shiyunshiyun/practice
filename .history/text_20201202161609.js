// 写个脚本，算出./justgym.json文件中有多少数据no是重复的，并算出是哪些
const employee = require("./justgym.json")
const kv = {},
  arr = new Set()
const len = employee.length
for (let i = 0; i < len; i++) {
  const tem = employee[i]
  const { id, no } = tem
  if (no in kv) {
    arr.add(no)
  } else {
    kv[no] = 1
  }
}
console.log(arr)
console.log(arr.size)



var str = "Hello World"
const tem = str.substr(2,3)
const temp = str.substr(2)
console.log('str', str) // Hello World
console.log('tem', tem) // llo
console.log('temp', temp) // llo World