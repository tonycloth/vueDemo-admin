<template>
  <header>
    <div class="l-content">
      <el-button type="primary" icon="el-icon-menu" size="mini" @click="isC ()"></el-button>   <!--菜单栏伸缩按钮-->
      <el-breadcrumb separator-class="el-icon-arrow-right" separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item :to="curent.path" v-if="curent">{{curent.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">  <!--用户信息-->
      <el-dropdown trigger="click" size="mini">
        <span class="el-dropdown-link">
          <img :src="userImg" class="user">  <!--绑定图片-->
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-switch-button">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {},
  props: {
  },
  data () {
    return {
      userImg: require('../assets/head.jpg')
    }
  },
  watch: {},
  computed: mapState({
    curent: state => state.tab.currentMenu // 直接获取当前菜单的值,因为 tab.js在index.js中是modules中，不在公共组件中，所以要使用state.模块名.属性名
  }),
  methods: {
    isC () {
      this.$store.state.isCollapse = !this.$store.state.isCollapse
    }
  },
  created () {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
header {   /*header容器，一个template必须只能有一个容器*/
    display: flex;  /*弹性布局*/
    height: 100%;
    align-items: center;
    justify-content: space-between; /*不用float浮动布局，采用两边布局*/
  }
.l-content {    /*左边的菜单拉伸按钮*/
    display: flex;
    align-items: center;
  }
.l-content .el-button{   /*面包屑跟 菜单按钮的间距*/
  margin-right: 20px;
}

.r-content .user {   /*设置图片的大小，以及圆滑度*/
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{  /*面包屑当前激活菜单样式优化*/
    color: #666666;
    font-weight: normal;
  }
</style>
