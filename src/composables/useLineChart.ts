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
      console.log(Math.max(...items[0]));
      console.log(String(Math.max(...items[0])).length);
      console.log(Math.min(...items[0]));
      const convert1 = String(itemArray[1]).split(".").join("");
      const convert2 = Number(convert1);
      console.log(convert2);
      const polylinePoints =
        String(((itemArray[1] / itemArray[0]) * 100) / 4).split(".")[1] + "0";
      const polylinePointsInverted = (Number(polylinePoints) * -1) / 2;
      const column = index * 12;
      return [column, String(polylinePointsInverted).substring(0, 4)];
    }
  );
  return { points };
}
