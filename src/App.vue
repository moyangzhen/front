<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action="">
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <ValidationProvider name="用户名" rules="required|email" v-slot="{ errors }">
            <div class="layui-input-inline">
              <input type="text" name="name" v-model.trim="name" placeholder="请输入标题" autocomplete="off" class="layui-input" />
            </div>
            <div class="error layui-form-mid">{{ errors[0] }}</div>
          </ValidationProvider>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <ValidationProvider name="密码" rules="required|min:6" v-slot="{ errors }">
            <div class="layui-input-inline">
              <input type="password" name="password" v-model.trim="password" placeholder="请输入密码" autocomplete="off" class="layui-input" />
            </div>
            <div class="error layui-form-mid">{{ errors[0] }}</div>
          </ValidationProvider>
        </div>
        <div class="layui-form-item">
          <div class="clear">
            <label class="layui-form-label">验证码</label>
            <ValidationProvider name="验证码" rules="required|min:4" v-slot="{ errors }">
              <div class="layui-input-inline">
                <input type="text" name="code" v-model="code" placeholder="请输入验证码" autocomplete="off" class="layui-input" />
              </div>
              <div class="layui-form-mid svg" @click.stop="getCaptcha" v-html="svg"></div>
              <div class="error">{{ errors[0] }}</div>
            </ValidationProvider>
          </div>
        </div>
        <button type="button" class="layui-btn" @click="checkForm">点击登陆</button>
        <a class="imooc-link" href="http://www.layui.com">忘记密码</a>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { ValidationProvider, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import zh from 'vee-validate/dist/locale/zh_CN'
for (const rule in rules) {
  extend(rule, {
    ...rules[rule],
    message: zh.messages[rule]
  })
}
export default {
  name: 'app',
  data () {
    return {
      svg: '',
      name: '',
      password: '',
      code: '',
      errorMsg: ''
    }
  },
  components: {
    ValidationProvider
  },
  mounted () {
    this.getCaptcha()
  },
  methods: {
    getCaptcha () {
      axios.get('http://localhost:3000/getCaptcha').then((res) => {
        if (res.status === 200) {
          const obj = res.data
          if (obj.code === 200) {
            this.svg = res.data.data
          }
        }
      })
    },
    checkForm () {
      this.errorMsg = []
      // regEx email
      if (!this.name) {
        this.errorMsg.push('登陆名为空')
      }
      if (!this.password
      ) {
        this.errorMsg.push('密码为空')
      }
      if (!this.code) {
        this.errorMsg.push('验证码为空')
      }
    }
  }
}

</script>
<style lang="scss" scoped>
#app {
  background-color: #f2f2f2;
}
.layui-container {
  padding-left: 20px;
  background-color: #fff;
}
input {
  width: 190px;
}
.svg {
  padding: 0 !important;
  vertical-align: top;
}
.error {
  color: red;
}
.clear {
  overflow: hidden;
}
.imooc-link {
  margin-left: 10px;
  &:hover {
    color: #009688;
  }
}
</style>
