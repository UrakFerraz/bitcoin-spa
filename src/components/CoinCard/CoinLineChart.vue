<template>
  <div class="chart-wrapper" v-if="chart !== undefined">
    <LineChartSvg :coinData="chart" :type="'market_caps'" :coin="coinId" />
    <p
      class="text-neutral-grey text-xs shadow-lg rounded-lg p-3 mb-3 bg-gradient-to-t from-terty to-secondary"
    >
      24h
    </p>
    <span class="text-center"
      >Vol: {{ setCurrency(props.data[coinId].brl_24h_vol) }}</span
    >
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import LineChartSvg from "./LineChartSvg.vue";
import useCurrency from "@/composables/useCurrency";
import type CoinMarketChartInterface from "@/modules/interfaces/CoinMarketChartInterface";
const { setCurrency } = useCurrency();
const props = defineProps<{
  data: any;
  chart: CoinMarketChartInterface;
  coinId: string;
}>();

onMounted(() => {
  console.log(props.data);
});
</script>

<style scoped lang="scss">
.chart-wrapper {
  display: grid;
  align-content: center;
  align-items: end;
  & svg {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
  & p {
    justify-self: center;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
  & span {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    align-self: start;
  }
}
</style>
