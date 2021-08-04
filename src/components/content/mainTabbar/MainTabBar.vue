<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <template v-slot:item-text>国内疫情</template>
    </tab-bar-item>
    <tab-bar-item path="/foreign">
      <template v-slot:item-text>海外疫情</template>
    </tab-bar-item>
    <tab-bar-item path="/global">
      <template v-slot:item-text>全球疫苗</template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '../../common/tabbar/TabBar'
  import TabBarItem from '../../common/tabbar/TabBarItem'
  export default {
    name: "MainTabBar",
    components:{
      TabBarItem,TabBar
    }
  }
</script>

<style scoped>

</style>
