import PUBLIC_API_URL from "@/modules/coingecko/PUBLIC_API_URL";

type CoinData = {
  simple: string;
  include: string;
  market_chart: string;
  current_data: string;
};

const fetchCoinData = async (
  coinName: string,
  type: string,
  isLoading?: boolean,
  error?: unknown
) => {
  if (isLoading) isLoading = true;
  try {
    const name = coinName as keyof typeof PUBLIC_API_URL;
    const coinType = type as keyof CoinData;
    const res = await fetch(PUBLIC_API_URL[name][coinType]);
    if (isLoading) isLoading = false;
    return await res.json();
  } catch (e) {
    if (error) {
      error = e;
    } else {
      return e;
    }
  }
};

export { fetchCoinData };
