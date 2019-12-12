<template>
  <div class="city">
    <City @cityAddr='fn($event)'></City>
  </div>
</template>

<script>
import City from '../components/city'
export default {
  components: {
    City
  },
  methods: {
    fn ($event) {
      console.log($event)
    }
  }
}
</script>

<style>
</style>
