<template>
  <div class="m-flexbox">
    <div class="m-flexitem">
      <el-col :span="24">
        <div class="m-form-wrapper">
          <el-form :model="ruleForm" ref="ruleForm">
            <el-form-item prop="userName" label="账号">
              <el-input class="m-input-full-width m-input" v-model="ruleForm.userName"></el-input>
            </el-form-item>
            <el-form-item prop="password" label="密码">
              <el-input class="m-input-full-width m-input" type="password" v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item v-if="loginError" :show-message="true" error="Username or password is invalid!" style="text-align: center" inline-message>
            </el-form-item>
            <el-form-item class="m-center m-btn-wrapper">
              <el-button class="m-btn" type="primary" @click="submitForm('ruleForm')">登陆</el-button>
              <router-link style="display: block" to="/signup">新用户注册</router-link>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script>
  import api from '@/api'
  import './index.css'
  export default {
    data() {
      return {
        ruleForm: {
          userName: '',
          password: '',
        },
        loginError: false
      }
    },
    methods: {
      async submitForm(formName) {
        this.loginError = false;
        try {
          const resp = await api.login(this.ruleForm);
          if (resp.config.validateStatus(resp.status)) {
            alert("Login successful!");
            return;
          }
          this.loginError = true;
        }catch (e) {
          this.loginError = true;
        }
      }
    }
  }
</script>
