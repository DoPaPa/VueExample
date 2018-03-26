<template>
  <div class="mainBox">
    <el-container>
      <el-header class="pub">

        <div class="grid-content">
          <h1 class="el-icon-star-on">点灯熬油</h1>
        </div>

        <div class="grid-content">
          <el-menu class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1" @click="goto(1)">首页</el-menu-item>                
            <el-menu-item index="2" @click="goto(2)">技术专栏</el-menu-item>
            <el-menu-item index="3" @click="goto(3)">问答专区</el-menu-item>
            <el-menu-item index="4" @click="goto(4)">发布文章</el-menu-item>
            <el-menu-item index="5" @click="goto(5)">热议话题</el-menu-item>
          </el-menu>
        </div>

        <div class="search">
          <el-input placeholder="请输入内容" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div class="user">
            <el-button type="text" @click="Sign(1)">前往登录</el-button>
            <el-button type="success" @click="Sign(0)">前往注册</el-button>          
        </div>

      </el-header>
      
      <router-view></router-view>

    </el-container>
    <div class="userCenter-signup" :class="{active: isSignup}">
      <el-form>
        <div>
          <i class="el-icon-close" @click="switching(0)"></i>
          <h3>注册</h3>          
        </div>        
        <el-form-item label="用户名：">
          <el-input v-model="userToSignup.username"></el-input>
        </el-form-item>
        <el-form-item label="邮箱：">
          <el-input v-model="userToSignup.email"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="userToSignup.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitSignup">提交</el-button>
          <el-button @click="resetForm('numberValidateForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="userCenter-signin" :class="{active: isSignin}">
      <el-form>
        <div>
          <i class="el-icon-close" @click="switching(1)"></i>
          <h3>登录</h3>          
        </div>        
        <el-form-item label="邮箱：">
          <el-input v-model="userToSignin.email"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="userToSignin.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitSignin">提交</el-button>
          <el-button @click="resetForm('numberValidateForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import '../assets/css/pub.scss'
export default {
  data () {
    return {
      isSignup: false,
      isSignin: false,
      userToSignup: {
        username: '',
        email: '',
        password: ''
      },
      userToSignin: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    goto (index) {
      switch (index) {
        case 1:
          this.$router.push({name: 'home'})
          break
        case 2:
          this.$router.push({name: 'technology'})
          break
        case 3:
          this.$router.push({name: 'argument'})
          break
        case 4:
          this.$router.push({name: 'addarticle'})
          console.log(index)
          break
        case 5:
          this.$router.push({name: 'hot'})
          break
      }
    },

    // 用户注册
    submitSignup () {
      this.$axios.post('/signup', this.userToSignup)
        .then(res => {
          if (res.data.status === 0) {
            this.isSignup = false
            this.isSignin = true
          }
        })
    },

    // 用户登录
    submitSignin () {
      this.$axios.post('/signin', this.userToSignin)
        .then(res => {
          if (res.data.status === 0) {
            this.$router.push({name: 'home'})
            this.isSignin = false
          }
        })
    },
    resetForm (formName) {

    },
    switching (type) {
      type === 0 ? this.isSignup = false : this.isSignin = false
    },
    Sign (type) {
      type === 0 ? this.isSignup = true : this.isSignin = true
    }
  }

}
</script>
