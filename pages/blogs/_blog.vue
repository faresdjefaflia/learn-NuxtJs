<template>
  <nuxt-content :document="page" />
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const page = await $content('blogs', params.blog).fetch()

    return {
      page
    }
  }
}
</script>
