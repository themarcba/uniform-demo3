<script setup lang="ts">
const { $useComposition } = useNuxtApp();

const { data } = await $useComposition({ slug: `/` });
const composition = computed(() => data.value.composition);
</script>

<template>
  <pre>
        {{ composition }}
    </pre
  >
</template>
