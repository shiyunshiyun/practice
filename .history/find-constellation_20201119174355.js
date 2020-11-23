// 星座
const CONSTELLATION = []
  白羊'座: { from: '3.21', to: '4.19' }, // 白羊座 3.21 -- 4.19
  金牛座: { from: '4.20', to: '5.20' }, // 金牛座  4.20 -- 5.20
  双子座: { from: '5.21', to: '6.21' }, // 双子座 5.21 -- 6.21
  巨蟹座: { from: '6.22', to: '7.22' }, // 巨蟹座 6.22 -- 7.22
  狮子座: { from: '7.23', to: '8.22' }, // 狮子座 7.23 -- 8.22
  处女座: { from: '8.23', to: '9.22' }, // 处女座 8.23 -- 9.22
  天秤座: { from: '9.23', to: '10.23' }, // 天秤座 9.23 -- 10.23
  天蝎座: { from: '10.24', to: '11.22' }, // 天蝎座 10.24 -- 11.22
  射手座: { from: '11.23', to: '12.21' }, // 射手座 11.23 -- 12.21
  摩羯座: { from: '12.22', to: '1.19' }, // 摩羯座 12.22 -- 1.19
  水瓶座: { from: '1.20', to: '2.18' }, // 水瓶座 1.20 -- 2.18
  双鱼座: { from: '2.19', to: '3.20' }, // 双鱼座 2.19 -- 3.20
]
// 辅助工具箱
const utils = {
  getYearMonthDay(date) {
    date = new Date(date)
    const year = date.getFullYear(),
      month = date.getMonth() + 1,
      day = date.getDate()
    return { year, month, day }
  },
}

function findConstellation(birthday = '1995-05-05') {
  // 实现星座查找逻辑，例如输入1995-05-05得到金牛座TAURUS
  // const da = new Date(birthday)
  // console.log(da)
  // console.log(utils.getYearMonthDay(birthday))
  const mydate = utils.getYearMonthDay(birthday)
  const temp = mydate.month+ '.'+ mydate.day
  // console.log(temp)
  // const len = CONSTELLATION.length
  // for(let i = 0; i< len; i++) {
  //   console.log(CONSTELLATION[i])
  // }
}

console.log(findConstellation('1995-05-05'))
