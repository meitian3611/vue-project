<template>
  <div class="detail_children">
    <detailCommon :path="path"></detailCommon>
  </div>
</template>

<script>
import detailCommon from '../../components/detailCommon'
export default {
  components: {
    detailCommon
  },
  data () {
    return {
      path: 'children.json'
    }
  }
}
</script>

<style>

</style>
