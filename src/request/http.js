import Vue from "vue";
import axios from "axios";
import { Toast } from "vant"
// 设置全局axios的默认值
axios.defaults.timeout = 10000;
axios.defaults.baseURL = 'http://jfqapi.bktt1.top/';
// axios.defaults.baseURL = '/';
// axios.defaults.baseURL = process.env.NODE_ENV === "prod" ? "http://jfqapi.bktt1.top/" : "/";

// 拦截器
axios.interceptors.request.use(
  config => {
    let token = localStorage.getItem("token")
    config.headers = {
      "Content-Type": "application/json;charset=UTF-8",
      "Authorization": `Bearer ${token}`
      // "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6ImQwMTY4NGNlLTVjN2EtNzhlNS0zYWI3LTM5ZjgzZDc4NzliYyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwic3ViIjoiMSIsImp0aSI6IjQyZjgyMzk4LTY3YTAtNGZiZS1hM2MxLTI0YzZlNzU2YTk4YiIsImlhdCI6MTYwMzY3OTY1NiwibmJmIjoxNjAzNjc5NjU2LCJleHAiOjE5MTkwMzk2NTYsImlzcyI6IkpGUVdpbm5lciIsImF1ZCI6IkpGUVdpbm5lciJ9.CF_WohNeuRDQNc6wNeDrOeqwPreU0ir_jf637UWcrxI'
    };
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  response => {
    // if (response.result === 100) {
    //   router.push("/login").catch(err => {});
    //   return response;
    // } else {
    //   return response;
    // }
    return response;
  },
  error => {
    // 错误提醒
    if (error.response) {
			if (error.response.status === 500) {
				Toast(error.response)
			}
		}
    if (error.message.includes("timeout")) {
      Toast("请求超时");
    }
    return Promise.reject(error);
  }
);

// get请求
export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

// post请求
export const post = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const oPost = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, { params })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

// delete请求
export const deleteAxios = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, { params })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

// put 请求
export const put = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .put(url, params)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default axios;
