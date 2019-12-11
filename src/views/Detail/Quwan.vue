<template>
  <div class="detail_quwan">
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
      path: 'quwan.json'
    }
  }
}
</script>

<style>

</style>
