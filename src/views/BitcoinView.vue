<template>
  <div class="main">
    <TheCoin
      v-if="coinMarketChart && isLoaded"
      :data="coinSimple"
      :chart="coinMarketChart"
      :current-data="coinCurrentData"
    />
  </div>
</template>

<script async setup lang="ts">
import TheCoin from "@/components/TheCoin.vue";
import useCoinData from "@/composables/useCoinData";
const { coinMarketChart, coinSimple, isLoaded, coinCurrentData } = useCoinData(
  "bitcoin",
  10000
);
</script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-flow: column wrap;
  align-content: center;
}
</style>
