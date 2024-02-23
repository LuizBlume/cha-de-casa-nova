<template>
  <div>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router"
import { ref, onMounted } from "vue"
import { getAuth, setPersistence, browserLocalPersistence, onAuthStateChanged} from "firebase/auth"
import { firebaseApp } from "./firebase"

const usuario = ref(null);

onMounted(() => {
  const auth = getAuth();

    setPersistence(auth, browserLocalPersistence).then(() => {
    console.log("Persistência definida como local!")
  })
  .catch((error) => {
    console.error("Erro ao definir a persistência:", error)
  })
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      usuario.value = user
      console.log(usuario.value);
    } else {
      console.log("Nenhum usuário logado");
    }
  })
})
</script>

<style scoped>
</style>
