<template>
  <div class="containerEscolha" ref="escolhaComponente">
    <Header />
    <div class="row">
      <div class="col-sm-4">
        <h3>{{ data.nome }}</h3>
        <img :src="data.url" alt="Jogo de Copos Nadir 465ml" width="350" height="350" />
        <button @click="adicionarPresenteCarrinho" v-if="Number(data.estoque) > 0" class="comprar">Adicionar ao carrinho (1 quantidade)</button>
      </div>
      <div class="container-escolha-qr">
        <div class="col-sm-8">
          <h3 class="h3-escolha">
            Temos a opção de você comprar o presente em uma loja de sua preferência
            e levar no dia, ou se achar melhor pode realizar um PIX no QRcode abaixo
          </h3>
        </div>
        <div class="qrcode">
          <p class="email">Email: raissacamillyalvesdedeus@gmail.com</p>
            <img src="../assets/images/qrcode.jpg" alt="" width="150px" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { ref, onMounted, nextTick } from "vue"
import { collection, addDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase"
import { useProdutoStore } from "../stores/produtoEscolhido"
import { useUsuarioStore } from "../stores/usuario"

const escolhaComponente = ref(null);
const data = ref([]);
const produto = useProdutoStore();
const usuario = useUsuarioStore();

onMounted(async () => {
  await nextTick();
  data.value = (await produto).dadosProduto;
  console.log(data.value);
})

async function adicionarPresenteCarrinho() {
  const presente = {email: usuario.email, nome: data.value.nome, descricao: data.value.descricao, estoque: data.value.estoque, quantidadeCliente: data.value.quantidadeCliente, confirmado: false, url: data.value.url, id_produto: data.value.id};

  console.log(presente)
}
</script>

<style scoped>
.row {
  justify-content: space-between!important;
  padding: 10px 20px 10px 20px;
  --bs-gutter-x: 0 !important;
  background-color: #d5b6a2;
  height: 100%;
  flex-wrap: nowrap!important;
}
.row > * {
  width: auto!important;
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
  color: #FDFDFD;
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
}
.container-escolha-qr {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.col-sm-8 > .h3-escolha {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}
.h3-escolha {
  width: 450px;
}
</style>