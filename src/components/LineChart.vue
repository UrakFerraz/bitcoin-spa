<template>
  <svg viewBox="0 -1500 3460 2500" class="chart">
    <defs>
      <linearGradient
        id="myLinearGradient1"
        x1="0%"
        y1="0%"
        x2="0%"
        y2="100%"
        spreadMethod="pad"
      >
        <stop offset="0%" stop-color="#B5D43C" stop-opacity="1" />
        <stop offset="100%" stop-color="#065F46" stop-opacity="1" />
      </linearGradient>
    </defs>
    <polyline
      class="bg-path"
      v-if="chartData"
      fill="none"
      stroke-width="10"
      stroke-linecap="round"
      :points="chartData"
    />
    <polyline
      class="path"
      v-if="chartData"
      fill="none"
      stroke="url(#myLinearGradient1)"
      stroke-width="10"
      stroke-linecap="round"
      :points="chartData"
    />
  </svg>
</template>

<script setup lang="ts">
import useLineChart from "@/composables/useLineChart";
import { onMounted, ref, type Ref } from "vue";
type BitcoinMarketChartInterface = Ref<{
  market_caps: [number, number][];
  prices: [number, number][];
  total_volumes: [number, number][];
}>;
const chartData = ref<string>();
const props = defineProps<{
  coinData: BitcoinMarketChartInterface;
  type: string;
}>();

onMounted(() => {
  chartData.value = useLineChart(props.coinData, props.type).join(",");
});
</script>

<style scoped>
.bg-path {
  stroke: #065f46;
  opacity: 0.3;
}
.path {
  filter: saturate(2);
  stroke-dasharray: 10000;
  stroke-dashoffset: 10000;
  transition: stroke 5s cubic-bezier(0, 0.55, 0.45, 1);
  animation: dash 5s both;
}

@keyframes dash {
  from {
    stroke-dashoffset: 10000;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>
