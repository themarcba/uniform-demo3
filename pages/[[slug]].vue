<script setup lang="ts">
const { $useComposition } = useNuxtApp()
console.log(useNuxtApp())

const { data } = await $useComposition({ slug: `/` })
console.log(data.value)
const composition = computed(() => data.value.composition)
</script>

<template>
    <div>
        <!-- <Composition v-if="composition" :data="composition">
            <pre>{{ composition }}</pre>
        </Composition> -->
    </div>
</template>
