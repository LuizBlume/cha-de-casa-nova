<script setup>
import Header from '../components/Header.vue'
import Cards from '../components/Cards.vue';
import Footer from '../components/Footer.vue'

import { ref, onMounted } from "vue"
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth"
import { firebaseApp } from "../firebase"

const token = ref(null);

onMounted(() => {
  const auth = getAuth();

  setPersistence(auth, browserLocalPersistence).then(() => {
    console.log("Persistência definida como local!")
  })
  .catch((error) => {
    console.error("Erro ao definir a persistência:", error)
  })

  const user = auth.currentUser;
  
  console.log(user)
})
</script>

<template>
  <div class="background">
    <Header />
    <Cards />
    <Footer />
  </div>
</template>
