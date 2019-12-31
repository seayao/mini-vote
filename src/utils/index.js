// 生成唯一字符串
export const createUniqueString = () => {
  const timestamp = +new Date() + ''
  const randomNum = parseInt((1 + Math.random()) * 65536) + ''
  return (+(randomNum + timestamp)).toString(32)
}

// 时间戳转日期
export const formatTimestamp = (timestamp = new Date().getTime()) => {
  const date = new Date(timestamp)
  const y = date.getFullYear()
  const m = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  const d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  const hh = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  const mm = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  return y + '-' + m + '-' + d + ' ' + hh + ':' + mm
}

// 格式化当前日期
export const formatDate = (val = 0) => {
  const date = new Date()
  const y = date.getFullYear()
  const m = date.getMonth()
  const d = parseInt(date.getDate()) + parseInt(val)
  const n_date = new Date(y, m, d)
  const n_y = n_date.getFullYear()
  const n_m = n_date.getMonth() + 1 < 10 ? '0' + (n_date.getMonth() + 1) : n_date.getMonth() + 1
  const n_d = n_date.getDate() < 10 ? '0' + n_date.getDate() : n_date.getDate()
  return n_y + '-' + n_m + '-' + n_d
}

// 格式化当前时间
export const formatTime = (date = new Date()) => {
  const hh = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  const mm = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  return hh + ':' + mm
}
