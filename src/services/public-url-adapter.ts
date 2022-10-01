import coingeckoURL from "@/modules/coingecko/coingecko-urls";
import type CoinDataInterface from "@/modules/interfaces/CoinDataInterface";

function coinDataBuilder(id: string, currency: string): CoinDataInterface {
  return {
    simple: coingeckoURL(id, currency)["simple"],
    include: coingeckoURL(id, currency)["include"],
    market_chart: coingeckoURL(id, currency)["market_chart"],
    current_data: coingeckoURL(id, currency)["current_data"],
  };
}

export default class PublicURLAdapter {
  static getURL(id: string, currency: string): CoinDataInterface {
    return coinDataBuilder(id, currency);
  }
}
