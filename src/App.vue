<template>
  <div ref="alturaApp" class="container-app">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router"
import { ref, onMounted, nextTick, vShow } from "vue"
import { useHeightStore } from "./stores/height";
import { useUsuarioStore } from "./stores/usuario"
import { getAuth, setPersistence, browserLocalPersistence, onAuthStateChanged} from "firebase/auth"
import { doc, collection, getDocs } from "firebase/firestore"
import { db, firebaseApp } from "./firebase"

const alturaApp = ref(null);
const storeUsuario = useUsuarioStore();
const heightStore = useHeightStore();

onMounted(async () => {
  document.documentElement.style.height = '100vh';
  await nextTick();
  const auth = getAuth();

  setPersistence(auth, browserLocalPersistence).then(() => {
  })
  .catch((error) => {
    console.error("Erro ao definir a persistência:", error)
  })

  onAuthStateChanged(auth, (user) => {
    if (user) {
        storeUsuario.trueUsuario = user;
        storeUsuario.email = storeUsuario.trueUsuario.email;
    } else {
        storeUsuario.trueUsuario = false
    }
  })

  let getAdmins = await getDocs(collection(db, "administradores"));

  if (getAdmins) {
    getAdmins.forEach((admin) => {
      if (admin.data().email_usuario === storeUsuario.trueUsuario.email && storeUsuario.trueUsuario !== null) {
        storeUsuario.isAdmin = true;
      } else {
      }
    })
  }

  if (alturaApp.value.offsetHeight <= document.documentElement.offsetHeight) {
    alturaApp.value.style.height = '100vh';
  } else {
    alturaApp.value.style.height = '100%';
  }
})
</script>

<style scoped>
.container-app {
  --bs-gutter-x: 0 !important;
  height: 100vh;
}
</style>
