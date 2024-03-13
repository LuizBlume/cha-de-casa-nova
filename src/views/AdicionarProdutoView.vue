<template>
    <div class="grid-container" ref="addProductElement">
        <Header />
        <AdicionarProduto />
        <Footer :footerAdd="footerAdd" />
    </div>
</template>

<script setup>
import Header from "../components/Header.vue"
import AdicionarProduto from "../components/AdicionarProduto.vue"
import Footer from "../components/Footer.vue"
import { ref, onMounted, nextTick } from "vue"
import { heightAdjust } from "../functions/functions"

const addProductElement = ref(null);

const footerAdd = {
    marginTop: '0px'
};

onMounted(async () => {
    await nextTick();
    heightAdjust(addProductElement, document.documentElement.offsetHeight);
})
</script>

<style scoped>
.grid-container {
    display: grid;
    grid-template-areas:
    "header"
    "main"
    "footer";
    background-color: #D5B6A2;
}

footer {
    margin-top: 0;
    height: 100%;
}
</style>