<template>
  <section class="py-8 max-w-7xl m-auto">
    <ul class="p-5">
      <li class="" v-for="post of docs" :key="post.slug">
        <NuxtLink :to="{ name: 'docs-slug', params: { slug: post.slug } }">
          <h2 class="">{{ post.title }}</h2>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const docs = await $content('docs')
      .fetch()

    return {
      docs
    }
  },
  head(){
    return{
      title: 'Blogs'
    }
  }
}
</script>
