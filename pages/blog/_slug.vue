<template>
  <main>
    <article class="max-w-7xl m-auto p-6">
    <div class="text-center py-5">
      <h1 class="font-bold text-4xl">{{ blog.title }}</h1>
      <p class="text-3xl">{{ blog.description }}</p>
    </div>

    <author :author="blog.author" />

    <div class="w-4/5 m-auto my-5">
      <nuxt-content :document="blog" />
    </div>
  </article>
  </main>
</template>

<script>

export default {
  async asyncData ({ $content, params }) {
    const blog = await $content('blog', params.slug).fetch()
    return { blog }
  },
}
</script>
