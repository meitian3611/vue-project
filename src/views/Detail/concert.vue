<template>
  <div class="detail_concert">
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
      path: 'concert.json'
    }
  }
}
</script>

<style>

</style>
