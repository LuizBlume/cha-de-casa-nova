<template>
  <div>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router"
import { ref, onMounted } from "vue"
import { useUsuarioStore } from "./stores/usuario"
import { getAuth, setPersistence, browserLocalPersistence, onAuthStateChanged} from "firebase/auth"
import { firebaseApp } from "./firebase"

const storeUsuario = useUsuarioStore();

onMounted(() => {
  document.documentElement.style.height = '100vh'
  const auth = getAuth();

    setPersistence(auth, browserLocalPersistence).then(() => {
    console.log("Persistência definida como local!")
  })
  .catch((error) => {
    console.error("Erro ao definir a persistência:", error)
  })

  onAuthStateChanged(auth, (user) => {
    if (user) {
        storeUsuario.usuario = user;
        console.log(storeUsuario.usuario);
    } else {
        storeUsuario.usuario = false
        console.log("Nenhum usuário logado", user);
    }
  })
})
</script>

<style scoped>
</style>
