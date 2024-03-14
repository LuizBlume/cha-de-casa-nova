<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div
      v-for="(produto, produtoIndex) in dadosProduto"
      :key="produtoIndex"
      class="col"
    >
      <div class="card h-100">
        <img :src="produto.url" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">
            {{ produto.nome }}
          </h5>
          <p class="card-text">
            {{ produto.descricao }}
          </p>
        </div>
        <div class="card-footer">
          <button class="comprar">
            <router-link
              @click="produtoStore.dadosProduto = produto"
              to="/escolha"
              class="escolher"
              >Escolher</router-link
            >
          </button>
          <button class="comprar escolher esg disp">Disponível</button>
        </div>
        <div class="card-footer">
            <div class="containerButton">
            <button
              class="comprar adicionarItens"
              @click="incrementarQuantidade(produto)"
            >
              +
            </button>
            <p class="quantidade-cliente">{{ produto.quantidadeCliente }}</p>
            <button
              class="comprar removerItens"
              @click="decrementarQuantidade(produto)"
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useProdutoStore } from "../stores/produtoEscolhido";
import { doc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const dadosProduto = ref([]);
const produtoStore = useProdutoStore();

onMounted(async () => {
  let docSnapshot = await getDocs(collection(db, "produtos"));

  if (docSnapshot) {
    docSnapshot.forEach((produto) => {
      dadosProduto.value.push({
        ...produto.data(),
        id: produto.id,
        quantidadeCliente: 1,
      });
    });
  } else {
    console.log("Nenhum documento encontrado");
  }
});
function decrementarQuantidade(produto) {
  if (produto.quantidadeCliente > 1) {
    produto.quantidadeCliente -= 1;
  }
}
function incrementarQuantidade(produto) {
  produto.quantidadeCliente += 1;
}
</script>


<style scoped>
.esg {
  background-color: #202020;
  color: #e03333 !important;
  text-align: center;
  margin: 0;
}
.removerItens {
  color: #fdfdfd;
}
.adicionarItens {
  color: #fdfdfd;
}
.containerButton {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1a1a1a;
  border-radius: 5px;
  width: 100%;
}
.quantidade-cliente {
  color: #fdfdfd;
  font-size: 14px;
  padding: 10px;
  margin: 0;
}
.disp {
  background-color: #202020;
  color: #1add1a !important;
  text-align: center;
  margin: 0;
}
.row {
  padding: 10px 20px 10px 20px;
  background-color: #d5b6a2;
}
.g-4,
.gx-4 {
  --bs-gutter-x: 0;
  --bs-gutter-y: 0;
}
.col {
  margin: 5px 0 5px 0;
}
.comprar {
  background-color: #202020;
  border: none;
  padding: 10px 20px 10px 20px;
  text-align: center;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
}
.escolher {
  color: #d5b6a2;
  text-decoration: none;
}
.card {
  margin: 10px;
  background-color: #d1ac94;
}
.card-body {
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: flex-start !important;
}
.card-footer {
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
}
@media (width: 320px) {
  .card-img-top {
    min-height: 100vw;
    max-height: 100vw;
  }
}
@media (min-width: 1025px) and (max-width: 1440px) {
  .card-img-top {
    min-height: 30vw;
    max-height: 30vw;
  }
}
@media (min-width: 1025px) and (max-width: 1440px) {
  .card-img-top {
    min-height: 30vw;
    max-height: 30vw;
  }
}
@media (min-width: 1025px) and (max-width: 1440px) {
  .card-img-top {
    min-height: 30vw;
    max-height: 30vw;
  }
}
</style>