import { ref, computed } from "vue"
import { defineStore } from "pinia"
import { logout, changePiniaUser } from "../functions/functions"

export const useLogoutStore = defineStore('logout', {
  state: () => ({
    logoutUsuario: false
  }),
  actions: {
    async handleLogout() {
        if (this.logoutUsuario) {
            console.log("Realizando o logout...");

            await logout();

            this.logoutUsuario = false;
        }
    }
    }
  }
)