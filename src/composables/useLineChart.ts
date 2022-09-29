import type CoinMarketChartInterface from "@/modules/interfaces/CoinMarketChartInterface";

export default function createPolylinePoints(
  coinData: CoinMarketChartInterface,
  type: keyof CoinMarketChartInterface
) {
  console.log(coinData);

  const typeName = type as keyof CoinMarketChartInterface;
  const data = coinData[typeName] as unknown as number[][];
  console.log(data);

  const points = data.map(
    (itemArray: number[], index: number, items: number[][]) => {
      const baseNumber1 = items[0][0];
      const baseNumber2 = items[0][1];
      const convertBaseNumber1 =
        Math.round(itemArray[0] - baseNumber1) / 10000000;
      const convertBaseNumber2 =
        Math.round(itemArray[1] - baseNumber2) / 100000000;
      const polylinePoints = convertBaseNumber2 - convertBaseNumber2 * 2;
      const column = index * 12;
      return [column, polylinePoints];
    }
  );
  return { points };
}
