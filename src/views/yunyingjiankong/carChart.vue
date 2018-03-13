<template>
  <div class="hello">
    <!-- 查询条件 -->
    

    <mQuery></mQuery>


    <div class="table-top-button">
      <Button type="primary">创建</Button>
      <Button>批量导入</Button>
      <Button>批量导出</Button>
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


