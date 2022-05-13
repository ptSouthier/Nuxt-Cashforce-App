<template>
  <div class="sider-financiador auto-layout bg-gray-50">
    <div>
      <img src="../assets/logo.svg" alt="Cashforce Logo" class="p-5 ml-2 h-16">
      <nav class="flex items-center pt-5">
        <button class="nav-button">
          <img src="../assets/proposta.svg" alt="Ícone de aperto de mãos" class="w-6 h-12 ml-5">
          <span class="ml-3 font-semibold text-sm">Notas fiscais</span>
        </button>
      </nav>
    </div>
  </div>
</template>

<style scoped>
  .auto-layout {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .sider-financiador {
    position: absolute;
    width: 18rem;
    height: 100%;
    left: 0px;
    top: 0px;
  }

  .nav-button {
    @apply flex items-center text-gray-700 border-l-4 hover:text-green-500 hover:border-green-500;
  }
</style>