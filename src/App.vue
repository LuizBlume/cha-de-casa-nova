<template>
  <div>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router"
import { ref, onMounted } from "vue"
import { getAuth, setPersistence, browserLocalPersistence} from "firebase/auth"
import { firebaseApp } from "./firebase"

const token = ref(null);

onMounted(() => {
  const auth = getAuth();

  setPersistence(auth, browserLocalPersistence).then(() => {
    console.log("Persistência definida como local!")
  })
  .catch((error) => {
    console.error("Erro ao definir a persistência:", error)
  })
})
</script>

<style scoped>
</style>
