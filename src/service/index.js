import axios from "axios";

const service = axios.create({});

// todo:请求拦截
service.interceptors.request.use((config) => {
  config.headers["token"] = 123;
  return config;
});

// todo:响应拦截

service.interceptors.response.use((response) => {
  console.log(response);
});

export default service;
