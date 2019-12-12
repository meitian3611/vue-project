<template>
  <div class="detail_drama">
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
      path: 'drama.json'
    }
  }
}
</script>

<style>

</style>
