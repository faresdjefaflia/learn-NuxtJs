/* eslint-disable vue/multi-word-component-names */
<template>
  <div>
    <div class="flex justify-between items-center w-44"> 
      <img class="rounded-full w-14" :src="author.image">
      <h1 class="text-lg font-black">{{ author.name }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true
    }
  }
}
</script>
