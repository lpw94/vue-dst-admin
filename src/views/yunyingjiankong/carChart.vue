<template>
  <div class="hello">
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


