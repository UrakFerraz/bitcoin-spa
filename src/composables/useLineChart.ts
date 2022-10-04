import type CoinMarketChartInterface from "@/modules/interfaces/CoinMarketChartInterface";

export default function createPolylinePoints(
  coinData: CoinMarketChartInterface,
  type: keyof CoinMarketChartInterface,
  coin: string
) {
  console.log(coinData);

  const typeName = type as keyof CoinMarketChartInterface;
  const data = coinData[typeName] as unknown as number[][];
  console.log(data);

  const points = data.map(
    (itemArray: number[], index: number, items: number[][]) => {
      function convertBaseNumber(num1: number, num2: number) {
        const baseNumber2 = items[0][1];
        const convertBaseNumber2 =
          Math.round(itemArray[1] - baseNumber2) / num1;
        return convertBaseNumber2 - convertBaseNumber2 * num2;
      }
      const column = index * 12;
      let convertedMarketCaps: number;
      if (coin === "bitcoin") {
        convertedMarketCaps = convertBaseNumber(100000000, 2.4);
      } else if (coin === "ethereum") {
        convertedMarketCaps = convertBaseNumber(100000000, 4);
      } else if (coin === "dacxi") {
        convertedMarketCaps = convertBaseNumber(10000, 6);
      } else if (coin === "cosmos") {
        convertedMarketCaps = convertBaseNumber(10000000, 16);
      } else if (coin === "terra-luna-2") {
        convertedMarketCaps = convertBaseNumber(1000000, 9);
      } else {
        convertedMarketCaps = convertBaseNumber(10000000, 9);
      }
      return [column, convertedMarketCaps];
    }
  );
  return { points };
}
