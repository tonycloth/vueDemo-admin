<template>
  <el-container style="height: 100%">
    <el-aside width="auto"><Aside/></el-aside>
    <el-container>
      <el-header><Header/></el-header>
      <Tab></Tab>
      <el-main>
        <!--路由跳转显示，必须先占位-->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from '@/common/Aside.vue'
import Header from '@/common/Header.vue'
import Tab from '@/common/Tab.vue'
export default {
  components: {
    Aside,
    Header,
    Tab
  },
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
  .el-header{
    background-color: #fff;
    color: #333;
    border-bottom: 1px solid #B3C0D1
  }
  // .el-aside {
  //   background-color: #D3DCE6;
  //   color: #333;
  //   text-align: center;
  //   line-height: 200px;
  // }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
</style>
