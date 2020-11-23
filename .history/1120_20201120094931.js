const obj1 = {name: 'hello'}
console.log(obj1)

//都是创建一个空对象，obj2开销小一点
const obj3 = {}
const obj2 = Object.create(null) // No properties

// 创建obj4继承obj1
const obj4 = Object.create(obj1)