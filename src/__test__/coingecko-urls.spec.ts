import { describe, it, expect } from "vitest";

import coingeckoURL from "@/modules/coingecko/coingecko-urls";

describe("criar urls do coingecko", () => {
  it("bitcoin", () => {
    const sut = coingeckoURL("bitcoin", "brl")["simple"];
    console.log(sut);
    expect(sut).toBeDefined();
    expect(sut).toEqual(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl"
    );
  });
  it("ethereum", () => {
    const sut = coingeckoURL("ethereum", "brl")["simple"];
    expect(sut).toBeDefined();
    expect(sut).toEqual(
      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=brl"
    );
  });
});
