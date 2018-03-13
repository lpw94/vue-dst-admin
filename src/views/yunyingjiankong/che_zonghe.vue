<template>
  <div class="hello">
   <!--  <el-form class="pt20" label-position="right" label-width="100px" :model="formInline" ref="formInline" >
      <div class="el-row">
        <div class="el-col el-col-22">
          <div class="el-row form-select">
            <div class="el-col el-col-6" style="padding-left: 10px; padding-right: 10px;">
              <el-form-item label="车辆模板编号" prop="user">
                <el-input size="medium" v-model="formInline.user" placeholder="" class="inputmaxw217"></el-input>
              </el-form-item>
            </div>
            <div class="el-col el-col-6" style="padding-left: 10px; padding-right: 10px;">
              <el-form-item label="车辆使用性质" prop="user1">
                <el-select size="medium" v-model="formInline.user1" placeholder="">
                  <el-option label="全部" value="shanghai"></el-option>
                  <el-option label="待审核" value="beijing"></el-option>
                  <el-option label="已审核" value="beijing2"></el-option>
                </el-select>
              </el-form-item>
            </div>
            <div class="el-col el-col-6" style="padding-left: 10px; padding-right: 10px;">
              <el-form-item size="medium" label="车辆级别" prop="user2">
                <el-select v-model="formInline.user2" placeholder="">
                  <el-option label="全部" value="shanghai"></el-option>
                  <el-option label="待审核" value="beijing"></el-option>
                  <el-option label="已审核" value="beijing2"></el-option>
                </el-select>
              </el-form-item>
            </div>
            <div class="el-col el-col-6" style="padding-left: 10px; padding-right: 10px;">
              <el-form-item size="medium" label="车辆品牌" prop="user3">
                <el-select v-model="formInline.user3" placeholder="">
                  <el-option label="全部" value="shanghai"></el-option>
                  <el-option label="待审核" value="beijing"></el-option>
                  <el-option label="已审核" value="beijing2"></el-option>
                </el-select>
              </el-form-item>
            </div>

          </div>
          <div class="el-row form-select">
            <div class="el-col el-col-6" style="padding-left: 10px; padding-right: 10px;">
              <el-form-item size="medium" label="车辆型号" prop="user4">
                <el-select v-model="formInline.user4" placeholder="">
                  <el-option label="全部" value="shanghai"></el-option>
                  <el-option label="禁用" value="beijing"></el-option>
                  <el-option label="正常" value="beijing2"></el-option>
                </el-select>
              </el-form-item>
            </div>
            <div class="el-col el-col-6" style="padding-left: 10px; padding-right: 10px;">
              <el-form-item size="medium" label="车型款式" prop="user5">
                <el-select v-model="formInline.user5" placeholder="">
                  <el-option label="全部" value="shanghai"></el-option>
                  <el-option label="自运营" value="beijing"></el-option>
                  <el-option label="合作运营" value="beijing2"></el-option>
                  <el-option label="代理运营" value="beijing3"></el-option>
                </el-select>
              </el-form-item>
            </div>
            <div class="el-col el-col-6" style="padding-left: 10px; padding-right: 10px;">
              <el-form-item size="medium" label="公告号" prop="user6">
                <el-input v-model="formInline.user6" placeholder="" class="inputmaxw217"></el-input>
              </el-form-item>
            </div>
            <div class="el-col el-col-6" style="padding-left: 10px; padding-right: 10px;">
              <el-form-item size="medium" label="状态" prop="user7">
                <el-select v-model="formInline.user7" placeholder="">
                  <el-option label="总部" value="shanghai"></el-option>
                  <el-option label="总部-华南" value="beijing"></el-option>
                  <el-option label="总部-华南-广东" value="beijing2"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </div>
          <el-collapse-transition>
            <div class="el-row form-select" v-show="show1">
              <div class="el-col el-col-12" style="padding-left: 10px; padding-right: 10px;">
                <el-form-item size="medium" label="创建时间"  prop="user8">
                  <el-date-picker
                    v-model="formInline.user8"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                  </el-date-picker>
                </el-form-item>
              </div>
              <div class="el-col el-col-6" style="padding-left: 10px; padding-right: 10px;">
                &nbsp;
              </div>
            </div>
          </el-collapse-transition>
        </div>
        <div class="el-col el-col-2">
          <div class="el-row">
            <el-form-item style="float:right">
              <el-button size="medium" type="primary" @click="resetForm('formInline')">重置</el-button>
            </el-form-item>
          </div>
          <div class="el-row">
            <el-form-item style="float:right">
              <el-button size="medium" type="info" @click="onSubmit">查询</el-button>
            </el-form-item>
          </div>

        </div>
      </div>
    </el-form> -->

    <!--折叠-->
   <!--  <div class="fold-search">
      <div class="fold-line"></div>
      <span class="fold-box gray2" @click="show1 = !show1" v-show="!show1">展开</span>
      <span class="fold-box gray2" @click="show1 = !show1" v-show="show1">收起</span>
    </div> -->




    <!--固定列用fixed属性-->

    <Table :columns="columns1" :data="tableData"></Table>
 
 
  </div>
</template>
<script>
  export default {
    methods: {

    },//methods


    data() {
      return {

        columns1: [
                    {
                        title: '时间',
                        key: 'date'
                    },
                    {
                        title: '名字',
                        key: 'name'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    },
                    {
                        title: '编号',
                        key: 'zip'
                    },


                ],
        //搜索表单折叠是否显示
        show1:false,
        //表格
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]

      }
    }//data
  }
</script>
