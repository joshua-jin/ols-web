<template>
  <div class="m-flexbox">
    <div class="m-flexitem">
      <el-col :span="24">
        <router-link to="/"><i class="el-icon-arrow-left m-btn-back"></i></router-link>
        <div class="m-form-wrapper">
          <el-form :model="ruleForm" :rules="rules" :label-position="'top'"  ref="ruleForm">
            <el-form-item maxlength="50" minlength="3" prop="username" label="新用户账号" >
              <el-input class="m-input-full-width m-input" v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item maxlength="30" minlength="3" prop="password" label="密码">
              <el-input class="m-input-full-width m-input" type="password" v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item maxlength="30" minlength="3" prop="password2" label="确认密码">
              <el-input class="m-input-full-width m-input" type="password" v-model="ruleForm.password2"></el-input>
            </el-form-item>
            <el-form-item class="m-center m-btn-wrapper">
              <el-button class="m-btn" type="primary" @click="submitForm('ruleForm')">注册</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script>
  import api from '@/api'
  import css from '../SignIn/index.css';

  export default {
    data() {
      const validateRetypePasswordSame = (rule, value, callback) => {
        if (value !== this.ruleForm.password) {
          callback(new Error('Retyped password is different'))
        } else {
          callback()
        }
      }


        const checkIfUserExsit = (rule, value, callback) => {
          if(value){
            api.checkIfUserExsit({name:value}).then(function (response) {
              console.log(response);
              if(response.data===400){
                callback(new Error('用户名已存在！'))
              }else{
                callback()
              }
            })
            .catch(function (error) {
              // todo
              console.log(error);

            });
          }

        }
      return {
        ruleForm: {
          username: '',
          password: '',
          password2: '',
        },
        rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {validator: checkIfUserExsit, message: '用户名已存在', trigger: ['blur']},

          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
          ],
          password2: [
            {required: true, message: '请确认密码', trigger: 'blur'},
            {validator: validateRetypePasswordSame, message: '两次输入的密码不一致', trigger: ['blur']},
          ],
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs['ruleForm'].validate((flag, obj) => {
          if (!flag) {
            return
          }
          api.register(this.ruleForm).then( (response)=> {
            // handle success
            console.log(response);
            this.$message({
               message: '恭喜你，注册成功！',
               type: 'success'
             });
            this.$router.push('/')
          })
          .catch((error)=>{
            // handle error
            console.log(error);
            this.$message({
               message: '注册失败！错误信息：'+error.message,
               type: 'error'
             });

          });
        })
      }

    }
  }
</script>

<style >

</style>
