<template>
  <div class="coin-card__header">
    <a
      class="text-neutral-grey text-sm font-xs button"
      :href="props.currentData.links.homepage[0]"
      target="_blank"
    >
      <img :src="props.currentData.image.small" alt="" />
    </a>
    <div class="coin-card__title">
      <p class="text-neutral-light text-sm font-thin capitalize text-2xl">
        {{ props.currentData.id }}
      </p>
      <p class="text-neutral-grey text-sm font-light uppercase">
        {{ props.currentData.symbol }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  currentData: any;
}>();
</script>

<style scoped lang="scss">
.coin-card__header {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-auto-flow: dense;
  gap: 10px;
}
</style>
