<template>
  <div class="detail_vocal">
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
      path: 'vocal.json'
    }
  }
}
</script>

<style>

</style>
