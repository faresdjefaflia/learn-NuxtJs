<template>
  <main>
    <Main01 />
    <Mainhome />
    <Main02 />
  </main>
</template>

<script>
import Main01 from '../components/about/main-01.vue'
import Mainhome from '../components/home/main/main-02.vue'
import Main02 from '../components/about/main-02.vue'

export default {
  name: 'IndexPage',
  components: {
    Main01,
    Main02,
    Mainhome
  },
  head () {
    return {
      title: 'About'
    }
  }
}
</script>
