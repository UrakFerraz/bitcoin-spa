<template>
  <div class="main">
    <TheCoin
      class="main__coin-card"
      v-if="isLoaded"
      :data="coinSimple"
      :chart="coinMarketChart!"
      :current-data="coinCurrentData"
    />
    <TheCoin
      class="main__coin-card"
      v-else
      :data="coinSimple"
      :chart="coinMarketChart!"
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
  display: grid;
  grid-template-columns: 1fr;
  align-content: center;
  justify-items: center;
  background: transparent;
  &__coin-car {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
}
</style>
