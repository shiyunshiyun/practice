const customCards = require('./customCards.json')
const statusArr = [1, 7, 8, 2] // 当前四个状态才是有效的 第一优先级
const typeArr = ['year', 'month', 'day', 'count', 'supcard', 'charge'] //第二优先级
// endAt 是第三优先级

// 目的：找到最匹配的那个卡对象
function customCardsSearch(){
  const tempStatus = customCards.filter(it => statusArr.includes(it.status))
  // console.log('tempAtatus', tempAtatus)

  // 定义两个优先级排序
  const statusMap = {
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
  tempStatus.sort((a,b) => {
    const statusA = statusMap[a.status]
    const statusB = statusMap[b.status]
    const typeA = typeMap[a.cardType]
    const typeB = typeMap[b.cardType]
    if(statusA !== statusB) return statusA - statusB
    if(typeA !== typeB) return typeA - typeB
    // return new Date(a.endAt) - new Date(b.endAt)
    console.log(typeof new Date(a.endAt), typeof a.endAt)
    // return a.endAt - b.endAt
  })
  // return tempStatus[0]

}
console.log(customCardsSearch())