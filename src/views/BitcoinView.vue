<template>
  <div class="main">
    <TheBitcoin
      v-if="bitcoinMarketChart && isLoaded"
      :msg="'bitcoin'"
      :data="bitcoinSimple"
      :chart="bitcoinMarketChart"
    />
  </div>
</template>

<script async setup lang="ts">
import TheBitcoin from "../components/TheBitcoin.vue";
import useBitcoinData from "@/composables/useBitcoinData";
const { bitcoinMarketChart, bitcoinSimple, isLoaded } = useBitcoinData();
</script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-flow: column wrap;
}
</style>
