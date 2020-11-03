
/**
 * @name: filterGoingTask
 * @msg: 过滤进行中的任务
 * @Author: ximusunian
 * @param { Array } list 需要过滤的数据
 * @return { Object } {}
 */
const filterGoingTask = (list) => {
  let goingTask = list.filter((item) => {
    return item.isAre == "1"
  })
  if (goingTask.length == 0) {
    return {}
  }
  return goingTask[0]
}

/**
 * @name: filterStandardTask
 * @msg: 过滤出快速任务
 * @Author: ximusunian
 * @param { Array } list 需要过滤的数据
 * @return { Array } []
 */
const filterStandardTask = (list) => {
  let standardTask = list.filter((item) => {
    return item.isAre != "1"
  })
  return standardTask
}

/**
 * @name: filterTask
 * @msg: 过滤任务
 * @Author: ximusunian
 * @param { String } type  过滤类型
 * @param { Array } list  需要过滤的数据
 * @param { Function } fn 回调
 * @return { Array } []
 */
const filterTask = (type, list, fn) => {
  let data = list.filter(item => {
    return item.appMenu == type
  })
  let result
  if (fn) {
    result = fn(data)
  } else {
    result = data
  }
  return result
}

/**
 * @name: getFormeDate
 * @msg: 日期转换
 * @Author: ximusunian
 * @param {String} time 时间
 * @param {String} fmt  需要转换的格式
 * @return {String} 转换之后的时间
 */
const getFormeDate = (time, fmt) => {
  let st = new Date(time)
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (newDate.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': st.getMonth() + 1,
    'd+': st.getDate(),
    'h+': st.getHours(),
    'm+': st.getMinutes(),
    's+': st.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length));
    }
  }
  return fmt;
}

/**
 * @name: getTimeFlag
 * @msg: 转化时间标签
 * @Author: ximusunian
 * @param { String } time
 * @return { String } 时间标签
 */
const getTimeFlag = (time) => {
  let st = new Date(time)
  let nt = new Date()
  let stY = st.getFullYear()
  let ntY = nt.getFullYear()
  let stM = st.getMonth()+1
  let ntM = nt.getMonth()+1
  let stD = st.getDate()
  let ntD = nt.getDate()
  if(stY == ntY && stM == ntM && stD == ntD ) {
    return "今天"
  } else if(Number(stD)-Number(ntD) == 1) {
    return "明天"
  } else if(Number(stD)-Number(ntD) > 1){
    return "后天"
  } else {
    return `${stM}-${stD}`
  }
}

const taskNameTranslate = (str) => {
  let newStr = str.slice(0, 1) + "***"
  return newStr
}

const taskNumTranslate = (num) => {
  if (Number(num) > 100) {
    return "100+"
  } else {
    return num
  }
}

export {
  filterGoingTask,
  filterStandardTask,
  filterTask,
  getFormeDate,
  getTimeFlag,
  taskNameTranslate,
  taskNumTranslate
}