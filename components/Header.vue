
<template>
  <header class=" bg-cyan-900">
    <section class="py-4 m-auto flex justify-between text-white max-w-screen-xl">
      <div>
        <p class="font-black text-xl logo">
          LOGO
        </p>
      </div>

      <nav>
        <ul class="flex justify-between w-64 text-base font-light">
          <li>
            <NuxtLink to="/" class="hover:border-b-2 py-2">
              Home
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/about" class="hover:border-b-2 py-2">
              About
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/login" class="hover:border-b-2 py-2">
              Login
            </NuxtLink>
          </li>
          <li>
            <a class="hover:border-b-2 py-2" href="https://github.com/faresdjefaflia/learn-NuxtJs">Github</a>
          </li>
        </ul>
      </nav>
    </section>
  </header>
</template>

<script>
export default {
  name: 'HeaderComp',
  mounted () {
    const Logo = document.querySelector('.logo')
    Logo.onclick = () => {
      window.location = '/'
    }
  }
}
</script>

<style scoped>
  a.nuxt-link-exact-active{
    border-bottom: solid 2px #fff;
  }
  .logo{
    cursor: pointer;
  }
</style>
