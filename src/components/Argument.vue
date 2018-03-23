<template>
  <div class="arguments">
    <el-tabs type="border-card">
      <el-tab-pane label="最新回答" class="latest">
        <section>
          <div class="commont">
            <el-badge :value="12" class="item">              
              <el-tag type="success">评论</el-tag>
            </el-badge>
          </div>
          <div class="result">
            <i class="el-icon-circle-check-outline ok">解&emsp;决</i>
          </div>
          <div class="scan">
            <p>21</p>
            <p>浏览</p>
          </div>
          <div class="main">
            <p><span>最新回答：</span><span>李立强</span><span class="comment">不错</span></p>
            <h2><a href="">程序员的成长历程</a> </h2>
          </div>
          <div class="block">
            <span class="demonstration">平均得分</span>
            <el-rate
              disabled
              v-model="value2"
              :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
            </el-rate>
          </div>
        </section>
      </el-tab-pane>

      <!-- 热门回答部分 -->

      <el-tab-pane label="热门回答" class="hot">
         <section>
          <div class="comment">
             <el-badge :value="12" class="item">              
              <el-tag type="success">评论</el-tag>
            </el-badge>
          </div>
          <div class="result">           
            <i class="el-icon-circle-check-outline ok">解&emsp;决</i>
          </div>
          <div class="scan">
            <p>21</p>
            <p>浏览</p>
          </div>
          <div class="main">
            <p><span>最新回答：</span><span>李立强</span><span class="comment">不错</span></p>
            <h2><a href="">程序员的成长历程</a> </h2>
          </div>
          <div class="block">
            <span class="demonstration">平均得分</span>
            <el-rate
              disabled
              v-model="value2"
              :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
            </el-rate>
          </div>
        </section>
        <section>
          <div class="comment">
            <el-badge :value="12" class="item">              
              <el-tag type="success">评论</el-tag>
            </el-badge>
          </div>
          <div class="result">

            <i class="el-icon-circle-close-outline no">未解决</i>
          </div>
          <div class="scan">
            <p>21</p>
            <p>浏览</p>
          </div>
          <div class="main">
            <p><span>最新回答：</span><span>李立强</span><span class="comment">不错</span></p>
            <h2><a href="">程序员的成长历程</a> </h2>
          </div>
          <div class="block">
            <span class="demonstration">平均得分</span>
            <el-rate
              v-model="value2"
              disabled
              :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
            </el-rate>
          </div>
        </section>
      </el-tab-pane>

      <!-- 等待回答部分 -->

      <el-tab-pane label="等待回答" class="wait">
        <section>
          <div class="comment">
            <el-badge :value="12" class="item">              
              <el-tag type="success">评论</el-tag>
            </el-badge>
          </div>
          <div class="result">
            <i class="el-icon-circle-close-outline no">未解决</i>
          </div>
          <div class="scan">
            <p>21</p>
            <p>浏览</p>
          </div>
          <div class="main">
            <p><span>李立强：</span><span>于 2018-03-19 03:34:29 提问</span></p>
            <h2><a href="">程序员的成长历程</a> </h2>
          </div>
          <div class="block">
            <span class="demonstration">平均得分</span>
            <el-rate
              v-model="value2"
              disabled
              :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
            </el-rate>
          </div>
        </section>
      </el-tab-pane>
      <el-tab-pane label="付费问答">暂未开通</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import '../assets/css/argument.scss'
export default {
  data () {
    return {
      value2: 3
    }
  }
}
</script>
