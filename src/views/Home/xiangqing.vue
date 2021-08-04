<template>
    <el-table
            :header-cell-style="{background:'rgb(238,245,255)',color:'#333'}"
            :data="tableData"
            style="width: 100% ;font-size: 17px;font-weight: 500"
            stripe="true"
            :default-sort = "{prop: 'date', order: 'descending'}">
        <el-table-column
                prop="area"
                label="地区"
                sortable
                width="150">


        </el-table-column>
        <el-table-column
                prop="nowConfirm"
                label="现有确诊"
                sortable
                width="150">
        </el-table-column>
        <el-table-column
                prop="confirm"
                label="累计确诊"
                sortable
                width="150">
        </el-table-column>
        <el-table-column
                prop="heal"
                label="治愈"
                sortable
                width="150">
        </el-table-column>
        <el-table-column
                prop="dead"
                label="死亡"
                sortable
                :formatter="formatter">
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "xiangqing",
        data() {
            return {
                tableData: []
            }
        },
        created() {
            var dt = JSON.parse(sessionStorage.getItem('china3'))
            this.tableData = dt['provinceList']
        },
        methods: {
            // btnClick(){
            //         this.$router.push('/xiangqing');
            //     }
        }    //
    }
</script>