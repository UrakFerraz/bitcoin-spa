import { onBeforeMount, ref, type Ref } from "vue";
import { fetchCoinData } from "@/modules/coingecko/coingecko";

type bitcoinMarketChartInterface = Ref<{
  market_caps: [number, number][];
  prices: [number, number][];
  total_volumes: [number, number][];
}>;

export default function useBitconData() {
  const bitcoinSimple = ref<any>();
  const bitcoinMarketChart = ref<bitcoinMarketChartInterface>();
  const bitcoinCurrentData = ref<any>();
  const isLoaded = ref<boolean>(false);
  const svgChartData = ref<string>();
  onBeforeMount(async () => {
    isLoaded.value = false;
    bitcoinSimple.value = await fetchCoinData("bitcoin", "include");
    bitcoinMarketChart.value = await fetchCoinData("bitcoin", "market_chart");
    bitcoinCurrentData.value = await fetchCoinData("bitcoin", "current_data");
    isLoaded.value = true;
  });
  return {
    bitcoinCurrentData,
    bitcoinMarketChart,
    bitcoinSimple,
    isLoaded,
    svgChartData,
  };
}
