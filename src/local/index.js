import { Validator } from "vee-validate";
const dictionary = {
  "zh-CN": {
    messages: {
      required: (filed) => "请输入" + filed,
      email: () => "请输入正确的邮箱格式",
    },
    attributes: {
      email: "邮箱",
      password: "密码",
      name: "账号",
    },
  },
};
Validator.localize(dictionary);
// export default dictionary;
