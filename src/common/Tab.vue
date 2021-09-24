<template>
  <div class="tabs">
      <!--大小 size='small'--> <!--v-for遍历tags-->  <!--首页不能删除 :closable="tag.name !== 'home'"-->
      <el-tag :key="tag.name" size="medium" v-for="tag in tags" :closable="tag.name !== 'home'" :disable-transitions="false" @close="handleClose(tag)" @click="changeMenu(tag)" :effect="$route.name === tag.name ? 'dark' : 'plain'">
        {{tag.label}}
      </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex' // 引入vuex中的mapState，mapMutations
export default {
  components: {},
  props: {},
  data () {
    return {
      // dynamicTags: ['标签一', '标签二', '标签三'],
      // inputVisible: false,
      // inputValue: ''
    }
  },
  watch: {},
  computed: {
    ...mapState({ // 获取tabsList，在module中，则获取 state.tab.tabsList
      tags: state => state.tab.tabsList
    })
  },
  methods: {
    ...mapMutations({ // 调用vuex中的close方法
      close: 'closeTab'
    }),
    handleClose (tag) {
      this.close(tag)
    },
    changeMenu (item) {
      this.$router.push({name: item.name})
      this.$store.commit('selectMenu', item)
    }
  },
  created () {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
.tabs {   /*调整tabs样式*/
    padding: 10px;
  }
  .tabs .el-tag {
    margin-right: 15px;
    font-size: 16px;
  }
</style>
