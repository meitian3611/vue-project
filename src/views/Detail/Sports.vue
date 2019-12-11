<template>
  <div class="detail_sports">
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
      path: 'sports.json'
    }
  }
}
</script>

<style>

</style>
