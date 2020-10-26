const filterGoingTask = (list) => {
  let goingTask = list.filter((item)=> {
    return item.isare == "1"
  })
  return goingTask
}

const filterOtherTask = (list) => {
  let otherTask = list.filter((item)=> {
    return item.isare != "1"
  })
  return otherTask
}

const taskNameTranslate = (str) => {
  let newStr = str.slice(0, 1) + "***"
  return newStr
}

const taskNumTranslate = (num) => {
  if(Number(num) > 100) {
    return "100+"
  } else {
    return num
  }
}

export {
  filterGoingTask,
  filterOtherTask,
  taskNameTranslate,
  taskNumTranslate
}