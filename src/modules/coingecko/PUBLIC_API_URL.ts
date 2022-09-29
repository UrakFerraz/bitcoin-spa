const PUBLIC_API_URL = {
  bitcoin: {
    simple:
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl",
    include:
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true",
    market_chart:
      "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=brl&days=1&interval=1",
    current_data:
      "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false",
  },
};

export default PUBLIC_API_URL;
