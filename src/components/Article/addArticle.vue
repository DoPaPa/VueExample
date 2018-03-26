<template>
<div class="pub">
  <!-- 标题 -->
  <div class="caption">
    <div>
      <el-input placeholder="请输入标题" v-model="article.title">
        <template slot="prepend">标&emsp;题</template>
      </el-input>
    </div>
  </div>
  <!-- 分类 -->
  <div class="category">
    <div class="">
      <el-select v-model="article.category" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
  </div>
  <!-- 富文本编辑器 -->
  <div class="myEditor">
    <myEditor @setContent="getContent"></myEditor>
  </div>
  <!-- 提交按钮 -->
  <div class="submit">
    <el-button type="primary" @click="sub">发布文章</el-button>
  </div>
</div>
</template>
<script>
import '../../assets/css/addarticle.scss'
import Editor from '../editor'
export default {
  components: {
    'myEditor': Editor
  },
  data () {
    return {
      article: {
        title: '',
        category: '',
        content: ''
      },
      options: [{
        value: '前端',
        label: '前端'
      }, {
        value: '后端',
        label: '后端'
      }, {
        value: '服务器',
        label: '服务器'
      }, {
        value: '数据库',
        label: '数据库'
      }, {
        value: '工具',
        label: '工具'
      }]
    }
  },
  methods: {
    getContent (msg) {
      this.article.content = msg
    },
    sub () {
      this.$axios.post('/article', this.article)
        .then((res) => {
          if (res.data.status === 0) {
            // console.log('文章发布成功！')
            window.alert(res.data.msg)
            this.$router.push({name: 'home'})
          } else {
            window.alert(res.data.msg)
          }
        })
    }
  }
}
</script>

