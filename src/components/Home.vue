<template>
<div class="home">
  <div class="side-left">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>前&emsp;端</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>后&emsp;端</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>服务器</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据库</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">选项1</el-menu-item>
              <el-menu-item index="4-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
            <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>工具</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">选项1</el-menu-item>
              <el-menu-item index="5-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
            <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>安全</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-1">选项1</el-menu-item>
              <el-menu-item index="6-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
            <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>程序员</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="7-1">选项1</el-menu-item>
              <el-menu-item index="7-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
            <el-submenu index="8">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>区块链</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="8-1">选项1</el-menu-item>
              <el-menu-item index="8-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
            <el-submenu index="9">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>人工智能</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="9-1">选项1</el-menu-item>
              <el-menu-item index="9-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>            
      </el-col>
    </el-row>
  </div>
  <div class="content">
    <div class="swiper">
        <swiper :options="swiperOption" class="swiper-box" ref="mySwiper">
          <swiper-slide class="swiper-item"><img src="../assets/IMAGES/banner1.jpg" alt=""></swiper-slide>
          <swiper-slide class="swiper-item"><img src="../assets/IMAGES/banner2.jpg" alt=""></swiper-slide>
          <swiper-slide class="swiper-item"><img src="../assets/IMAGES/banner3.jpg" alt=""></swiper-slide>
          <swiper-slide class="swiper-item"><img src="../assets/IMAGES/banner4.jpg" alt=""></swiper-slide>
          <swiper-slide class="swiper-item"><img src="../assets/IMAGES/banner5.jpg" alt=""></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
    <div class="articles">
       <section>
          <div class="info">
            <div class="avatar"><img src="../assets/IMAGES/bg-1.jpg" alt=""></div>
            <div class="details">
            <p>作者： <span>李立强</span></p>
            <p>分类： <span>前端</span></p>
            </div>
          </div>
          <div class="article">
            <h1><a href="">谈谈你对Vue和React在理解</a> </h1>
            <p>不知道，没学会，也没用过，你出的题太难了，要不你问个简单点的……</p>
          </div>
      </section>
       <section>
          <div class="info">
            <div class="avatar"><img src="../assets/IMAGES/bg-1.jpg" alt=""></div>
            <div class="details">
            <p>作者： <span>李立强</span></p>
            <p>分类： <span>前端</span></p>
            </div>
          </div>
          <div class="article">
            <h1><a href="">谈谈你对Vue和React在理解</a> </h1>
            <p>不知道，没学会，也没用过，你出的题太难了，要不你问个简单点的……</p>
          </div>
      </section>
    </div>
   
  </div>
  <div class="side-right">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
      <span>最新动态</span>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        <!-- {{'列表内容 ' + o }} -->
        <p>李立强于3三钟前发布了文章</p>
        <h5>前端不会，后端不会，前后端都不会</h5>
      </div>
    </el-card>
  </div>
</div>
</template>
<script>
import '../assets/css/home.scss'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      components: {
        swiper,
        swiperSlide
      },
      swiperOption: {
        notNextTick: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        mousewheel: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        autoply: 2000,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  computed: {

    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // 这边就可以使用swiper这个对象去使用swiper官网中的那些方法
    this.swiper.slideTo(0, 0, false)
  }
}
</script>

