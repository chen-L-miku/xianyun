<template>
  <div class="loginFormcss">
    <el-form ref="form" :model="form" :rules="rules">
      <el-form-item class="formcss" prop="username">
        <el-input v-model="form.username" placeholder="手机/用户名" @keyup.enter.native='loginSubmit'></el-input>
      </el-form-item>
      <el-form-item class="formcss" prop="password">
        <el-input v-model="form.password" placeholder="密码" type="password" @keyup.enter.native='loginSubmit'></el-input>
      </el-form-item>
      <p class="form-text">
        <nuxt-link to="#">忘记密码</nuxt-link>
      </p>

      <el-button type="primary" size="medium" class="submit" @click="loginSubmit">登录</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods:{
    loginSubmit(){
      this.$refs['form'].validate(valid=>{
        if(valid){
          this.$store.dispatch("user/login", this.form).then(res=>{
            console.log(res);
            
            this.$message({
              message:'登录成功',
              type:'success'
            })
            // 跳转到首页
            setTimeout(() => {
                        this.$router.replace("/")
                    }, 1000);
          }).catch(err=>{
            this.$message({
              message:'登录失败,用户名或密码错误',
              type:'error'
            })
          })
        }
      })
    }
  }
};
</script>
<style lang="less">
.loginFormcss {
  padding: 25px;
  .formcss {
    margin-bottom: 20px;
  }
  .form-text {
    line-height: 1px;
    color: skyblue;
    text-align: right;
    font-size: 12px;
  }
  .submit {
    width: 100%;
    margin-top: 15px;
  }
}
</style>
