<template>
  <div class="m-flexbox">
    <div class="m-flexitem">
      <el-col :span="24">
        <div class="m-form-wrapper">
          <div class="header">
            <span class="header-company">思沃学院</span>
            <span class="header-title">在线学习系统</span>
          </div>
          <el-form :model="ruleForm" label-position="top" ref="ruleForm">
            <el-form-item prop="username" label="账号">
              <el-input class="m-input-full-width m-input" v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item prop="password" label="密码">
              <el-input class="m-input-full-width m-input" type="password" v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item :show-message="loginError" error="Username or password is invalid!"/>
            <el-form-item class="m-center m-btn-wrapper">
              <el-button class="m-btn" type="primary" @click="submitForm('ruleForm')">登陆</el-button>
              <router-link class="m-btn-text" to="/signup">新用户注册</router-link>
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
          username: '',
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
        } catch (e) {
          this.loginError = true;
        }
      }
    }
  }
</script>

<style>
  .header-company {
    width: 112px;
    height: 28px;
    font-size: 28px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: normal;
    color: #00acac;
    margin-bottom: 51px;
  }
  .header-title {
    width: 108px;
    height: 20px;
    font-size: 18px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.11;
    letter-spacing: normal;
    color: #999999;
    margin-bottom: 51px;
  }
</style>
