const dayjs = require('dayjs')
export { dayjs }
export function times(t, sta) {
  let d = dayjs(t)
  if (sta === 1) {
    return `${d.format('YYYY年MM月DD日')}`
  } else if (sta === 2) {
    return `${d.format('YYYY年MM月DD日HH时')}`
  } else if (sta === 3) {
    return `${d.format('YYYY年MM月DD日 HH时mm分')}`
  } else if (sta === 4) {
    return `${d.format('YYYY年MM月')}`
  } else {
    return `${d.format('YYYY-MM-DD HH:mm:ss')}`
  }
}
export function date(quantum) {
  let d = {
    date: [],
    day: {
      d: [],
      sta: []
    },
    quarter: []
  }
  let M = dayjs().month() + Number(quantum)
  let quarter = Math.floor(dayjs().set('month', M).month() / 3 + 1)
  let qua1 = quarter * 3 - 2
  let qua2 = quarter * 3
  let quaY = dayjs().set('month', M).year()
  let quaDay = dayjs().set('month', (qua2 - 1)).set('date', 1).daysInMonth()
  for (let n = 0; n < 3; n++) {
    let day = []
    let sta = []
    let q = Number(qua1) + n
    for (let i = 0; i < dayjs(`${quaY}-${q}-01`).$W; i++) {
      day.push('')
      sta.push('')
    }
    for (let j = 1; j <= dayjs(`${quaY}-${q}-01`).daysInMonth(); j++) {
      day.push(j)
    }
    d.day.d.push(day)
    d.day.sta.push(sta)
  }
  if (quantum === 0) {
    d.date.push(quaY)
    d.date.push(String(dayjs().month() + 1))
    d.date.push(dayjs().date())
  } else {
    d.date.push(quaY)
  }
  d.quarter.push(`${quaY}-${qua1}-01`)
  d.quarter.push(`${quaY}-${qua2}-${quaDay}`)
  return d
}