<script lang="ts" setup>
import type { ComponentInstance } from "@uniformdev/canvas";
const props = defineProps<{
  component: ComponentInstance;
}>();
</script>

<template>
  <fieldset>
    <legend>component</legend>
    <pre>{{ component.parameters }}</pre>
  </fieldset>
</template>
