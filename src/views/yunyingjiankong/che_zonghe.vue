<template>
  <div class="hello">
    <el-form class="pt20" label-position="right" label-width="100px" :model="formInline" ref="formInline" >
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
    </el-form>

    <!--折叠-->
    <div class="fold-search">
      <div class="fold-line"></div>
      <span class="fold-box gray2" @click="show1 = !show1" v-show="!show1">展开</span>
      <span class="fold-box gray2" @click="show1 = !show1" v-show="show1">收起</span>
    </div>


    <div class="table-top-button">
      <router-link to="car_model_build"><el-button type="primary" size="medium" class="buttonminw98">创建</el-button></router-link>
      <el-button size="medium"  @click="leadingInTable" class="buttonminw98">批量导入</el-button>
      <el-button size="medium"  @click="exportTable" class="buttonminw98">批量导出</el-button>
    </div>

    <!--固定列用fixed属性-->

    <Table :columns="columns1" :data="tableData"></Table>
    <!-- <el-table
      :data="tableData"

      border
      @selection-change="handleSelectionChange"
      style="width: 100%">
      <el-table-column
        fixed
        type="selection"
        width="36">
      </el-table-column>
      <el-table-column
        fixed
        prop="date"
        label="车辆模板编号"
        width="200">
      </el-table-column>
      <el-table-column
        prop="name"
        label="车辆使用性质"
        width="200">
      </el-table-column>
      <el-table-column
        prop="province"
        label="车辆级别"
        width="120">
      </el-table-column>
      <el-table-column
        prop="city"
        label="车辆品牌"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="车辆型号"
        width="300">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="车型款式"
        width="120">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="公告号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="状态"
        width="300">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="创建时间"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="130">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">作废</el-button>
        </template>
      </el-table-column>
    </el-table> -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 50]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    methods: {
      //查看
      handleClick(row) {
        //this.$router.push('/data_center/car_model_detail?'+row.date);
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      //表单提交
      onSubmit() {
        console.log('submit!');
      },

      //表格带选中功能
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
        });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      //监听选中表格复选框事件
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      //导入导出表格
      leadingInTable(){
        //文件上传
      },
      exportTable(){
        if(!this.multipleSelection || this.multipleSelection.length == 0){
          this.$message({
            message: '请选择需要导出的内容',
            type: 'warning'
          });
        }else{
          console.log(this.multipleSelection);
        }
      },
      //分页插件
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }

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
        }],

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
        //分页插件当前页
        currentPage:1,

      }
    }//data
  }
</script>
