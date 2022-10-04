import { describe, it, expect } from "vitest";
import PublicURLAdapter from "@/services/api/public-url-adapter";

describe("criar urls do coingecko", () => {
  it("bitcoin", () => {
    const sut = PublicURLAdapter.getURL("bitcoin", "brl")["simple"];
    expect(sut).toBeDefined();
    expect(sut).toEqual(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl"
    );
  });
  it("ethereum", () => {
    const sut = PublicURLAdapter.getURL("ethereum", "brl")["simple"];
    expect(sut).toBeDefined();
    expect(sut).toEqual(
      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=brl"
    );
  });
  it("historical ethereum", () => {
    const sut = PublicURLAdapter.getURL("ethereum", "brl", "9/10/2022 21:00")[
      "historical"
    ];
    expect(sut).toBeDefined();
    expect(sut).toEqual(
      "https://api.coingecko.com/api/v3/coins/ethereum/market_chart/range?vs_currency=brl&from=1662850800&to=1663050800"
    );
  });
});
