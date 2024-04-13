import { ref, computed } from "vue"
import { defineStore } from "pinia"

export const useProdutoStore = defineStore('produto', {
    state: async () => ({
        dadosProduto: null,
    }),
    persist: {
        enabled: true,
        strategies: [
            {
                storage: localStorage, paths: ['dadosProduto']
            }
        ]
    }
})