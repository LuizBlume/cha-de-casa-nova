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
import { db } from "./firebase"
import { firebaseApp } from "./firebase"

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

  let getAdmins = await getDocs(collection(doc, "administradores"));

  if (getAdmins) {
    getAdmins.forEach((admin) => {
      adminData.value.push({...admin.data(), id: admin.id});
    })
    console.log(adminData.value, "Admin achado");
  } else {
    console.log("Nenhum admin cadastrado");
  }
})
</script>

<style scoped>
</style>
