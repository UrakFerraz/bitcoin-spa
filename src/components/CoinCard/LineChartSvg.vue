<template>
  <svg :viewBox="setViewBox()" class="chart">
    <defs>
      <linearGradient
        id="myLinearGradient1"
        x1="0%"
        y1="0%"
        x2="0%"
        y2="100%"
        spreadMethod="pad"
      >
        <stop offset="0%" stop-color="#2563EB" stop-opacity="1" />
        <stop offset="100%" stop-color="#F43F5E" stop-opacity="1" />
      </linearGradient>
    </defs>
    <polyline
      class="bg-path"
      fill="none"
      stroke-width="10"
      stroke-linecap="round"
      :points="chartData"
    />
    <polyline
      class="path"
      fill="none"
      stroke="url(#myLinearGradient1)"
      stroke-width="10"
      stroke-linecap="round"
      :points="chartData"
    />
  </svg>
</template>

<script setup lang="ts">
import createPolylinePoints from "@/composables/useLineChart";
import { onMounted, ref } from "vue";
import type CoinMarketChartInterface from "@/modules/interfaces/CoinMarketChartInterface";
const chartData = ref<string>();
const props = defineProps<{
  coinData: CoinMarketChartInterface;
  type: string;
  coin: string;
}>();

const type = props.type as keyof CoinMarketChartInterface;
const { points } = createPolylinePoints(props.coinData, type, props.coin);
onMounted(() => {
  console.log(props);
  console.log(points);
  chartData.value = points.join(",");
});

function setViewBox() {
  let viewBox: string;
  switch (props.coin) {
    case "bitcoin":
      viewBox = "0 -700 3460 2300";
      break;
    case "ethereum":
      viewBox = "0 -900 3460 2300";
      break;
    case "dacxi":
      viewBox = "0 -600 3460 2300";
      break;
    case "cosmos":
      viewBox = "0 -1200 3460 2300";
      break;
    case "terra-luna-2":
      viewBox = "0 -900 3460 2300";
      break;
    default:
      viewBox = "0 -700 3460 2300";
  }
  return viewBox;
}
</script>

<style scoped>
.chart {
  width: 100%;
  border-left: 1px solid rgba(000, 000, 000, 0.15);
  border-bottom: 1px solid rgba(000, 000, 000, 0.15);
}
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
