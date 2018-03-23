<template>
  <div class="articles">
    <el-row :gutter="20">
      <!-- 左侧文章主体 -->
  <el-col :md="24" :lg="18">
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i>近期发布</span>
        <section>
          <div class="info">
            <div class="avatar"><img src="../assets/IMAGES/bg-1.jpg" alt=""></div>
            <div class="details">
              <p>作者： <span>李立强</span></p>
              <p>产出量：<span>100</span></p>
              <p>擅长领域： <span>前端</span></p>
            </div>
          </div>
          <div class="article">
            <h1><a href="">谈谈你对Vue和React在理解</a> </h1>
            <p>不知道，没学会，也没用过，你出的题太难了，要不你问个简单点的……</p>
          </div>
          <div class="score">
            <span class="comment"><i class="el-icon-edit-outline"></i> 评论：23</span>
            <span class="comment"><i class="el-icon-view"></i> 浏览：67</span>
            <span class="comment"><i class="el-icon-star-on"></i> 收藏：40</span>
          </div>
        
        </section>
        <section>
          <div class="info">
            <div class="avatar"><img src="../assets/IMAGES/bg-1.jpg" alt=""></div>
            <div class="details">
              <p>作者： <span>李立强</span></p>
              <p>产出量：<span>100</span></p>
              <p>擅长领域： <span>前端</span></p>
            </div>
          </div>
          <div class="article">
            <h1><a href="">谈谈你对Vue和React在理解</a> </h1>
            <p>不知道，没学会，也没用过，你出的题太难了，要不你问个简单点的……</p>
          </div>
          <div class="score">
            <span class="comment"><i class="el-icon-edit-outline"></i> 评论：23</span>
            <span class="comment"><i class="el-icon-view"></i> 浏览：67</span>
            <span class="comment"><i class="el-icon-star-on"></i> 收藏：40</span>
          </div>                
        </section>  
      </el-tab-pane>
      <el-tab-pane label="活跃作者">
         <section>
            <div class="info">
              <div class="avatar"><img src="../assets/IMAGES/bg-1.jpg" alt=""></div>
              <div class="details">
                <p>作者： <span>李立强</span></p>
                <p>产出量：<span>100</span></p>
                <p>擅长领域： <span>前端</span></p>
              </div>
            </div>
            <div class="article">
              <h1><a href="">谈谈你对Vue和React在理解</a> </h1>
              <p>不知道，没学会，也没用过，你出的题太难了，要不你问个简单点的……</p>
            </div>
            <div class="score">
              <span class="comment"><i class="el-icon-edit-outline"></i> 评论：23</span>
              <span class="comment"><i class="el-icon-view"></i> 浏览：67</span>
              <span class="comment"><i class="el-icon-star-on"></i> 收藏：40</span>
            </div>
        </section>
      </el-tab-pane>
      <el-tab-pane label="最受欢迎">
         <section>
          <div class="info">
            <div class="avatar"><img src="../assets/IMAGES/bg-1.jpg" alt=""></div>
            <div class="details">
              <p>作者： <span>李立强</span></p>
              <p>产出量：<span>100</span></p>
              <p>擅长领域： <span>前端</span></p>
            </div>
          </div>
          <div class="article">
            <h1><a href="">谈谈你对Vue和React在理解</a> </h1>
            <p>不知道，没学会，也没用过，你出的题太难了，要不你问个简单点的……</p>
          </div>
          <div class="score">
            <span class="comment"><i class="el-icon-edit-outline"></i> 评论：23</span>
            <span class="comment"><i class="el-icon-view"></i> 浏览：67</span>
            <span class="comment"><i class="el-icon-star-on"></i> 收藏：40</span>
          </div>          
        </section>
      </el-tab-pane>
      <el-tab-pane label="大神推荐">
         <section>
          <div class="info">
            <div class="avatar"><img src="../assets/IMAGES/bg-1.jpg" alt=""></div>
            <div class="details">
              <p>作者： <span>李立强</span></p>
              <p>产出量：<span>100</span></p>
              <p>擅长领域： <span>前端</span></p>
            </div>
          </div>
          <div class="article">
            <h1><a href="">谈谈你对Vue和React在理解</a> </h1>
            <p>不知道，没学会，也没用过，你出的题太难了，要不你问个简单点的……</p>
          </div>
          <div class="score">
            <span class="comment"><i class="el-icon-edit-outline"></i> 评论：23</span>
            <span class="comment"><i class="el-icon-view"></i> 浏览：67</span>
            <span class="comment"><i class="el-icon-star-on"></i> 收藏：40</span>
          </div>          
        </section>
      </el-tab-pane>
    </el-tabs>
  </el-col>

  <!-- 右侧热门专栏 -->

  <el-col :span="6" class="colums hidden-md-and-down">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>热门专栏</span>        
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        <span style="display: inline-block; border: 1px solid #e6e6e6; border-radius: 12px; width: 24px; height: 24px; line-height: 24px; text-align: center; margin-right: 10px;">{{o}}</span>{{'列表内容 ' + o }}
      </div>
    </el-card>
  </el-col>
</el-row>
    
  </div>
</template>
<script>
import '../assets/css/technology.scss'
export default {

}
</script>

