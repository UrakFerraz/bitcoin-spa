import { onBeforeMount, ref } from "vue";
import { fetchCoinData } from "@/modules/coingecko/coingecko";
import type CoinMarketChartInterface from "@/modules/interfaces/CoinMarketChartInterface";

export default function useCoinData(id: string, delay: number) {
  console.log(id);

  const coinSimple = ref<any>();
  const coinMarketChart = ref<CoinMarketChartInterface>();
  const coinCurrentData = ref<any>();
  const isLoaded = ref<boolean>(false);
  const svgChartData = ref<string>();
  const getData = async () => {
    try {
      isLoaded.value = false;
      coinSimple.value = await fetchCoinData(id, "include");
      coinMarketChart.value = await fetchCoinData(id, "market_chart");
      coinCurrentData.value = await fetchCoinData(id, "current_data");
      isLoaded.value = true;
      console.log(coinSimple);
    } catch (error) {
      return error;
    } finally {
      console.log(coinCurrentData);
    }
  };
  onBeforeMount(async () => await getData());
  let timer = setInterval(async () => await getData(), delay);

  const reRunDelay = () => {
    clearInterval(timer);
    timer = setInterval(async () => await getData(), delay);
  };

  return {
    coinCurrentData,
    coinMarketChart,
    coinSimple,
    isLoaded,
    svgChartData,
    reRunDelay,
    timer,
  };
}
