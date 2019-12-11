<template>
  <div class="detail_ballet">
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
      path: 'ballet.json'
    }
  }
}
</script>

<style>

</style>
