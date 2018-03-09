<template>
  <div class="hello">
     <!-- 面包屑 -->
    <!-- <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item>经营监控</el-breadcrumb-item>
      <el-breadcrumb-item>车辆监控预警 </el-breadcrumb-item>
      <el-breadcrumb-item>车辆热力轨迹图</el-breadcrumb-item>
    </el-breadcrumb> -->

    <mBreadcrumb :list="list"></mBreadcrumb>

    <!-- 面包屑 -->
    <!-- 查询条件 -->
    

    <mQuery></mQuery>




    <div class="table-top-button">
      <el-button type="primary" size="medium" class="buttonminw98">创建</el-button>
      <el-button size="medium"  class="buttonminw98">批量导入</el-button>
      <el-button size="medium"  class="buttonminw98">批量导出</el-button>
    </div>

    

    <!--map-->
      <BDmap></BDmap>



  </div>
</template>
<script>
  import BDmap from './BDmap'
  import mQuery from './mQuery'
  import mBreadcrumb from './mBreadcrumb'
  export default {
    components: {
      BDmap,
      mQuery,
      mBreadcrumb
    },
    computed: {
      name () {
        return this.$route.name
      },

      list () {
        return this.$route.matched
      }
    },
    mounted() {
        console.log(this.$route.matched);
    },
    methods: {

    },
    data() {
      return {
        //搜索表单折叠是否显示
        show1:false,

        //搜索表单formInline数据
        formInline: {
          user: '',
          user1: '',
          user2: '',
          user3: '',
          user4: '',
          user5: '',
          user6: '',
          user7: '',
          user8: '',
        },
        //时间选择器

        //分页插件当前页
        currentPage:1, 

      }
    }
  }
</script>
<style>
  .map{
    width: 100%;
    height: 400px;
    border: 1px solid #ccc;
  }
</style>