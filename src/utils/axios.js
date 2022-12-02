// 1.封装axios的请求，返回重新封装数据格式
// 2.对错误的统一处理
import axios from "axios";
import errorHandle from "./errorHandle";
class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  // 获取axios的配置
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        "Content-Type": "application/json:charset=utf-8",
        timeout: 10000,
      },
    };
    return config;
  }
  // 设定拦截器
  interceptors(instance) {
    // 请求拦截器
    instance.interceptors.request.use(
      (config) => {
        // Do something before request is sent
        console.log("config:" + config);
        return config;
      },
      (error) => {
        // Do something with request error
        errorHandle(err);
        return Promise.reject(error);
      }
    );

    // 相应请求的拦截器
    instance.interceptors.response.use(
      (res) => {
        console.log("res is :" + res);
        if (res.status === 200) {
          return Promise.resolve(res.data);
        } else {
          return Promise.reject(res);
        }
      },
      (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        errorHandle(error);
        return Promise.reject(error);
      }
    );
  }
  //创建实例
  request(options) {
    const instance = axios.create();
    const newOptions = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance);
    return instance(newOptions);
  }
  get(url, config) {
    const options = Object.assign(
      {
        method: "get",
        url: url,
      },
      config
    );
    return this.request(options);
  }
  post(url, data) {
    return this.request({
      method: "post",
      url: url,
      data: data,
    });
  }
}

export default HttpRequest;
