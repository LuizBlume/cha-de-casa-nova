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
import { doc, collection, getDocs } from "firebase/firestore"
import { db, firebaseApp } from "./firebase"

const adminData = ref([]);
const storeUsuario = useUsuarioStore();

onMounted(async () => {
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
        storeUsuario.trueUsuario = user;
        console.log(storeUsuario.trueUsuario);
    } else {
        storeUsuario.usuario = false
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
})
</script>

<style scoped>
</style>
