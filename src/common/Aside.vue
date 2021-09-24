<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical"
    :collapse="isCollapse"
    >
    <el-menu-item>
      <h1>logo</h1>
    </el-menu-item>

    <el-menu-item :index="item.path" v-for="item in noChildren" :key="item.path" @click="clickMenu(item)">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu index="index" v-for="(item,index) in hasChildren" :key="index">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span>{{item.label}}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item :index="subItem.path" v-for="(subItem,subIndex) in item.children" :key="subIndex" @click="clickMenu(subItem)">{{subItem.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

  </el-menu>
</template>

<script>
import {mapGetters} from 'vuex'
import routes from '@/router'
export default {
  components: {},
  props: {
  },
  data () {
    return {
      asideMenu: routes
      // this.$router.options.routes
      // [
      // {
      //   path: '/video',
      //   label: '视频管理',
      //   name: 'video',
      //   icon: 'video-play'
      // },
      // {
      //   path: '/user',
      //   label: '用户管理',
      //   name: 'user',
      //   icon: 'user'
      // },
      // {
      //   label: '其他内容',
      //   icon: 'user',
      //   children: [
      //     {
      //       path: '/page1',
      //       label: '页面1',
      //       name: 'page1',
      //       icon: 'setting'
      //     },
      //     {
      //       path: '/page2',
      //       label: '页面2',
      //       name: 'page2',
      //       icon: 'setting'
      //     }
      //   ],
      //   index: ''
      // }
      // ]
    }
  },
  watch: {},
  computed: {
    ...mapGetters(['isCollapse']),
    // 计算属性，判断有无子菜单
    noChildren () {
      return this.asideMenu.filter(item => !item.children)
    },
    hasChildren () {
      return this.asideMenu.filter(item => item.children)
    }
  },
  methods: {
    clickMenu (item) {
      this.$router.push({name: item.name}) // 在选择菜单栏之前，先路由跳转到 对应的组件
      this.$store.commit('selectMenu', item) // commit 调用 tab.js中的 mutations中的selectMenu方法
    }
  },
  created () {
    console.log(routes)
  },
  mounted () {}
}
</script>
<style lang="scss" scoped>
h1 {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #B3C0D1;
}
.el-menu {
  height: 100%;
  border: none;
  & li {
    text-align: left;
  }
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
}
</style>
<style lang="">
  .el-menu-item-group__title {
    padding: 0;
  }
</style>
