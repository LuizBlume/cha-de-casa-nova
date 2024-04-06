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
    console.log("Persistência definida como local!")
  })
  .catch((error) => {
    console.error("Erro ao definir a persistência:", error)
  })

  onAuthStateChanged(auth, (user) => {
    if (user) {
        storeUsuario.trueUsuario = user;
        console.log(storeUsuario.trueUsuario);
    } else {
        storeUsuario.trueUsuario = false
        console.log("Nenhum usuário logado", user);
    }
  })

  let getAdmins = await getDocs(collection(db, "administradores"));

  if (getAdmins) {
    getAdmins.forEach((admin) => {
      if (admin.data().email_usuario === storeUsuario.trueUsuario.email && storeUsuario.trueUsuario !== null) {
        storeUsuario.isAdmin = true;
        console.log("Você é um admin");
      } else {
        console.log("Você não é um admin");
      }
    })
  }

  if (alturaApp.value.offsetHeight <= document.documentElement.offsetHeight) {
    alturaApp.value.style.height = '100vh';
    console.log(alturaApp.value.offsetHeight, document.documentElement.offsetHeight);
  } else {
    alturaApp.value.style.height = '100%';
    console.log(alturaApp.value.style.height, alturaApp.value.offsetHeight, document.documentElement.offsetHeight);
  }
})
</script>

<style scoped>
</style>
