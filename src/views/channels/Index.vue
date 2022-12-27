<template>
  <div class="layui-container">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md8">
        <imooc-List></imooc-List>
      </div>
      <div class="layui-col-md4">
        <imooc-Tips></imooc-Tips>
        <imooc-Sign></imooc-Sign>
        <imooc-HotList></imooc-HotList>
        <imooc-Ads></imooc-Ads>
        <imooc-Links></imooc-Links>
      </div>
    </div>
  </div>
</template>

<script>
import Panel from '@/components/Panel'
import Tips from '@/components/sidebar/Tips'
import Sign from '@/components/sidebar/Sign.vue'
import HotList from '@/components/sidebar/HotList.vue'
import Ads from '@/components/sidebar/Ads.vue'
import Links from '@/components/sidebar/Links.vue'
import List from '@/components/contents/List.vue'

export default {
  name: 'index-channel',
  components: {
    'imooc-Tips': Tips,
    'imooc-Sign': Sign,
    'imooc-HotList': HotList,
    'imooc-Ads': Ads,
    'imooc-Links': Links,
    'imooc-List': List
  }
}
</script>

<style lang="scss" scoped>
</style>
