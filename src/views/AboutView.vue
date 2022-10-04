<template>
  <div class="about">
    <p class="text-tertiary text-g">Crypto SPA desenvolvido com:</p>
    <ul class="text-neutral-grey">
      <li>Linguagem: Typescript</li>
      <li>Framework: VueJS 3 (Vite)</li>
      <li>Bibliotecas: Tailwind css</li>
      <li>
        Recursos: vue-router, script setup, composition API, scss, animação de
        svg
      </li>
    </ul>
    <p
      class="text-neutral-light text-center mb-3 font-thin capitalize text-2xl text-left"
    >
      Autor: Urak Ferraz
    </p>
    <a
      class="text-neutral-light text-center font-thin capitalize text-2xl text-left"
      href="https://github.com/UrakFerraz"
      >GitHub do autor</a
    >
  </div>
</template>

<script async setup lang="ts"></script>

<style scoped lang="scss">
.about {
  display: flex;
  flex-flow: column wrap;
  min-height: 60vh;
  justify-content: center;
  gap: 30px;
}
</style>
