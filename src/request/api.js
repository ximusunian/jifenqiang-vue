import { get, post, put, deleteAxios } from "./http";
import Qs from "qs"
const api = {
  // -----------------用户相关接口-------------------------
  getUserInfo: "/api/mobile/user/Get",                        // 获取用户信息
  getAmountDetailList: "/api/mobile/app/GetAmountDetailList", // 获取账户明细
  isBindWechat: "/api/mobile/user/IsBindWechat",              // 判断是否绑定微信
  isBindMobile: "/api/mobile/user/IsBindMobile",              // 判断是否绑定手机号

  // ------------------任务相关接口-------------------------
  getTask: "/api/mobile/app/GetAppList",                      // 获取任务列表
  snatchAppTask: "/api/mobile/app/SnatchAppTask",             // 抢夺任务
  abortSession: "/api/mobile/app/ObortSession",               // 中止任务
  getTaskContext: "/api/mobile/app/GetTaskContext",           // 获取任务的操作步骤
  getInProgressTask: "/api/mobile/app/GetInProgressTask",     // 获取正在执行中的任务
  startAppTask: "/api/mobile/app/StartAppTask",               // 开始任务
  finishTask: "/api/mobile/app/FinishTask",                   // 完成任务


  test: "/getIdfa"
  
};

// const uploadImg = params => {
//   return post(api.uploadImg, params);
// };

const getUserInfo = params => {
  return get(api.getUserInfo, params)
}

const getAmountDetailList = params => {
  return get(api.getAmountDetailList, params)
}

const isBindMobile = params => {
  return get(api.isBindMobile, params)
}

const isBindWechat = params => {
  return get(api.isBindWechat, params)
}

const getTask = params => {
  return get(api.getTask, params)
}

const snatchAppTask = params => {
  return get(api.snatchAppTask, params)
}

const abortSession = params => {
  return post(api.abortSession, params)
}

const getTaskContext = params => {
  return get(api.getTaskContext, params)
}

const getInProgressTask = params => {
  return get(api.getInProgressTask, params)
}

const startAppTask = params => {
  return post(api.startAppTask, params)
}

const finishTask = params => {
  return get(api.finishTask, params)
}

const test = params => {
  return post(api.test, params)
}

export default {
  getUserInfo,
  getAmountDetailList,
  isBindMobile,
  isBindWechat,

  getTask,
  snatchAppTask,
  abortSession,
  getTaskContext,
  getInProgressTask,
  startAppTask,
  finishTask,
};
