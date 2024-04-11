<template>
  <div class="containerEscolha" ref="escolhaComponente">
    <Header />
    <div class="row">
      <div class="col-sm-4">
        <h3>{{ data.nome }}</h3>
        <img
          :src="data.url"
          alt="Jogo de Copos Nadir 465ml"
          width="350"
          height="350"
          class="img-produto"
        />
        <button class="comprar">
          <router-link to="/Escolha" class="escolher">Confirmar</router-link>
        </button>
      </div>
      <div class="col-sm-8">
        <h3 class="h3-escolha">
          Temos a opção de você comprar o presente em uma loja de sua
          preferência e levar no dia, ou se achar melhor pode realizar um PIX no
          QRcode abaixo
        </h3>
      </div>
      <div class="qrcode">
        <p class="email">Email: raissacamillyalvesdedeus@gmail.com</p>
        <img src="../assets/images/qrcode.jpg" alt="" width="150px" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { ref, onMounted, nextTick } from "vue";
import { heightAdjust } from "../functions/functions";
import { useProdutoStore } from "../stores/produtoEscolhido";

const escolhaComponente = ref(null);
const data = ref([]);
const produto = useProdutoStore();

onMounted(async () => {
  await nextTick();
  data.value = (await produto).dadosProduto;
  console.log(data.value);
});
</script>

<style scoped>
.row {
  padding: 10px 20px 10px 20px;
  --bs-gutter-x: 0 !important;
  background-color: #d5b6a2;
  height: 100%;
}
.email {
  margin-right: 10px;
  font-size: 26px;
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
@media screen and (min-width: 320px) and (max-width: 424px) {
  .row {
    width: 100vw !important;
    flex-direction: column;
    padding: 40px;
    --bs-gutter-x: 0 !important;
  }
  .col-sm-4, .col-sm-8 {
    width: 100%;
    text-align: center;
  }
  .col-sm-4 {
    margin-bottom: 20px;
  }
  .img-produto {
    width: 300px;
    height: 300px;
  }
  .qrcode {
    margin-top: 20px;
    justify-content: center !important;
    align-items: center !important;
  }
  .h3-escolha {
    width: auto; 
  }
  .qrcode > p {
    font-size: 18px !important;
  }
  h3 {
    margin-top: 30px;
  }
  .comprar {
    margin-top: 20px;
  }
}
@media screen and (max-width: 425px) {
  .row {
    flex-direction: column;
    padding: 10px;
  }
  .col-sm-4,
  .col-sm-8 {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .col-sm-8 {
    margin-top: 20px;
  }
  .qrcode {
    margin-top: 20px;
    justify-content: center !important;
    align-items: center !important;
    flex-wrap: wrap;
  }
  .qrcode > p {
    font-size: 20px;
  }
  .h3-escolha {
    width: auto;
  }
  .email {
    margin: 10px 0;
  }
  .comprar {
    margin-top: 20px;
  }
}
@media screen and (min-width: 426px) and (max-width: 560px) {
  .row {
    width: 100vw;
    flex-direction: column;
    padding: 10px;
  }
  .col-sm-4, .col-sm-8 {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .col-sm-4 {
    margin-bottom: 20px;
  }
  .qrcode {
    margin-top: 20px;
    justify-content: center !important;
    align-items: center !important;
    flex-wrap: wrap;
  }
  .dropdown {
    margin-top: 20px;
  }
  .h3-escolha {
    width: auto;
  }
  .email {
    margin: 10px 0;
  }
  .comprar {
    margin-top: 20px;
  }
}
@media screen and (min-width: 561px) and (max-width: 768px) {
  .row {
    padding: 20px; 
  }
  .col-sm-4 {
    width: 100%;
    margin-bottom: 20px; 
  }
  .col-sm-8 {
    width: 100%; 
  }
  .col-sm-4, .col-sm-8 {
    text-align: center; 
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
  }
  .qrcode {
    margin-top: 20px; 
    justify-content: center !important; 
    align-items: center !important;
  }
  .h3-escolha {
    width: auto; 
  }
  .email {
    margin: 10px 0; 
  }
  .comprar {
    margin-top: 20px; 
  }
}
@media screen and (min-width: 769px) and (max-width: 920px) {
  .col-sm-4 {
    width: 40%; 
    float: left; 
    margin-right: 5%; 
  }
  .col-sm-8 {
    width: 50%; 
    float: left; 
    margin-left: 20px;
  }
  .qrcode {
    margin-top: 0; 
    justify-content: flex-end !important; 
    align-items: flex-end !important;
  }
  .h3-escolha {
    width: auto; 
  }
}
@media screen and (min-width: 921px) and (max-width: 1024px) {
  .col-sm-4 {
    width: 40%; 
    float: left; 
    margin-right: 5%; 
  }
  .col-sm-8 {
    width: 50%; 
    float: left; 
  }
  .qrcode {
    margin-top: 0; 
    justify-content: flex-end !important; 
    align-items: flex-end !important;
  }
  .h3-escolha {
    width: auto; 
    text-align: left; 
    margin-bottom: 20px; 
  }
}
@media screen and (min-width: 1025px) and (max-width: 1440px) {
  .col-sm-4 {
    width: 40%; 
    float: left; 
    margin-right: 5%; 
  }
  .col-sm-8 {
    width: 50%; 
    float: left; 
  }
  .qrcode {
    margin-top: 0; 
    justify-content: flex-end !important; 
    align-items: flex-end !important;
  }
  .h3-escolha {
    width: auto; 
    text-align: left; 
    margin-bottom: 20px; 
  }
}
</style>