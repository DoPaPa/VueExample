<template>
  <div>
    <el-container>
      <el-main style="padding: 0;">
        <el-form ref="form" :model="ruleForm" label-position="left" label-width="80px" size="medium">
        <div style="line-height: normal">
          <el-input placeholder="请输入内容" v-model="title">
            <template slot="prepend">文章标题：</template>
          </el-input>
        </div>
        <div class="category" style="display: flex">
          <el-form-item  prop="region">
            <el-select style="margin: 0" v-model="ruleForm.region" placeholder="文章分类">
              <el-option label="前端" value="front"></el-option>
              <el-option label="后端" value="end"></el-option>
              <el-option label="服务器" value="database"></el-option>
              <el-option label="数据库" value="server"></el-option>
            </el-select>
          </el-form-item>
        </div>
          <VmMarkdown theme="default" 
          width="100%" 
          height="100%" 
          v-on:gethtml="showHtml"
         >
        </VmMarkdown>
        </el-form>

    
      </el-main>
      <el-footer>
        <div>
          <el-checkbox >同步到微博</el-checkbox>
          <el-checkbox >版权声明</el-checkbox>
        </div>
        <div>
          <el-button type="success">发布文章</el-button>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import '../../assets/css/addarticle.scss'
import VmMarkdown from 'vm-markdown'
export default {
  name: 'editor',
  data () {
    return {
      title: '',
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  components: {
    VmMarkdown
  },
  methods: {
    showHtml (html) {
      console.log(html)
    }
  }
}
</script>

