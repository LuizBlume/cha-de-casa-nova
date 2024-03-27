<template>
    <div class="grid-container">
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
</style>