import BASE_API_URL from "./coingecko-base-url";

const historicalURL = (id: string, range: number) => {
  if (typeof range === "number") {
    return (
      BASE_API_URL +
      "/coins/" +
      id +
      "/market_chart/range?vs_currency=brl&from=" +
      range +
      "&to=" +
      (range + 3600)
    );
  }
};

export default historicalURL;
