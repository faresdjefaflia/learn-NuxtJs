<template>
  <section class="bg-slate-700 w-full flex justify-center items-center login">
    <div class="w-2/5 m-auto">
      <h1 class="font-black text-6xl text-center mb-8 text-white">
        LOGIN
      </h1>
      <input class="outline-none block m-auto border-2 rounded-md border-slate-900 px-2 py-2 w-80 my-4" type="email" placeholder="Email">
      <input class="outline-none block m-auto border-2 rounded-md border-slate-900 px-2 py-2 w-80 my-4" type="password" placeholder="Password">
      <input class="w-80 block m-auto border-2 rounded-md px-3 py-2 border-slate-900 bg-slate-900 text-white transition-all hover:bg-slate-800" type="submit" value="Login">
    </div>
  </section>
</template>

<style scoped>
  .login{
    height: calc(100vh - 108px);
  }
</style>
