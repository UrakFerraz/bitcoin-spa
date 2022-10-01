import { describe, it, expect } from "vitest";

import PublicURLAdapter from "./public-url-adapter";

const ethereumDataMock = {
  current_data:
    "https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false",
  include:
    "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=brl&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true",
  market_chart:
    "https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=brl&days=1&interval=1",
  simple:
    "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=brl",
};
const bitcoinDataMock = {
  current_data:
    "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false",
  include:
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true",
  market_chart:
    "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=brl&days=1&interval=1",
  simple:
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl",
};

describe("criar urls do coingecko", () => {
  it("bitcoin", () => {
    const sut = PublicURLAdapter.getURL("bitcoin", "brl");
    console.log(sut);
    expect(sut).toBeDefined();
    expect(sut).toMatchObject(bitcoinDataMock);
  });
  it("ethereum", () => {
    const sut = PublicURLAdapter.getURL("ethereum", "brl");
    console.log(sut);
    expect(sut).toBeDefined();
    expect(sut).toMatchObject(ethereumDataMock);
  });
});
