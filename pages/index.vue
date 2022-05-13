<template>
  <div class="flex items-center flex-col">
    <HeaderBar />
    <SideBar />
    <ul>
      <li v-for="order in orders" :key="order.id">
        <h2>{{ order.orderNfId }}</h2>
      </li>
    </ul>
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
