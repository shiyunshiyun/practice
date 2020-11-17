const customCards = require('./customCards.json')
const statusArr = [1, 7, 8, 2] // status 是第一优先
const typeArr = ['year', 'month', 'day', 'count', 'supcard', 'charge'] // cardType 是第二优先级

// endAt 是第三优先级

function findMatchedCard() {
  // 实现查找逻辑，并返回最匹配的那张卡
  const tempArr = customCards.filter(it => statusArr.includes(it.status)) // 过滤掉数组中的有效的四个状态
  const statusMap = { // 自定义状态排序优先级
    '1': 1,
    '7': 2,
    '8': 3,
    '2': 4,
  }
  const typeMap = {
    'year': 1, 
    'month': 2, 
    'day': 3, 
    'count': 4, 
    'supcard': 5, 
    'charge': 6,
  }
  tempArr.sort((a,b) => {
    const statusA = statusMap[a.status]
    const statusB = statusMap[b.status]
    const typeA = typeMap[a.cardType]
    const typeB = typeMap[b.cardType]
    if(statusA !== statusB) return statusA - statusB
    if(typeA !== typeB) return typeA - typeB
    return new Date(a.endAt) - new Date(b.endAt)
  })
  return tempArr[0]
}

console.log(findMatchedCard())

// 考察sort()