import axios from "axios";
const getCode = async () => {
  let result = "";
  try {
    result = await axios.get("/getCaptcha");
    if (result.status === 200) {
      return result.data;
    }
  } catch (e) {
    console.log(e);
  }
  return result;
};
export { getCode };
