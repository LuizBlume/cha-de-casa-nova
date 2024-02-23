<script setup>
import Header from '../components/Header.vue'
import Cards from '../components/Cards.vue';
import Footer from '../components/Footer.vue'
import { ref, onMounted, nextTick } from "vue"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { firebaseApp } from "../firebase"

const usuario = ref(null);
const showHeader = ref(false);

onMounted(async () => {
  const auth = getAuth();

  await nextTick();
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      usuario.value = user
      showHeader.value = true;
      console.log(usuario.value);
    } else {
      console.log("Nenhum usuário logado");
    }
  })

})
</script>

<template>
  <div class="background">
    <Header v-if="showHeader" :usuario="usuario" />
    <Cards />
    <Footer />
  </div>
</template>
