<script setup lang="ts">
import { resolveRenderer } from "../components/componentMapping";

const { $useComposition } = useNuxtApp();

const { data } = await $useComposition({ slug: `/` });
const composition = computed(() => data.value.composition);

//const { data: composition } = await useEnhance(data);
</script>

<template>
  <Composition
    v-if="composition"
    :data="composition"
    :resolve-renderer="resolveRenderer"
  >
    <SlotContent name="recepies" />
  </Composition>

  <pre>
    {{ composition }}
  </pre>
</template>
