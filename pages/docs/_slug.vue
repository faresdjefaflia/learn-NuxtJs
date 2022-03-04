<template>
  <main class="flex m-auto">
    <section class="linkpost w-full overflow-auto h-screen max-w-xs">
      <ul class="p-5">
        <li>
          <NuxtLink class="my-4 py-4 w-full inline-block text-center bg-slate-900 text-white" to="/docs/post">
            TO POST
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="my-4 py-4 w-full inline-block text-center bg-slate-900 text-white" to="/docs/post02">
            TO POST2
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="my-4 py-4 w-full inline-block text-center bg-slate-900 text-white" to="/docs/post03">
            TO POST3
          </NuxtLink>
        </li>
      </ul>
    </section>

    <section class="flex w-4/5 justify-end">
      <article class="w-3/5 p-6 mr-10">
        <nuxt-content :document="docs" />
      </article>

      <section class="linkpage p-5">
        <nav>
          <ul>
            <li v-for="link of docs.toc" :key="link.id">
              <NuxtLink class="py-2 px-3 my-3 w-full inline-block text-center bg-slate-900 text-white" :to="`#${link.id}`">{{ link.text }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </section>
    </section>
  </main>
  
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const docs = await $content("docs", params.slug).fetch();
    return { docs };
  },
  head(){
    return{
      title:'Docs'
    }
  }
}
</script>

<style scoped>
  a.nuxt-link-exact-active{
    border: none;
    background-color: black;
  }
  .linkpost{
    max-width: 270px;
    position: fixed;
    left: 0;
  }
  .linkpage{
    position: fixed;
    right: 0;
  }
</style>