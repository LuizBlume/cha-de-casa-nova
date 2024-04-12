<template>
    <div ref="alturaTotal" :class="(quantidadeProdutos <= 5) ? 'grid-container-1' : 'grid-container-2'">
        <Header />
        <Carrinho @quantidadeProdutos="quantidadeProdutos" />
        <Footer />
    </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import Carrinho from '../components/Carrinho.vue';
import Footer from '../components/Footer.vue';
import { storeToRefs } from 'pinia'
import { useQuantidadeProdutosStore } from '../stores/quantidadeProdutos';
import { onMounted, ref, nextTick, watch } from 'vue';

const alturaTotal = ref(null);
const quantidadeProdutosStore = useQuantidadeProdutosStore();
const { quantidadeProdutos } = storeToRefs(quantidadeProdutosStore);

onMounted(async () => {
    await nextTick()

    console.log(alturaTotal.value.offsetHeight)
    if (alturaTotal.value.offsetHeight <= document.documentElement.offsetHeight) {
      alturaTotal.value.style.height = 'auto';
    } else {
      alturaTotal.value.style.height = 'auto';
  }
})

watch(quantidadeProdutos, () => {
  console.log('Quantidade de produtos:', quantidadeProdutos);
})
</script>

<style scoped>
.grid-container-1 {
    display: grid;
    grid-template-areas:
    "header"
    "main"
    "footer";
    /* grid-template-rows: 2fr 5fr 1fr; */
    grid-template-rows: 1fr 2fr 0.5fr;
    background-color: #D5B6A2;
}
.grid-container-2 {
    display: grid;
    grid-template-areas:
    "header"
    "main"
    "footer";
    /* grid-template-rows: 2fr 5fr 1fr; */
    grid-template-rows: 1fr 4fr 0.5fr;
    background-color: #D5B6A2;
}

@media (max-width: 1023px) {
  .grid-container-2 {
    display: grid;
    grid-template-areas:
    "header"
    "main"
    "footer";
    /* grid-template-rows: 2fr 5fr 1fr; */
    grid-template-rows: 0.8fr 8fr 0.5fr;
    background-color: #D5B6A2;
  }
}

@media (min-width: 1024px) and (max-width: 1439px) {
  .grid-container-2 {
    display: grid;
    grid-template-areas:
    "header"
    "main"
    "footer";
    /* grid-template-rows: 2fr 5fr 1fr; */
    grid-template-rows: 1fr 8fr 0.5fr;
    background-color: #D5B6A2;
  }
}

@media (min-width: 1440px) and (max-width: 1600px) {
  .grid-container-2 {
    display: grid;
    grid-template-areas:
    "header"
    "main"
    "footer";
    /* grid-template-rows: 2fr 5fr 1fr; */
    grid-template-rows: 1fr 6fr 0.5fr;
    background-color: #D5B6A2;
  }
}
</style>