import { ref, computed } from "vue"
import { defineStore } from "pinia"

export const useProdutoStore = defineStore('produto', {
    state: async () => ({
        dadosProduto: null,
    })
})