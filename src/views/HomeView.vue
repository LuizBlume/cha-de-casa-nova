<template>
  <div class="background">
    <Header />
    <Cards />
    <IconCarrinho />
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Header from '../components/Header.vue'
import Cards from '../components/Cards.vue'
import Footer from '../components/Footer.vue'
import IconCarrinho from '../components/IconCarrinho.vue'
import { useReloadStore } from "../stores/reload"

onMounted(async () => {
  const reload = await useReloadStore();
  
  const reloadFunction = async () => {
    if (reload.isReload === true) {
      reload.isReload = false;
      location.reload();
    }
  }

  await reloadFunction();
})
</script>