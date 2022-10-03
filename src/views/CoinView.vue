<template>
  <div class="main">
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
    <TheLoading v-else-if="!isFirstLoad && !isLoaded" />
    <CryptosMenu />
  </div>
</template>

<script async setup lang="ts">
import CoinCard from "@/components/CoinCard/CoinCard.vue";
import { onBeforeMount, onMounted, type Ref, ref } from "vue";
import type CoinDataInterface from "@/modules/interfaces/CoinDataInterface";
import PublicURLAdapter from "@/services/api/public-url-adapter";
import TheLoading from "@/components/TheLoading.vue";
import { useRoute } from "vue-router";
import CryptosMenu from "@/components/CryptosMenu.vue";

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
const coinId = ref<string>();
const currency = ref<string>();
const include = ref();
const market_chart = ref();
const current_data = ref();
const historical = ref();
const dateTime = ref<string>();
const isLoaded = ref(false);
const isFirstLoad = ref(false);

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
  let timer = setInterval(async () => {
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
  }, 10000);
  isFirstLoad.value = true;
});
</script>

<style scoped lang="scss">
.main {
  display: grid;
  grid-template-columns: 1fr;
  align-content: center;
  justify-items: center;
  background: transparent;
  &__coin-card {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
}
</style>
