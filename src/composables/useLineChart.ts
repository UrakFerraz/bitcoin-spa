import type { Ref } from "vue";

type BitcoinMarketChartInterface = Ref<{
  market_caps: [number, number][];
  prices: [number, number][];
  total_volumes: [number, number][];
}>;

export default function createPolylinePoints(
  coinData: BitcoinMarketChartInterface,
  type: string
): [number, number] {
  const points = coinData;

  return points[type].map((itemArray, index, items) => {
    const baseNumber1 = items[0][0];
    const baseNumber2 = items[0][1];
    const convertBaseNumber1 =
      Math.round(itemArray[0] - baseNumber1) / 10000000;
    const convertBaseNumber2 =
      Math.round(itemArray[1] - baseNumber2) / 100000000;
    const columns = index * 12;
    console.log([columns, convertBaseNumber2]);
    return [columns, convertBaseNumber2];
  });
}
