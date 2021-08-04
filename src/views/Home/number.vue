<template>
    <div class="time">统计截止至：<span>2021-06-15</span></div>
    <br>
        <el-space wrap class="items">
            <el-card class="box-card1" style="width: 245px">
                <template #header>
                    <div class="card-header">
                        <span>本土现有确诊</span>
                    </div>
                </template>
                <div class="text1 item">
                    {{data[0].localConfirm}}
                </div>
            </el-card>
            <el-card class="box-card2" style="width: 245px">
                <template #header>
                    <div class="card-header">
                        <span>现有确诊</span>
                    </div>
                </template>
                <div class="text2 item">
                    {{data[0].nowConfirm}}
                </div>
            </el-card>
            <el-card class="box-card3" style="width: 245px">
                <template #header>
                    <div class="card-header">
                        <span>累计确诊</span>

                    </div>
                </template>
                <div class="text3 item">
                    {{data[0].confirm
                    }}
                </div>
            </el-card>
            <el-card class="box-card4" style="width: 245px">
                <template #header>
                    <div class="card-header">
                        <span>无症状感染者</span>

                    </div>
                </template>
                <div class="text4 item">
                    {{data[0].noInfect}}
                </div>
            </el-card>
            <el-card class="box-card5" style="width: 245px">
                <template #header>
                    <div class="card-header">
                        <span>境外输入</span>

                    </div>
                </template>
                <div class="text5 item">
                    {{data[0].importedCase}}
                </div>
            </el-card>
            <el-card class="box-card6" style="width: 245px">
                <template #header>
                    <div class="card-header">
                        <span>累计死亡</span>
                    </div>
                </template>
                <div class="text6 item">
                    {{data[0].dead}}
                </div>
            </el-card>
        </el-space>
</template>

<script>
    export default {
        name: "number",
        data(){
            return{
                data:[]
            }
        },
        created() {
            // localConfirm nowConfirm confirm
            // noInfect importedCase dead
            this.data= JSON.parse(sessionStorage.getItem('china1'))
            // console.log(this.data[0].date)
        }

    }
</script>

<style scoped>

span {
    font-size: 20px;
}
.time{
    background-color: rgb(240,240,240);
    border-radius: 8px;
}
.items{
    text-align: center;
}
.time span{
    color: red;
}
.item {
    font-size: 25px;
    font-weight: bold
}

.box-card1, .box-card2, .box-card3, .box-card4 {
    clear: both
}

.box-card1 {
    background-color: rgb(255, 248, 248);
}

.text1 {
    color: rgb(229,118,49);
}

.box-card2 {
    background-color: rgb(255, 244, 244);
}

.text2 {
    color: rgb(230,28,29);
}

.box-card3 {
    background-color: rgb(255,244,244);
}

.text3 {
    color: rgb(190,33,33);
}

.box-card4 {
    background-color: rgb(254,247,255);
}

.text4 {
    color: rgb(174,58,198);
}
.box-card5 {
    background-color: rgb(241,245,255);
}

.text5 {
    color: rgb(78,139,230);
}
.box-card6 {
    background-color: rgb(243,246,248);
}

.text6 {
    color: rgb(78,90,101);
}
</style>