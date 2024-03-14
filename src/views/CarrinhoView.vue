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
</script>

<style scoped>
.grid-container {
    display: grid;
    grid-template-areas:
    "header"
    "main"
    "footer";
    grid-template-rows: 1.5fr 3fr 1fr;
    height: 100vh;
    background-color: #D5B6A2;
}
</style>