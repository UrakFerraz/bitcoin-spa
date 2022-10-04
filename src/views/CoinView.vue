<template>
  <div class="main">
    <div class="main__coin-card-block">
      <CoinCard
        class="main__coin-card"
        v-if="isLoaded"
        :coin-id="coinId!"
        :data="include"
        :chart="market_chart!"
        :current-data="current_data"
      />
      <CoinCard
        class="main__coin-card"
        v-else-if="isFirstLoad"
        :coin-id="coinId!"
        :data="include"
        :chart="market_chart!"
        :current-data="current_data"
      />
      <a
        class="main__coingickoTag"
        href="https://www.coingecko.com"
        target="_blank"
      >
        <span class="text-sm text-neutral-grey">Data from</span>
        <CoingeckoLogo class="main__coingickoTag__logo" />
      </a>
    </div>
    <CryptosMenu class="main__menu" />
    <div class="main__historical border p-10 border-secondary rounded-lg">
      <p class="text-tertiary mb-6 font-regular text-xl text-center">
        Histórico:
      </p>
      <Datepicker v-model="datePicker" />
      <p
        v-if="refreshPrice !== null && refreshPrice !== undefined"
        class="text-tertiary mt-6 font-bold text-xl text-center"
      >
        {{ refreshPrice }}
      </p>
    </div>
  </div>
</template>

<script async setup lang="ts">
import CoinCard from "@/components/CoinCard/CoinCard.vue";
import { onBeforeMount, onMounted, type Ref, ref, watch, computed } from "vue";
import type CoinDataInterface from "@/modules/interfaces/CoinDataInterface";
import PublicURLAdapter from "@/services/api/public-url-adapter";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import CryptosMenu from "@/components/CryptosMenu.vue";
import "@vuepic/vue-datepicker/dist/main.css";
import Datepicker from "@vuepic/vue-datepicker";
import CoinGeckoAPI_V3 from "@/modules/coingecko/coingecko-urls";
import useCurrency from "@/composables/useCurrency";
import CoingeckoLogo from "@/components/CoingeckoLogo.vue";
const { setCurrency } = useCurrency();

function actualDate() {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const formatMap = {
    mm: today.getMonth() + 1,
    dd: today.getDate(),
    aa: today.getFullYear().toString().slice(-2),
    hour: today.getHours() === 0 ? "0" : today.getHours() - 1,
    min: today.getMinutes() === 0 ? "0" : today.getMinutes(),
  };
  return `${formatMap.mm}/${formatMap.dd}/${formatMap.aa} ${formatMap.hour}:${formatMap.min}`;
}

const route = useRoute();

const reloadDataTimer = 10000;

const coinId = ref<string>();
const currency = ref<string>();
const include = ref();
const market_chart = ref();
const current_data = ref();
const historical = ref();
const dateTime = ref<string>();
const isLoaded = ref(false);
const isFirstLoad = ref(false);
const datePicker = ref<string>();
const historicalUrl = ref<string>();
const historicalPrice = ref<{
  prices: number[][];
  market_caps: number[][];
  total_volumes: number[][];
}>();
const timer = ref();

const refreshPrice = computed(() => {
  console.log(historicalPrice.value);

  if (historicalPrice.value !== undefined) {
    return setCurrency(historicalPrice.value.prices[0][1]);
  } else {
    return null;
  }
});

watch(datePicker, async (value) => {
  if (
    coinId.value !== undefined &&
    currency.value !== undefined &&
    value !== undefined
  ) {
    historicalUrl.value = CoinGeckoAPI_V3.getHistoricalURL(
      coinId.value,
      currency.value,
      value
    );
    const response = await fetch(historicalUrl.value);
    const data = await response.json();
    historicalPrice.value = data;
  }
  console.log(value);
  const date1 = new Date("Fri Oct 07 2022 12:02:00 GMT-0300");
  console.log(
    "===================================================================="
  );
  console.log(date1);
});

async function setCoinData(
  id: string,
  currency: string,
  type: string,
  dataRef: Ref<unknown>,
  dateTime?: string
) {
  let coinDataURL: URL;
  const typeName = type as keyof CoinDataInterface;
  if (typeof dateTime === "string") {
    const coinDataURLString = PublicURLAdapter.getURL(id, currency, dateTime)[
      typeName
    ] as string;
    coinDataURL = new URL(coinDataURLString);
  } else {
    const coinDataURLString = PublicURLAdapter.getURL(id, currency)[
      typeName
    ] as string;
    coinDataURL = new URL(coinDataURLString);
  }
  const response = await fetch(coinDataURL);
  const data = await response.json();
  dataRef.value = data;
  console.log(dataRef.value);
}

onBeforeMount(async () => {
  isLoaded.value = false;
  isFirstLoad.value = false;
  coinId.value = route.params.id as string;
  currency.value = "brl";
  dateTime.value = actualDate();
  await setCoinData(coinId.value, currency.value, "include", include);
  await setCoinData(coinId.value, currency.value, "current_data", current_data);
  await setCoinData(coinId.value, currency.value, "market_chart", market_chart);
  await setCoinData(
    coinId.value,
    currency.value,
    "historical",
    historical,
    dateTime.value
  );
});
onMounted(() => {
  timer.value = setInterval(async () => {
    isLoaded.value = false;
    await setCoinData(
      coinId.value!,
      currency.value!,
      "market_chart",
      market_chart
    );
    await setCoinData(
      coinId.value!,
      currency.value!,
      "current_data",
      current_data
    );
    isLoaded.value = true;
  }, reloadDataTimer);
  isFirstLoad.value = true;
});
onBeforeRouteUpdate(() => {
  clearInterval(timer.value);
});
</script>

<style scoped lang="scss">
.main {
  display: grid;
  grid-template-columns: 1fr;
  align-content: center;
  justify-items: center;
  background: transparent;
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    width: clamp(700px, 100%, 1200px);
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: 20px;
  }
  &__coin-card {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    @media only screen and (min-width: 768px) {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
    }
  }
  &__coin-card-block {
    min-height: 350px;
    @media only screen and (min-width: 768px) {
      min-height: 500px;
      width: clamp(300px, 100%, 480px);
      grid-column: 1 / 2;
      grid-row: 1 / 3;
    }
  }
  &__menu {
    @media only screen and (min-width: 768px) {
      grid-column: -2 / -1;
      grid-row: 1 / 2;
    }
  }
  &__historical {
    @media only screen and (min-width: 768px) {
      grid-column: -2 / -1;
      grid-row: 2 / 3;
    }
  }
  &__coingickoTag {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 250px;
    gap: 10px;
    &__logo {
      max-width: 100px;
    }
    & span {
      margin-bottom: 1px;
    }
  }
}
</style>
