const obj1 = {name: 'hello'}
console.log(obj1)
// obj1._proto_

//都是创建一个空对象，obj2开销小一点
const obj3 = {} // 等价于const obj3 = new Object{}
const obj2 = Object.create(null) // No properties

// 创建obj4继承obj1
const obj4 = Object.create(obj1)
obj4.name = 'obj4'

const obj5 = Object.create(obj4)
obj5.name = 'obj5'

const obj6 = {name: 'obj6'}
Object.setPrototypeOf(obj6, obj5)


function Person1(name, age){
  this.name = name,
  this.age = age
}

const p1 = new Person1('小明', 12)

class PersonClass{
  constructor(name, age){
    this.name = name
    this.age = age
  }
  say(){
    console.log('说话阿')
  }
}
const pc1 = new PersonClass