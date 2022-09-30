<template>
  <div
    class="text-neutral-grey font-body shadow-lg rounded-lg p-8 m-2 bg-gradient-to-t from-primary to-secondary coin-card"
  >
    <CoinCardHeader :currentData="currentData" />
    <div class="text-tertiary font-bold text-2xl text-center">
      {{ setCurrency(props.data.bitcoin.brl) }}
    </div>
    <CoinLineChart :data="data" :chart="chart" />
  </div>
</template>

<script setup lang="ts">
import CoinLineChart from "@/components/CoinLineChart.vue";
import useCurrency from "@/composables/useCurrency";
import CoinCardHeader from "@/components/CoinCardHeader.vue";
import type CoinMarketChartInterface from "@/modules/interfaces/CoinMarketChartInterface";
const { setCurrency } = useCurrency();
type Coin = {
  bitcoin: {
    brl: number;
    brl_24h_change: number;
    brl_24h_vol: number;
    brl_market_cap: number;
  };
};

const props = defineProps<{
  data: Coin;
  chart: CoinMarketChartInterface;
  currentData: any;
}>();
</script>

<style scoped lang="scss">
.coin-card {
  display: flex;
  flex-flow: column wrap;
  gap: 20px;
  &__header {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-auto-flow: dense;
    gap: 10px;
  }
}
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
