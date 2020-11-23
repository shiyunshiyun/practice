const obj1 = {name: 'hello'}
console.log(obj1)


//都是创建一个空对象，obj2开销小一点
const obj3 = {}
const obj2 = Object.create(null) // No properties

// 创建obj4继承obj1
const obj4 = Object.create(obj1)
obj4.name = 'obj4'

const obj5 = Object.create(obj4)
obj5.name = 'obj5'

const obj6 = {name: 'obj6'}
Object.setPrototypeOf(obj6, obj5)
