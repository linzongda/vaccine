<template>
    <el-table
            :header-cell-style="{background:'#f9f9f9',color:'#333'}"
            :data="tableData"
            stripe="true"
            style="width: 100%;font-size: 17px;font-weight: 500"
            :default-sort="{prop: 'date', order: 'descending'}">
        <el-table-column
                prop="cn_short"
                label="地区"
                sortable
                width="90">
        </el-table-column>
        <el-table-column
                prop="cases_Per_Hundred_Thousand"
                label="每十万人确诊人数"
                sortable
                width="180">
        </el-table-column>
        <el-table-column
                prop="confirmed"
                label="新增确诊"
                sortable
                width="120">
        </el-table-column>
        <el-table-column
                prop="cumulative_Confirmed"
                label="累计确诊"
                width="100">
        </el-table-column>
        <el-table-column
                prop="deaths"
                label="新增死亡"
                width="100">
        </el-table-column>
        <el-table-column
                prop="cumulative_Deaths"
                label="累计死亡"
                width="100">
        </el-table-column>
        <el-table-column
                prop="address"
                label="详情"
                min-width="10%"
                :formatter="formatter">
            <template #default="scope">
                <!--                      @click="handleEdit(scope.$index, scope.row)" -->
                <img size="mini"
                     @click="btnClick(scope.row)" src="../../assets/imgs/home/详情.svg" alt="">
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    import {getworldLatest} from "../../network/home";

    export default {
        name: "Fxiangqing",
        data() {
            return {
                datas: null,
                tableData: [],
                name: null
            }
        },
        created() {
            var dt = JSON.parse(sessionStorage.getItem('worldLatestall'))
            console.log(dt)
            this.tableData = dt.worldLatest
        },
        methods: {
            btnClick(row) {
                let _this = this;
                //_this.$router.push(`/gxiangqing/${row.en_short}`);
                _this.$router.push({
                      path:`/gxiangqing/${row.en_short}`,
                      query:{
                        en_short: row.en_short,
                        cn_short: row.cn_short,
                        iso2: row.countryCode
                      }
                    }

                );
                // this.$router.push({
                //     name:'/gxiangqing',
                //     params:{
                //         age:18
                //     }
                // });

                // this.$router.push({
                //     path:'/gxiangqing',
                //     query:{
                //         name:row.en_short
                //     }
                // });
            },
        }
    }
</script>