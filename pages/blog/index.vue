<template>
  <main class="py-8 max-w-7xl m-auto">
    <h1 class="text-4xl font-black">Blog Posts:</h1>
    <ul class="p-5">
      <li class="w-1/2 m-auto my-4" v-for="article of blog" :key="article.slug">
        <!-- BOX BLOGS -->
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <div class="flex m-auto border-2 rounded-md p-3">
            <div>
              <img class="w-64" :src="article.img">
            </div>
            <div class="ml-3">
              <h2 class="text-2xl mb-1 font-bold">{{ article.title }}</h2>
              <p class="font-light text-sm">by {{ article.author.name }}</p>
              <p class="text-base mt-4">{{ article.description }}</p>
            </div>
          </div>
        </NuxtLink>
        <!-- BOX BLOGS -->
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const blog = await $content('blog')
      .fetch()

    return {
      blog
    }
  },
  head(){
    return{
      title: 'Blogs'
    }
  }
}
</script>
