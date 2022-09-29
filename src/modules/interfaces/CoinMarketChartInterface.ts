import type { Ref } from "vue";

type CoinMarketChartInterface = Ref<{
  market_caps: number[][];
  prices: number[][];
  total_volumes: number[][];
}>;

export default CoinMarketChartInterface;
