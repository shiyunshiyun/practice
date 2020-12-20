// xxx1: 'HelloWord' 
// var name = "Word";
// (function () {
//   if (typeof name === 'undefined') {
//     var name = 'Jack'
//     console.log('Goodbye' + name)
//   } else {
//     console.log('Hello' + name)
//   }
// })()
// 结果：GoodbyeJack

// 2: [2, 3, 4]
// console.log([1,2,3].map(x => x + 1))
// 结果：[2, 3, 4]

// 3: [1, [2,3,4,5]]
// const numbers = (a, ...b) => [a, b]
// console.log(numbers(1,2,3,4,5))
// // 结果：[ 1, [ 2, 3, 4, 5 ] ]

// 4: {foo: 'bar'}
// var foo = 'bar'
// console.log({foo})
// 结果：{ foo: 'bar' }

// xxx5: {1: undefined, 2: undefined}
// 5: undefined
// const f = (x,y) => ({x,y})
// console.log(f(1,2)) // 结果：{ x: 1, y: 2 }
// const f2 = (x,y) => {x,y}
// console.log(f2(1,2)) // 结果：undefined

// xxx6: {['b']: 'd'} ???
      // let a = 'b'
      // let c = {
      //   [a]: 'd'
      // }
      // console.log(c)
      // // 结果：{ b: 'd' }

// 7: {a: {b: 'hello'}}
var target = {a:{b:'c',d:'e'}}
var source = {a:{b:'hello'}}
// Object.assign({}, target, source)
Object.assign(target, source) //结果
// Object.assign(...target, ...source)
console.log(target)

// 8: {a: 3, b: 4}

// 9: 1+1* 1=2+2*2=6+6*3=24+24*4=120
      // const arr = [x => x*1, x => x*2, x => x*3, x => x*4]
      // console.log(arr.reduce((agg, el) => agg + el(agg), 1))
// xxx10: [1,7,{foo:3},['abc']]

// xxx11: 1,2,3,'a','b','c'
      // const arr = ['a', 'b', 'c'].map
      // const map = arr.bind([1,2,3])
      // map(el => console.log(el))

// 12: 'woof'

// 13: [{a: 1}, {a: 1}]

// 14: 1, 3
      // console.log(1)
      // new Promise(function (resolve, reject){
      //   reject(true)
      //   window.setTimeout(function (){
      //     resolve(false)
      //   }, 0)
      // }).then(function(){
      //   console.log(2)
      // }, function(){
      //   console.log(3)
      // })

// 15: true,true, false

// xxx16: 2, 1 ???
      // var x = 1
      // function func(x,y = function anonymous(){x=2}){
      //   var x = 3
      //   y()
      //   console.log(x)
      // }
      // func(5)
      // console.log(x) // 3, 1
      // 如果函数设置了默认值，就形成了三个作用域

// 17: 0, 1, 2, 3, 4 ???
      // for(var i = 0; i<5;i++) {
      //   setTimeout(function() {console.log(i)}, i*1000)
      // }

// 18: undefined

// 19:
      // const arr = [
      //   [1,2],
      //   [3,[4,5]],
      //   6
      // ]
      // const newArr = [] // 存放新数组
      // function flat(arr, depth=1){
      //   if(depth <= 0) {
      //     newArr.push(arr)
      //     return
      //   }
      //   arr.forEach(it => {
      //     if(Array.isArray(it)){
      //       depth--
      //       flat(it, depth)
      //     }else {
      //       newArr.push(it)
      //     }
      //   })
      // }
      // console.log(flat(arr, 2))

// 20: 
      // const obj1 = {
      //   a: {
      //     b: {
      //       c: 1,
      //       f: 4,
      //       g: {
      //         h: 5
      //       }
      //     },
      //     e: 3
      //   },
      //   d: 2
      // }

      // function deepGet(obj,path,defaultValue=100){
      //   if (!obj) return
      //   const tempPath = JSON.parse(JSON.stringify(path))
      //   if(obj.tempPath) {
      //     const value = obj.tempPath
      //     return value
      //   } else {
      //     return defaultValue
      //   }
      // }
      // console.log(deepGet(obj1, 'a.b.c', 100))

      // function isObject(obj){
      //   return typeof obj === 'object' && obj !== null
      // }
      // function deepGet(obj,path,defaultValue=100){
      //   if(!isObject(obj)) return obj
      //   const arr = path.split('.')
      //   for(let i = 0; i < arr.length;i++) {
      //     if(obj[arr[i]]) {
      //       return obj[arr[i]]
      //     }else {
      //       return defaultValue
      //     }
      //   }
      // }
      // console.log(deepGet(obj1, 'a.b.c', 100))


// 下午培训
// const http = require('http')
// const app = http.createServer((req, res) => {
//   if(req.url === '/script.js') {
//     res.setHeader('Last-Modified', new Date().toGMTString())
//     res.setHeader('Etag', 'xxx')

//   }
//   res.end('ok')
// })
// app.listen(3000, () => console.log('启动成功'))

// Expires --强缓存 --绝对时间，直接从缓存中取expires
// Cache-Control --强缓存 --相对时间(秒)，直接从缓存中取cache-control
// Last-Modified --协商缓存(下次浏览器会自动带上if-modified-since) (304) --服务器response header设置的 (Last-Modified和if-modified-since是成对使用的)last-modified和if-modified-since
// Etag --协商缓存(下次浏览器会自动带上IF-None-Match) --类似比较哈希值  --下次请求会带在request header中 (Etag和IF-None-Match是成对使用的)etag和if-none-match
// 参考链接：https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Expires

// 缓存的资源有的放在内存中(资源较小且请求频繁)，有的放在外存中

// console.log(new Date().toGMTString())
// console.log(new Date(Date.now() + 10 * 1000).toGMTString())

