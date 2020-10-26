import { get, post, put, deleteAxios } from "./http";
const api = {
  // uploadImg: "/huitongyi/app/fileUpload.do",
  getInfo: "config.aspx",
  getTask: "/api/mobile/app/GetAppList"
};

// const uploadImg = params => {
//   return post(api.uploadImg, params);
// };

const getInfo = params => {
  return get(api.getInfo, params)
}

const getTask = params => {
  return get(api.getTask, params)
}
export default {
  // uploadImg,
  getInfo,
  getTask
};
