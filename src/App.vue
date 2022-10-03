<template>
  <div class="bg-primary p-10 bg-gradient-to-t from-primary to-secondary">
    <nav>
      <router-link
        class="bg-transparent pt-1 pb-1 pl-3 pr-3 text-neutral-grey rounded-md border-primary border"
        to="/"
        >Home</router-link
      >
      <router-link
        class="bg-transparent pt-1 pb-1 pl-3 pr-3 text-neutral-grey rounded-md border-primary border"
        to="/coin/bitcoin"
        >Coin</router-link
      >
      <router-link
        class="bg-transparent pt-1 pb-1 pl-3 pr-3 text-neutral-grey rounded-md border-primary border"
        to="/about"
        >About</router-link
      >
    </nav>
    <router-view :key="reload" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const reload = computed(() => {
  return route.params.id as string;
});
</script>

<style lang="scss">
body {
  background: #191e29;
}
nav {
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.router-link-active,
.router-link-exact-active {
  border-color: #696e79;
}
</style>
