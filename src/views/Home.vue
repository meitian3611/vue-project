<template>
  <div class="HomePage">
    <h1>主页面</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      itemList: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      axios.get('../../Home.json').then(
        res => {
          console.log(res.data)
        },
        response => {
          console.log('error')
        }
      )
    }
  }
}
</script>

<style lang="scss">
.HomePage {
  color: #ff4400;
}
</style>
