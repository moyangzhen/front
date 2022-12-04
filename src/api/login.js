import axios from "@/utils/request";
/**
 * 获取验证码接口
 *@param {*} sid 唯一的标识
 */
const getCode = (sid) => {
  //axios.request({
  // method: 'get',
  // url:'/getCappcha'
  // })
  return axios.get("/public/getCaptcha", {
    params: {
      sid: sid,
    },
  });
};
/**
 * 找回密码接口
 * @param { }option 用户信息（邮箱，验证码)
 */
const forget = async (option) => {
  return axios.post("/forget", { ...option });
};

/**
 * 登陆接口
 * @param {*} loginInfo 用户登陆信息
 */
const login = (loginInfo) => {
  return axios.post("/login/login", {
    ...loginInfo,
  });
};
/**
 * 注册接口
 * @param{*} registInfo 用户注册信息
 */
const reg = (regInfo) => {
  return axios.post("/login/reg", {
    ...regInfo,
  });
};
export { getCode, forget, login, reg };
