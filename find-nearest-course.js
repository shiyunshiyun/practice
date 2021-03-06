const schedules = require('./schedules.json')
let begin =  '1000-11-18T08:29:17.355Z' //将begin定义成变量，因为后期要重新赋值

function findNearestCourse(date = new Date('2020-11-17T08:10:36.120+08:00')) {
  // 实现查找逻辑，并返回找到的排课
  const newArr = [] // 组装成一个新的数组
  schedules.forEach(it => {
    newArr.push({
      'id': it.id,
      'startAt': begin,
      'endAt': it.endAt
    })
    begin = it.endAt
  })
  const resultArr = newArr.find(it => new Date(it.startAt) <= date && new Date(it.endAt) >= date)
  return resultArr.id
}
// findNearestCourse()
console.log(findNearestCourse())
