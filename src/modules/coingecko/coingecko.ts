import { type Ref } from "vue";
import PUBLIC_API_URL from "@/modules/coingecko/PUBLIC_API_URL";

const fetchCoinData = async (
  coinName: string,
  type: string,
  isLoading?: Ref<boolean>,
  error?: Ref<unknown>
) => {
  if (isLoading) isLoading.value = true;
  try {
    const res = await fetch(PUBLIC_API_URL[coinName][type]);
    if (isLoading) isLoading.value = false;
    return await res.json();
  } catch (e) {
    if (error) {
      error.value = e;
    } else {
      return e;
    }
  }
};

export { fetchCoinData };
