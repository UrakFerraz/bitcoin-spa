<template>
  <div class="crypto-menu pb-6">
    <div class="crypto-menu__buttons">
      <router-link to="/coin/bitcoin">
        <div class="crypto-menu__btn">
          <img
            src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png"
            alt=""
          />
          <p class="text-sm text-neutral-grey">Bitcoin</p>
        </div>
      </router-link>
      <router-link to="/coin/ethereum">
        <div class="crypto-menu__btn">
          <img
            src="https://assets.coingecko.com/coins/images/279/small/ethereum.png"
            alt=""
          />
          <p class="text-sm text-neutral-grey">Ethereum</p>
        </div>
      </router-link>
      <router-link to="/coin/dacxi">
        <div class="crypto-menu__btn">
          <img
            src="https://assets.coingecko.com/coins/images/4466/small/dacxi.png"
            alt=""
          />
          <p class="text-sm text-neutral-grey">Dacxi</p>
        </div>
      </router-link>
      <router-link to="/coin/cosmos">
        <div class="crypto-menu__btn">
          <img
            src="https://assets.coingecko.com/coins/images/1481/small/cosmos_hub.png"
            alt=""
          />
          <p class="text-sm text-neutral-grey">Atom</p>
        </div>
      </router-link>
      <router-link to="/coin/terra-luna-2">
        <div class="crypto-menu__btn">
          <img
            src="https://assets.coingecko.com/coins/images/25767/small/01_Luna_color.png"
            alt=""
          />
          <p class="text-sm text-neutral-grey">Luna</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.crypto-menu {
  display: grid;
  scroll-snap-type: x mandatory;
  gap: 20px;
  margin-block: 20px;
  width: 100%;
  overflow: auto;
  &__buttons {
    display: flex;
    gap: 10px;
    flex-flow: row;
    @media only screen and (min-width: 768px) {
      flex-flow: row wrap;
      overflow: hidden;
      justify-content: center;
      align-items: flex-start;
    }
  }
  &__btn {
    scroll-snap-align: start;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);
    justify-items: center;
    border-radius: 17px;
    width: 90px;
    & img {
      filter: grayscale(100);
      width: 40px;
      height: 40px;
    }
  }
}

a {
  margin: 10px;
  border: 1px solid #696e79;
  border-radius: 10px;
  &.router-link-active,
  .router-link-exact-active {
    border: 1px solid #01c38d;
  }
}
</style>
