<template>
  <nuxt-content class="content-wrapper" :document="document" attr="value" />
</template>

<script>
export default {
  props: ['document'],
};
</script>

<style lang="postcss">
.content-wrapper {
  h1 {
    @apply text-4xl mb-8;
  }

  h2 {
    @apply text-2xl;
  }

  h3 {
    @apply text-xl;
  }

  h4 {
    @apply text-lg;
  }

  h5 {
    @apply text-base;
  }

  h2,
  h3,
  h4,
  h5 {
    @apply font-semibold my-8 relative;
  }

  p,
  li,
  td {
    a[href] {
      @apply text-purple-600;

      &:hover {
        @apply underline;
      }
    }
  }

  p + p {
    @apply mt-4;
  }

  ul {
    @apply px-8 my-4 list-disc;

    li + li {
      @apply mt-2;
    }
  }

  .nuxt-content-highlight {
    @apply my-4 text-sm;
  }
}
</style>
