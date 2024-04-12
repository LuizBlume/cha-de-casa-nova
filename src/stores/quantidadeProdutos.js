import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useQuantidadeProdutosStore = defineStore('quantidadeProdutos', {
  state: () => ({
    quantidadeProdutos: 0
  }),
})