import { get, post, put, deleteAxios } from "./http";
const api = {
  uploadImg: "/huitongyi/app/fileUpload.do",
};

const uploadImg = params => {
  return post(api.uploadImg, params);
};

export default {
  uploadImg,
};
