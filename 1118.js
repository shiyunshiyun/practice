// 防止按钮被用户多次点击
// 1、form中使用(submit) = onSave()
// 2、定义this.saveDisabled = true和this.saveDisabled = false
// 不管是请求成功或者失败，只要请求结束就将其设为false

// 防抖和节流
// 定时器，只有在不触发事件的2秒内没有事件发生就执行事件
function say() {
  console.log('say')
}
function  debounce(say, delay = 2000) {
  if(debounce.timer) clearTimeout(debounce.timer)
  debounce.timer = setTimeout(() =>{
    say()
    debounce.timer = false
  }, delay)
}