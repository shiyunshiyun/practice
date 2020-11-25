const tasks = [
  {
    id: '1',
    name: '残值',
    type: 'accrual',
    company: '5bf50760facb21000721eaec',
    createdAt: '2020-09-22T08:50:45.561+08:00',
  },
  {
    id: '2',
    name: '会员资料',
    type: 'custom',
    company: '5bf50760facb21000721eaec',
    createdAt: '2020-09-22T08:58:23.653+08:00',
  },
  {
    id: '3',
    name: '考勤记录',
    type: 'attendance',
    company: '5dde3a850a824e0008f8b05c',
    createdAt: '2020-09-22T08:58:23.653+08:00',
  },
  {
    id: '4',
    name: '考勤记录',
    type: 'attendance',
    company: '5bf50760facb21000721eaec',
    createdAt: '2020-10-12T14:17:18.170+08:00',
  },
  {
    id: '5',
    name: '私教合同',
    type: 'lessonOrder',
    company: '5bf50760facb21000721eaec',
    createdAt: '2020-10-15T23:25:45.116+08:00',
  },
  {
    id: '6',
    name: '潜客资料',
    type: 'latent',
    company: '5bf50760facb21000721eaec',
    createdAt: '2020-10-15T23:26:05.847+08:00',
  },
  {
    id: '7',
    name: '考勤记录',
    type: 'attendance',
    company: '5bf50760facb21000721eaec',
    createdAt: '2020-10-15T23:40:20.074+08:00',
  },
  {
    id: '8',
    name: '考勤',
    type: 'attendance',
    company: '5bf50760facb21000721eaec',
    createdAt: '2020-10-19T15:07:04.217+08:00',
  },
]

async function mockAsyncTask(options) {
  return new Promise((resolve, reject) => {
    console.log(`开始处理任务${options.id}`)
    setTimeout(() => {
      console.log(`任务${options.id}已完成`)
      resolve('done')
    }, Math.random() * 10000)
  })
}

const handlers = {
  accrual: mockAsyncTask, // 残值
  custom: mockAsyncTask, // 会员
  latent: mockAsyncTask, // 潜客
  customCard: mockAsyncTask, // 会籍合同
  lessonOrder: mockAsyncTask, // 私教合同
  entrance: mockAsyncTask, // 入场记录
  portrait: mockAsyncTask, // 画像
  attendance: mockAsyncTask, // 考勤
}

async function runTasks(tasks, parallel = 3) {
  const len = tasks.length
  console.log('len', len)
  if(len <= parallel) {mockAsyncTask(tasks)}
  else{
    // mockAsyncTask(tasks[0])
    // mockAsyncTask(tasks[1])
    // mockAsyncTask(tasks[2])
    // if('已完成'){
    // }
  }
  
  
}

runTasks(tasks)
