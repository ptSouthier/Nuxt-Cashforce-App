<template>
  <div class="flex items-start flex-col">
    <HeaderBar />
    <SideBar />
    <div class="ml-72">
      <h1 class="heading-text">
        <img src="../assets/proposta.svg" alt="Ícone de aperto de mãos" class="w-6 h-12 mr-2">
        Notas fiscais
      </h1>
      <span class="text-gray-400 ml-12 font-semibold text-sm">Visualize as notas fiscais que você tem.</span>
      <ul>
        <li v-for="order in orders" :key="order.id">
          <h2>{{ order.orderNfId }}</h2>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  async asyncData({ $axios }) {
    const orders = await $axios.$get("/orders");
        return { orders };
  },
  
  data() {
    return {
          orders: [],
      };
  },
})
</script>

<style>
  .heading-text {
    @apply flex items-center ml-12 mt-12 -mb-6 w-40 h-20 text-xl font-bold;
    color: #021B51;
  }
</style>
