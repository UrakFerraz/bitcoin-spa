<template>
  <div
    v-if="props.data !== undefined"
    class="text-neutral-grey font-body shadow-2xl rounded-lg p-8 m-2 coin-card"
  >
    <CoinCardHeader
      :current-data="props.currentData"
      v-if="props.currentData !== undefined"
    />
    <div class="text-tertiary font-bold text-2xl text-center">
      {{ setCurrency(props.data[props.coinId].brl) }}
    </div>
    <CoinLineChart :data="props.data" :chart="chart" :coin-id="props.coinId" />
  </div>
</template>

<script setup lang="ts">
import CoinLineChart from "./CoinLineChart.vue";
import useCurrency from "@/composables/useCurrency";
import CoinCardHeader from "./CoinCardHeader.vue";
import type CoinMarketChartInterface from "@/modules/interfaces/CoinMarketChartInterface";
import { onMounted } from "vue";
const { setCurrency } = useCurrency();

const props = defineProps<{
  data: any;
  chart: CoinMarketChartInterface;
  currentData: unknown;
  coinId: string;
}>();

onMounted(() => {
  console.log(props);
});
</script>

<style scoped lang="scss">
.coin-card {
  display: flex;
  flex-flow: column wrap;
  gap: 20px;
  &__header {
    display: grid;
    grid-template-columns: auto 1fr;
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
