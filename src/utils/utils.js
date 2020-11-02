
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


const getTimeFlag = (time) => {
  let st = new Date(time)
  let nt = new Date()
  let stY = st.getFullYear()
  let ntY = nt.getFullYear()
  let stM = st.getMonth()
  let ntM = nt.getMonth()
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
  getTimeFlag,
  taskNameTranslate,
  taskNumTranslate
}