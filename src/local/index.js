import { Validator } from "vee-validate";
const dictionary = {
  "zh-CN": {
    messages: {
      required: (filed) => "请输入" + filed,
      email: () => "请输入正确的邮箱格式",
      min: () => "不符合最小长度要求",
      length: (filed, args) => filed + "长度要求" + args + "位",
    },
    attributes: {
      email: "邮箱",
      password: "密码",
      name: "账号",
      code: "验证码",
    },
  },
};
Validator.localize(dictionary);
// export default dictionary;
