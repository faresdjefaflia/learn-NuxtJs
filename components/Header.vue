<template>
  <header class=" bg-cyan-600">
    <section class="px-7 py-4 m-auto flex justify-between text-white">
      <div>
        <NuxtLink to="/" class="font-black text-xl">
          LOGO
        </NuxtLink>
      </div>

      <nav>
        <ul class="flex justify-between w-64 text-base font-light">
          <li>
            <NuxtLink to="/" class="hover:border-2 py-2">
              Home
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/about" class="hover:border-2 py-2">
              About
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/login" class="hover:border-2 py-2">
              Login
            </NuxtLink>
          </li>
          <li>
            <a class="hover:border-b-2 py-2" href="https://github.com/faresdjefaflia/learn-NuxtJs">Github -></a>
          </li>
        </ul>
      </nav>
    </section>
  </header>
</template>

<script>
export default {
  name: 'HeaderComp'
}
</script>

<style scoped>
  a.nuxt-link-exact-active{
    border: 2px #fff;
  }
</style>
