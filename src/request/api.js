import { get, post, put, deleteAxios } from "./http";
import Qs from "qs"
const api = {
  // -----------------用户相关接口-------------------------
  getUserInfo: "/api/mobile/user/Get",                        // 获取用户信息
  isBindWechat: "/api/mobile/user/IsBindWechat",              // 判断是否绑定微信
  isBindMobile: "/api/mobile/user/IsBindMobile",              // 判断是否绑定手机号

  // ------------------任务相关接口-------------------------
  getTask: "/api/mobile/app/GetAppList",                      // 获取任务列表
  snatchAppTask: "/api/mobile/app/SnatchAppTask",             // 抢夺任务

  
};

// const uploadImg = params => {
//   return post(api.uploadImg, params);
// };

const getUserInfo = params => {
  return get(api.getUserInfo, params)
}

const getTask = params => {
  return get(api.getTask, params)
}

const snatchAppTask = params => {
  return get(api.snatchAppTask, params)
}

const isBindMobile = params => {
  return get(api.isBindMobile, params)
}

const isBindWechat = params => {
  return get(api.isBindWechat, params)
}

export default {
  getUserInfo,
  isBindMobile,
  isBindWechat,

  getTask,
  snatchAppTask,
};
