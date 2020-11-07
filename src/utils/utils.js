
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
const getFormeDate = (time) => {
  let data = time.substr(0, 19)
  let st = new Date(Date.parse(data))
  let stY = st.getFullYear()
  let stM = st.getMonth()+1
  let stD = st.getDate()
  let stH = st.getHours()
  let stMs = st.getMinutes()
  let stS = st.getSeconds()
  let fmt = `${stY}-${stM}-${stD} ${stH}:${stMs}:${stS}`
  return fmt;
}

const getTime = (time) => {
  let st = new Date(time)
  let o = {
    'stH': st.getHours(),
    'stM': st.getMinutes(),
  };
  for (let k in o) {
    if(o[k] == 0) {
      o[k] = "00"
    }
  }
  return `${o.stH}:${o.stM}`
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

const tFixed = (num) => {
  if(num != undefined && num != null && num != "") {
    if(num == 0) {
      return 0.00
    } else {
      return num.toFixed(2)
    }
  } else {
    return 0.00
  }
}
export {
  filterGoingTask,
  filterStandardTask,
  filterTask,
  getFormeDate,
  getTime,
  getTimeFlag,
  taskNameTranslate,
  taskNumTranslate,
  tFixed
}