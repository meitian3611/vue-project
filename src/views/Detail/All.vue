<template>
  <div class="detail_all">
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
      path: 'all.json'
    }
  }
}
</script>

<style>

</style>
