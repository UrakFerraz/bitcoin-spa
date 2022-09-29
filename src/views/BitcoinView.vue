<template>
  <div class="main">
    <TheBitcoin
      v-if="coinMarketChart && isLoaded"
      :data="coinSimple"
      :chart="coinMarketChart"
      :current-data="coinCurrentData"
    />
  </div>
</template>

<script async setup lang="ts">
import TheBitcoin from "../components/TheBitcoin.vue";
import useCoinData from "@/composables/useCoinData";
const { coinMarketChart, coinSimple, isLoaded, coinCurrentData } = useCoinData("bitcoin");
</script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-flow: column wrap;
  align-content: center;
}
</style>
