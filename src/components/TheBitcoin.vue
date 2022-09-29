<template>
  <div
    class="text-neutral-grey font-body font-bold shadow-lg rounded-lg p-8 m-8 bg-gradient-to-t from-primary to-secondary"
  >
    <h1 class="bg-secondary-100 text-secondary-200">{{ msg }}</h1>
    {{ data }}
    <div>Bitcoin: R$ {{ props.data.bitcoin.brl }}</div>
    <div>Bitcoin 24h vol: R$ {{ props.data.bitcoin.brl_24h_vol }}</div>
    <div>Bitcoin 24h change: R$ {{ props.data.bitcoin.brl_24h_change }}</div>
    <div>Bitcoin market cap: R$ {{ props.data.bitcoin.brl_market_cap }}</div>
    <LineChart :coinData="chart" :type="'market_caps'" />
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import LineChart from "./LineChart.vue";
type Bitcoin = {
  bitcoin: {
    brl: number;
    brl_24h_change: number;
    brl_24h_vol: number;
    brl_market_cap: number;
  };
};

type BitcoinMarketChartInterface = Ref<{
  market_caps: [number, number][];
  prices: [number, number][];
  total_volumes: [number, number][];
}>;

const props = defineProps<{
  msg: string;
  data: Bitcoin;
  chart: BitcoinMarketChartInterface;
}>();
</script>

<style scoped></style>
