<template>
  <div class="containerEscolha" ref="escolhaComponente">
    <Header />
    <div class="row">
      <div class="col-sm-4">
        <h3>{{ data.nome }}</h3>
        <img :src="data.url" alt="Jogo de Copos Nadir 465ml" width="350" height="350" />
        <button class="comprar">
          <router-link to="/Escolha" class="escolher">Confirmar</router-link>
        </button>
      </div>
      <div class="col-sm-8">
        <h3 class="h3-escolha">
          Temos a opção de você comprar o presente em uma loja de sua preferência
          e levar no dia, ou se achar melhor pode realizar um PIX no QRcode abaixo
        </h3>
      </div>
      <div class="qrcode">
          <img src="../assets/images/qrcode.jpg" alt="" width="150px" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { ref, onMounted, nextTick } from "vue"
import { heightAdjust } from "../functions/functions"
import { useProdutoStore } from "../stores/produtoEscolhido"

const escolhaComponente = ref(null);
const data = ref([]);
const produto = useProdutoStore();

onMounted(async () => {
  await nextTick();
  data.value = (await produto).dadosProduto;
  console.log(data.value);
})
</script>

<style scoped>
.row {
  padding: 10px 20px 10px 20px;
  --bs-gutter-x: 0 !important;
  background-color: #d5b6a2;
  height: 100%;
}
.escolher {
  color: #d5b6a2;
  font-size: 26px;
}
.comprar {
  background-color: #202020;
  border: none;
  padding: 10px 20px 10px 20px;
  text-align: center;
  margin-top: 8px;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.qrcode {
  position: relative;
  display: flex !important;
  justify-content: flex-end !important;
  align-items: flex-end !important;
  margin-top: -150px;
}

.col-sm-8 > .h3-escolha {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}
.h3-escolha {
  width: 450px;
  display: flex;
  justify-content: center !important;
  align-items: center !important;
}
.col-sm-8 {
  background-color: #d5b6a2;
  height: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}
</style>