<template>
    <Table :columns="columns1" :data="tableData"></Table>
</template>
<script>
    export default {
        data () {
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
            }
        }
    }
</script>