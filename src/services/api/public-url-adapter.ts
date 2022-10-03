import CoinGeckoAPI_V3 from "@/modules/coingecko/coingecko-urls";
import type CoinDataInterface from "@/modules/interfaces/CoinDataInterface";

function coinDataBuilder(
  id: string,
  currency: string,
  dateTime?: string
): CoinDataInterface {
  let urls = {
    simple: CoinGeckoAPI_V3.getURL(id, currency)["simple"],
    include: CoinGeckoAPI_V3.getURL(id, currency)["include"],
    market_chart: CoinGeckoAPI_V3.getURL(id, currency)["market_chart"],
    current_data: CoinGeckoAPI_V3.getURL(id, currency)["current_data"],
  };
  if (typeof dateTime === "string") {
    const URLWithTimestamp = {
      historicalURL: CoinGeckoAPI_V3.getHistoricalURL(id, currency, dateTime),
    };
    console.log(URLWithTimestamp);

    urls = Object.assign(urls, { historical: URLWithTimestamp.historicalURL });
  }
  console.log(urls);

  return urls;
}

export default class PublicURLAdapter {
  static getURL(
    id: string,
    currency: string,
    dateTime?: string
  ): CoinDataInterface {
    if (typeof dateTime === "string") {
      return coinDataBuilder(id, currency, dateTime);
    } else {
      return coinDataBuilder(id, currency);
    }
  }
}
