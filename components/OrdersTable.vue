<template>
  <table class="table-auto border-separate">
    <thead>
      <tr>
        <th class="table-header-style">NOTA FISCAL</th>
        <th class="table-header-style">SACADO</th>
        <th class="table-header-style">CEDENTE</th>
        <th class="table-header-style">EMISSÃO</th>
        <th class="table-header-style">VALOR</th>
        <th class="table-header-style">STATUS</th>
        <th class="table-header-style"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in orders" :key="order.id" class="shadow rounded-sm h-11">
        <td class="table-data-style">{{ order.orderNfId }}</td>
        <td class="table-data-style">{{ order.buyer.name }}</td>
        <td class="table-data-style">{{ order.provider.name }}</td>
        <td class="table-data-style">{{ order.emissionDate }}</td>
        <td class="table-data-style green-text">{{ order.value }}</td>
        <td class="table-data-style green-text">{{ order.orderStatusBuyer }}</td>
        <td class="table-data-style">
          <button>Dados do cedente</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import Vue from "vue";

  export default Vue.extend({
    props: {
      orders: { type: Array, required: true },
    },
  })
</script>

<style scoped>
  table {
    border-spacing: 1rem;
  }

  .table-header-style {
    @apply w-60 text-gray-400 text-xs font-semibold;
  }

  .table-data-style {
    @apply w-60 p-1 text-gray-800 text-sm text-center font-medium;
  }

  .green-text {
    @apply text-green-500;
  }

  button {
    @apply rounded-full border px-3 py-1 border-blue-400 font-medium text-gray-700;
    font-size: 0.7rem;
  }
</style>
