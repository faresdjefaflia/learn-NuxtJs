<template>
  <div>
    <Main01 />
    <Main02 />
  </div>
</template>

<script>
import Main01 from '../components/about/main-01.vue'
import Main02 from '../components/about/main-02.vue'

export default {
  name: 'IndexPage',
  components: {
    Main01,
    Main02
  },
  head () {
    return {
      title: 'About'
    }
  }
}
</script>
