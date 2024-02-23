import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsuarioStore = defineStore('user', {
  state: () => ({
    trueUsuario: null
  }),
})