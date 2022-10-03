import BASE_API_URL from "./coingecko-base-url";

export default class CoinGeckoAPI_V3 {
  static getURL = (id: string, currency: string) => {
    return {
      simple:
        BASE_API_URL + "simple/price?ids=" + id + "&vs_currencies=" + currency,
      include:
        BASE_API_URL +
        "simple/price?ids=" +
        id +
        "&vs_currencies=" +
        currency +
        "&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true",
      market_chart:
        BASE_API_URL +
        "coins/" +
        id +
        "/market_chart?vs_currency=" +
        currency +
        "&days=1&interval=1",
      current_data:
        BASE_API_URL +
        "coins/" +
        id +
        "?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false",
    };
  };
  static getHistoricalURL = (
    id: string,
    currency: string,
    dateTime: string
  ) => {
    // format: date-month-year hour(24):minute
    const convertDateToTimestamp = (dateTime: string) => {
      const dateToParse = dateTime.split(" ");

      return Math.floor(
        new Date(`${dateToParse[0]} ${dateToParse[1]}`).getTime() / 1000
      );
    };
    const convertedDateTime: number = convertDateToTimestamp(dateTime);

    return (
      BASE_API_URL +
      "coins/" +
      id +
      "/market_chart/range?vs_currency=" +
      currency +
      "&from=" +
      convertedDateTime +
      "&to=" +
      (convertedDateTime + 3600)
    );
  };
}
