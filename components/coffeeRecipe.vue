<script lang="ts" setup>
import type { ComponentInstance } from "@uniformdev/canvas";
const props = defineProps<{
  component: ComponentInstance;
}>();
</script>

<template>
  <pre>{{ component.parameters }}</pre>
</template>
