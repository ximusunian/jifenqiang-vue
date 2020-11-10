import axios from "axios";
import { get, post, oPost, put, deleteAxios } from "./http";
import Qs from "qs"
const api = {
  // -----------------用户相关接口-------------------------
  getUserInfo: "/api/mobile/user/Get",                        // 获取用户信息
  getTodayCount: "/api/mobile/app/GetTodayCount",             // 我的页面获取收益数据
  getAmountDetailList: "/api/mobile/app/GetAmountDetailList", // 获取账户明细
  isBindWechat: "/api/mobile/user/IsBindWechat",              // 判断是否绑定微信
  isBindMobile: "/api/mobile/user/IsBindMobile",              // 判断是否绑定手机号
  getInvitePageCount: "/api/mobile/app/GetInvitePageCount",   // 邀请页面
  requestPay: "/api/mobile/app/RequestPay",                   // 提现
  getAliPayInfo: "/api/mobile/app/AlipayInfo",                // 获取绑定的支付宝信息

  // ------------------任务相关接口-------------------------
  getTask: "/api/mobile/app/GetAppList",                      // 获取任务列表
  snatchAppTask: "/api/mobile/app/SnatchAppTask",             // 抢夺任务
  abortSession: "/api/mobile/app/ObortSession",               // 中止任务
  getTaskContext: "/api/mobile/app/GetTaskContext",           // 获取任务的操作步骤
  getInProgressTask: "/api/mobile/app/GetInProgressTask",     // 获取正在执行中的任务
  startAppTask: "/api/mobile/app/StartAppTask",               // 开始任务
  finishTask: "/api/mobile/app/FinishTask",                   // 完成任务
  saveFinishKey: "/api/mobile/app/SaveFinishKey",             // 保存用户已完成的任务

  // -------------------绑定相关接口-------------------------
  sendCaptchaCode: "/api/mobile/user/SendCaptchaCode",        // 发送短信验证码
  bindMobile: "/api/mobile/user/BindMobile",                  // 绑定手机号码

  // -------------------配置相关接口-------------------------
  getShareInfo: "/api/mobile/app/GetShareInfo",               // 获取分享数据配置
  getInstallUrl: "/api/NonAuth/InstallUrl",                      // 安装地址

  getUDID: "http://localhost:12345/getUDID",
};

// const uploadImg = params => {
//   return post(api.uploadImg, params);
// };

const getUserInfo = params => {
  return get(api.getUserInfo, params)
}

const getTodayCount = params => {
  return get(api.getTodayCount, params)
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

const getInvitePageCount = params => {
  return get(api.getInvitePageCount, params)
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

const saveFinishKey = params => {
  return axios({
    url: api.saveFinishKey,
    method: "post",
    params: params
  })
}

const sendCaptchaCode = params => {
  return axios({
    url: api.sendCaptchaCode,
    method: "post",
    params: params
  })
}

const bindMobile = params => {
  return post(api.bindMobile, params)
}

const getShareInfo = params => {
  return get(api.getShareInfo, params)
}

const requestPay = params => {
  return post(api.requestPay, params)
}

const getAliPayInfo = params => {
  return get(api.getAliPayInfo, params)
}

const getInstallUrl = params => {
  return get(api.getInstallUrl, params)
}

const getUDID = params => {
  return post(api.getUDID, params)
}

export default {
  getUserInfo,
  getTodayCount,
  getAmountDetailList,
  isBindMobile,
  isBindWechat,
  getInvitePageCount,
  getAliPayInfo,

  getTask,
  snatchAppTask,
  abortSession,
  getTaskContext,
  getInProgressTask,
  startAppTask,
  finishTask,
  saveFinishKey,

  sendCaptchaCode,
  bindMobile,
  getShareInfo,

  requestPay,
  getInstallUrl,

  getUDID,
};
