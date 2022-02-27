<template>
  <Main01 />
</template>

<script>
import Main01 from '../components/login/login-comp.vue'
export default {
  name: 'IndexPage',
  components: {
    Main01
  },
  head () {
    return {
      title: 'Login'
    }
  }
}
</script>
