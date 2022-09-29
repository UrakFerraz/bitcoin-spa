import { onBeforeMount, ref, type Ref } from "vue";
import { fetchCoinData } from "@/modules/coingecko/coingecko";
import type CoinMarketChartInterface from "@/modules/interfaces/CoinMarketChartInterface";

export default function useCoinData(id: string) {
  const coinSimple = ref<any>();
  const coinMarketChart = ref<CoinMarketChartInterface>();
  const coinCurrentData = ref<any>();
  const isLoaded = ref<boolean>(false);
  const svgChartData = ref<string>();
  const getData = async () => {
    isLoaded.value = false;
    coinSimple.value = await fetchCoinData(id, "include");
    coinMarketChart.value = await fetchCoinData(id, "market_chart");
    coinCurrentData.value = await fetchCoinData(id, "current_data");
    isLoaded.value = true;
  };
  onBeforeMount(getData());

  return {
    coinCurrentData,
    coinMarketChart,
    coinSimple,
    isLoaded,
    svgChartData,
  };
}
