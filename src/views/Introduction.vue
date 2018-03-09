<template>
  <div class="animated fadeIn">


<Row>
    <h2>欢迎使用 DST2.0云平台!</h2>

      <p>登录次数：18</p>

      <p>上次登录IP：222.35.131.79.1 上次登录时间：2014-6-14 11:19:55</p>

    <!-- <Col :md="24">
          <intro-chart-count> </intro-chart-count>

    </Col> -->

</Row>

    <Row>
        <Col span="24" >
          <h3 style="text-align:center">特性</h3>
        </Col>
    </Row>

    <Row>
        <Col :md="8" >
          <div class="dashboard_feature">
            <Icon type="ios-color-wand" size="50"></Icon>
            <h5>简洁工业化UI：</h5>                 
            <p>各类组件已经完美封装，简化UI工作，专注数据</p>
            <p>再也不用担心老板骂我的UI丑了</p>

                <p><a href="https://www.iviewui.com/components/input" target="_blank">点击查看iview</a></p>
            </div>
        </Col>

  <Col :md="8" >

          <div class="dashboard_feature">
            <Icon type="android-phone-portrait" size="50"></Icon>

            <h5>自适应</h5>                 
            <p>自适应布局 可缩小侧边栏 Logo自动居中 </p>
            <p>完美适配大屏、平板、手机</p>
                <p>    <a style="    color: #2d8cf0;cursor: pointer;">调整浏览器大小查看</a></p>
            </div>
            
        </Col>
          <Col :md="8" >
          <div class="dashboard_feature">
            <Icon type="eye" size="50"></Icon>
            <h5>登录鉴权</h5>                 
            <p>在前端截获路由跳转，控制登录及鉴权功能</p>
            <p>极大简化后端工作量</p>

                <p> <a style="    color: #2d8cf0;cursor: pointer;" @click="test_logout">点击立即退出登录测试</a></p>
            </div>
            
        </Col>

    </Row>

  </div>
</template>

<script>
import IntroChartCount from './charts/IntroChartCount';
import IntroChartPie from './charts/IntroChartPie';

export default {
  components:{IntroChartCount,IntroChartPie},
  name: 'dashboard',
        data () {
            return {
                value1: 0,
                value2: 0,
                value3: 0,

                speed:10000,
            }
        },
        methods:{
              test_logout(){
                 this.$store.dispatch('LogOut').then(() => {
                    this.$router.push({ path: '/login' });
                  }).catch(err => {
                    this.$message.error(err);
                  });
              }
        },
        mounted(){
                const token=this.$store.getters.token;
                
            
        }
}
</script>


<style type="text/css" scoped>
 .time{
        font-size: 14px;
        font-weight: bold;
    }
    .content{
        padding-left: 5px;
    }
.dashboard_feature{
  text-align:center;
}
  .demo-carousel{
     height: 600px;
    line-height: 200px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    background: #506b9e;
  }
  .demo-carousel img{
      height: 100%;
      width: 100%;
  }
  h3,h4,h5 {
      margin:12px;
  }
  h3{
    margin-bottom: 20px;
  }
  p{
    margin: 12px;
  }
  .row-margin-top {
    margin-top:30px;
  }
</style>