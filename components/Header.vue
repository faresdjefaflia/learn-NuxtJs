<template>
  <header class=" bg-cyan-600">
    <section class="px-7 py-4 m-auto flex justify-between text-white">
      <div>
        <NuxtLink to="/" class="font-black text-xl">
          LOGO
        </NuxtLink>
      </div>

      <nav>
        <ul class="flex justify-between w-32 text-base font-light">
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
