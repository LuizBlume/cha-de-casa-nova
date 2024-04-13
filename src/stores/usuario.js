import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsuarioStore = defineStore('user', {
  state: async () => ({
    trueUsuario: null,
    email: null,
    isAdmin: null
  }),
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage, paths: ['email']
      }
    ]
  }
})