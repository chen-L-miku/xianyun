<template>
  <div class="header">
    <el-row type="flex" justify="space-between" class="main">
      <!-- logo -->
      <div class="logo">
				<nuxt-link to="/">
					<img src="./logo.jpg" />
				</nuxt-link>
        
      </div>

      <!-- 导航项 -->
      <el-row type="flex" class="nev">
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/post">旅游攻略</nuxt-link>
        <nuxt-link to="/hotel">酒店</nuxt-link>
        <nuxt-link to="/air">国内机票</nuxt-link>
      </el-row>

      <!-- 登录 -->
      <el-row type="flex" align="middle">
        <!-- 如果用户存在则展示用户信息，用户数据来自store -->
        <el-dropdown v-if="false">
          <el-row type="flex" align="middle" class="el-dropdown-link">
            <nuxt-link to="#">
              <img src="http://157.122.54.189:9093/images/pic_sea.jpeg" />
              用户名
            </nuxt-link>
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </el-row>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <nuxt-link to="#">个人中心</nuxt-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <div @click="handleLogout">退出</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <!-- 不存在用户信息展示登录注册链接 -->
        <nuxt-link to="/user/login" class="account-link" v-else>登录 / 注册</nuxt-link>
      </el-row>
    </el-row>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
.header {
	border-bottom: 1px solid #eee;
	background:#fff;
	box-shadow:0 3px 0 #f5f5f5;
  .main {
    height: 60px;
    width: 1000px;
    margin: 0 auto;
    
    .logo {
      padding-top: 8px;
      width: 156px;
      height: 44px;
      img {
        width: 100%;
      }
    }
    .nev {
      flex: 1;
      margin: 0 20px;
      a {
        display: block;
        padding: 0 20px;
        line-height: 60px;
				box-sizing: border-box;
				
				&:hover,&:focus, &:active {
                    border-bottom:5px #409eff solid;
                    color:#409eff;
                }
			}
			/deep/ .nuxt-link-exact-active{
                background:#409eff;
                color:#fff!important;
            }
    }
  }
}
</style>
