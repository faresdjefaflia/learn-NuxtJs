<template>
  <main>
    <Main01 />
    <Main02 />
    <Main03 />
  </main>
</template>

<script>
import Main01 from '~/components/home/main/main-01.vue'
import Main02 from '~/components/home/main/main-02.vue'
import Main03 from '~/components/home/main/main-03.vue'
export default {
  name: 'IndexPage',
  components: {
    Main01,
    Main02,
    Main03
  },
  head () {
    return {
      title: 'Home'
    }
  }
}
</script>
