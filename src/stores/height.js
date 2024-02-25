import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useHeightStore = defineStore('height', {
  state: () => ({
    total: null
  }),
})