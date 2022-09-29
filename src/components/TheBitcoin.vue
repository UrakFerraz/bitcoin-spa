<template>
  <div
    class="text-neutral-grey font-body shadow-lg rounded-lg p-8 m-2 bg-gradient-to-t from-primary to-secondary coin-card"
  >
    <div class="coin-card__header">
      <a
        class="text-neutral-grey text-sm font-xs button"
        :href="currentData.links.homepage[0]"
        target="_blank"
      >
        <img :src="currentData.image.small" alt="" />
      </a>
      <div class="coin-card__title">
        <p class="font-semibold text-neutral-light text-sm font-thin capitalize text-2xl">
          {{ currentData.id }}
        </p>
        <p class="text-neutral-light text-sm font-thin uppercase">
          {{ currentData.symbol }}
        </p>
      </div>
    </div>
    <div class="text-tertiary font-bold text-2xl text-center">
      {{ setCurrency(props.data.bitcoin.brl) }}
    </div>
    <div class="chart-wrapper">
      <LineChart :coinData="chart" :type="'market_caps'" />
      <p
        class="text-neutral-grey shadow-lg rounded-lg p-3 mb-6 bg-gradient-to-t from-terty to-secondary"
      >
        24H
      </p>
    </div>
    <div>Bitcoin 24h vol: {{ setCurrency(props.data.bitcoin.brl_24h_vol) }}</div>
    <div>Bitcoin 24h change: {{ setCurrency(props.data.bitcoin.brl_24h_change) }}</div>
    <div>Bitcoin market cap: {{ setCurrency(props.data.bitcoin.brl_market_cap) }}</div>
    <!-- <p class="text-neutral-light text-sm font-thin">
      {{ currentData.description.en }}
    </p> -->
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import LineChart from "./LineChart.vue";
import useCurrency from "@/composables/useCurrency";
import type CoinMarketChartInterface from "@/modules/interfaces/CoinMarketChartInterface";
const { setCurrency } = useCurrency();
type Bitcoin = {
  bitcoin: {
    brl: number;
    brl_24h_change: number;
    brl_24h_vol: number;
    brl_market_cap: number;
  };
};

const props = defineProps<{
  data: Bitcoin;
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
}
</style>
