import axios from "axios";
import store from "@store";
const HTTP_ERR_UNAUTHORIZED = "13006";
const service = axios.create({});
import { getToken } from "../utils/auth";

let isLogout = false;
function loginOut() {
  if (isLogout) {
    return;
  }
  isLogout = true;
  store.dispatch("logOut");
}

// todo:请求拦截
service.interceptors.request.use((config) => {
  const TOKEN = getToken();
  TOKEN ? (config.headers["token"] = TOKEN) : "";
  return config;
});

// todo:响应拦截
service.interceptors.response.use(
  (response) => {
    const { code } = response.data;
    code === HTTP_ERR_UNAUTHORIZED ? loginOut() : "";
    return response;
  },
  (error) => {
    if (error.response.status === HTTP_ERR_UNAUTHORIZED) {
      loginOut();
      return;
    }
    return Promise.reject(error);
  }
);

export default service;
