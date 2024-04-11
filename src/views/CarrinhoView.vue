<template>
    <div ref="alturaTotal" class="grid-container">
        <Header />
        <Carrinho />
        <Footer />
    </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Carrinho from '../components/Carrinho.vue';
import Footer from '../components/Footer.vue'
import { useHeightStore } from '../stores/height';
import { onMounted, ref, nextTick } from 'vue';

const alturaTotal = ref(null);

onMounted(async () => {
    await nextTick()

    console.log(alturaTotal.value.offsetHeight)
    if (alturaTotal.value.offsetHeight <= document.documentElement.offsetHeight) {
      alturaTotal.value.style.height = 'auto';
    } else {
      alturaTotal.value.style.height = 'auto';
  }
})
</script>

<style scoped>
.grid-container {
    display: grid;
    grid-template-areas:
    "header"
    "main"
    "footer";
    /* grid-template-rows: 2fr 5fr 1fr; */
    grid-template-rows: 1fr 5fr 0.5fr;
    background-color: #D5B6A2;
}
</style>