import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useReloadStore = defineStore('reload', {
  state: async () => ({
    isReload: false
  }),
})