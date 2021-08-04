<template>
    <el-table
            :header-cell-style="{background:'#f9f9f9',color:'#333'}"
            :data="tableData"
            style="width: 100%;font-size: 17px;font-weight: 500"
            :default-sort="{prop: 'date', order: 'descending'}">
        <el-table-column

                prop="cn_short"
                label="地区"
                sortable
                width="100">
        </el-table-column>
        <el-table-column
                prop="TOTAL_VACCINATIONS"
                label="累计接种人数"
                sortable
                width="160">
        </el-table-column>
        <el-table-column
                prop="PERSONS_VACCINATED_1PLUS_DOSE_PER100"
                label="每百人接种人数"
                width="180">
        </el-table-column>
        <el-table-column
                prop="VACCINES_USED"
                label="疫苗种类"
                width="200">
        </el-table-column>
        <el-table-column
                prop="DATE_UPDATED"
                label="时间"
                :formatter="formatter">
        </el-table-column>
    </el-table>
</template>

<script>
    import {getvacc} from "../../network/home";

    export default {
        name: "Gxiangqing",
        data() {
            return {
                tableData: []
            }
        },
        created() {
            var dt = JSON.parse(sessionStorage.getItem('vaccall'))
            this.tableData = dt['vaccination-data']
            // this.getvacc()
        }
    }
</script>