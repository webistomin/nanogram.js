<template>
  <div>
    <h1>Home</h1>
    <nuxt-content :document="page"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, params, store }) {
    const page = await $content('hello').fetch();
    return {
      page,
    };
  },
})
</script>
