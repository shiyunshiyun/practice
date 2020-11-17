// 设计模式培训
// Promise异步编程
// ajax
// Promise.all()
// new Promise(resolve, reject) => {
//   console.log('aaa')
//   // Promise()
//   resolve('ok')
// }
new Promise((resolve, reject) => {
  console.log('aaa')
  // resolve('ok') 如果没有resolve()或reject调用就不会继续往下执行then()等等
})
.then(console.log('test'))
.catch(console.log('error'))

// 回调写法
ajax('http:www.xxx', options, ()=>{
  // 网络请求结果
  ajax('http://www.xxx', options, ()=> {
    // 网络请求结果
  })
})

// async await写法()
async function f() {
  console.log('1')
  const res1 = await ajax('http://ww.xxx')
  console.log('2')
  const res2 = await ajax('http://ww.xxx')
  console.log('3')
  const res3 = await ajax('http://ww.xxx')
  console.log('4')
  return true // Promise(true)
}
ajax.then(res => {
  console.log('5')
})
f()
// 执行结果： 15234
const log = console.log

// sort((a, b) => if(a > b)) // 如果没有if返回的是boolean, 有if就返回-1
// hasOwnProperty 判断字符串中是否含有自身的属性，而不判断原型链上

// reduce // 作业： splice和reduce用法整理
// js中的变量提升

// includes判断数组中是否含有某个元素

// 深拷贝
const obj = {a: 1, b: undefined}
const obj1 = Object.assign({}, obj) // 浅拷贝
const obj3 = JSON.parse(JSON.stringify(obj)) // 深拷贝，有值为undefined时拷贝不出来，深拷贝还有一个loash
log(objs) // {a: 1}

// push和pop返回数组的长度

// splice() 指返回被删除的元素
const arr = [1,2,3,4]
 const a = arr.splice(2,0,'a','b')
 log(a) // []
 log(arr) // [1,2, 'a', 'b', 3, 4]改变原数组
 const d = add.sort((a,b) => b-a)
//  b-a = -1时倒序，=1时正序
 log(d)
 log(arr)

//  map和forEach的遍历区别 ，map必须要返回值，forEach可以没有返回值，只是操作

// === 
// 两边的数据类型相等时， [] === [] {} === {} 
// [] = new Array()
// 如果两边数据类型不相等则永远不等，

// 作业1：js中的隐式类型转换
const obj4 = {}
obj4.valueOf = () => 0
obj4.toString = () => '0'
log(obj4 === 0) // true

const obj5 = {a: 1, b: 2}
log(Object.keys(obj))


// 发布订阅模式
const website = {
  emails: [],
  subscribe(email) {
    this.emails.push(email)
  },
  emit: function(args) {
    this.emails.forEach((email) => email(args))
  },
}
website.subscribe(() => {
  console.log('小梦')
})
website.subscribe(() => {
  console.log('小ha')
})
website.emit('js知识点')

name: String
