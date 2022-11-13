<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action="">
        <div class="layui-form-item" :class="{'form-group--error':$v.name.$error}">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-inline">
            <input type="text" name="title" v-model.trim="name" @input="setName($event.target.value)" placeholder="请输入标题" autocomplete="off" class="layui-input" />
          </div>
          <div class="error layui-form-mid" v-if="!$v.name.required">
            用户名不得为空</div>
          <div class="error layui-form-mid" v-if="!$v.name.email">
            用户名输入格式错误</div>
        </div>
        <div class="layui-form-item" :class="{'form-group--error':$v.password.$error}">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-inline">
            <input type="password" name="title" v-model.trim="password" @input="setPassword($event.target.value)" placeholder="请输入密码" autocomplete="off" class="layui-input" />
          </div>
          <div class="error layui-form-mid" v-if="!$v.password.required">密码不能为空</div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <input type="text" name="title" v-model="code" required lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input" />
          </div>
          <div class="layui-form-mid svg" @click.stop="getCaptcha" v-html="svg"></div>
        </div>
        <button type="button" class="layui-btn" @click="checkForm">点击登陆</button>
        <a class="imooc-link" href="http://www.layui.com">忘记密码</a>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { required, email } from 'vuelidate/lib/validators'
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
  validations: {
    name: {
      required,
      email
    },
    password: {
      required
    },
    code: {
      required
    }
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
    setName (value) {
      this.name = value
      this.$v.name.$touch()
    },
    setPassword (value) {
      this.password = value
      this.$v.password.$touch()
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
.imooc-link {
  margin-left: 10px;
  &:hover {
    color: #009688;
  }
}
.error {
  display: none;
}
.form-group--error {
  .error {
    display: block;
  }
}
</style>
