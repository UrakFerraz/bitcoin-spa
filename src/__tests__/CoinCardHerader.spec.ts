import { describe, it, expect } from "vitest";
import CoinCardHeader from "../components/CoinCard/CoinCardHeader.vue";

import { shallowMount } from "@vue/test-utils";

const currentDataMock = {
  id: "bitcoin",
  symbol: "btc",
  name: "Bitcoin",
  links: {
    homepage: ["http://www.bitcoin.org", "", ""],
  },
  image: {
    thumb:
      "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579",
    small:
      "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579",
    large:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
  },
};

const wrapper = shallowMount(CoinCardHeader, {
  propsData: { currentData: currentDataMock },
});

describe("renderiza o header do coin card", () => {
  it("contém o nome da classe do header", () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.classes()).toContain("coin-card__header");
  });
  it("contém os textos corretos", () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.text()).toContain("Bitcoin");
    expect(wrapper.findAll("p").at(0).text()).toMatch("Bitcoin");
    expect(wrapper.findAll("p").at(1).text()).toMatch("btc");
  });
  it("contém a logo da moeda", () => {
    const wrapper = shallowMount(CoinCardHeader, {
      propsData: { currentData: currentDataMock },
    });
    console.log(wrapper);
    expect(wrapper).toBeDefined();
    expect(wrapper.findAll("img").at(0).attributes("src")).toEqual(
      "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579"
    );
  });
});
