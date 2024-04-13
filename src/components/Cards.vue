<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div
      v-for="(produto, produtoIndex) in dadosProduto"
      :key="produtoIndex"
      class="col"
    >
      <div :class="Number(produto.estoque) > 0 ? 'card h-100' : 'card-esgotado h-100' ">
        <img :src="produto.url" class="card-img-top" alt="..." />
        <div class="status">
          <p v-if="Number(produto.estoque) > 0" class="disponivel">
            Em estoque
          </p>
          <p v-else class="esgotado">Esgotado</p>
        </div>
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
              >Ver</router-link
            >
          </button>
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

          <div class="containerFinalizar">
            <button v-if="Number(produto.estoque) > 0" @click="adicionarCarrinho(usuarioStore.trueUsuario.email, produto)" class="buttonFinalizar">Escolher presente</button>

            <button v-else class="buttonSemEstoque">Escolher presente</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useProdutoStore } from "../stores/produtoEscolhido";
import { useUsuarioStore } from "../stores/usuario";
import {
  doc,
  collection,
  getDocs,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const dadosProduto = ref([]);
const produtoStore = useProdutoStore();
const usuarioStore = useUsuarioStore();

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

    console.log(dadosProduto.value);
  } else {
    console.log("Nenhum documento encontrado");
  }
});
function incrementarQuantidade(produto) {
  if (produto.estoque - produto.quantidadeCliente > 0) {
    produto.quantidadeCliente += 1;
  } else {
    if (produto.quantidadeCliente === 1) {
      alert("Desculpe-me, mas este produto só pode ser comprado 1 vez!");
    } else {
      alert(`Desculpe-me, mas este produto só pode ser comprado ${produto.quantidadeCliente} vezes`); 
    }
  }
}
function decrementarQuantidade(produto) {
  if (produto.quantidadeCliente > 1) {
    produto.quantidadeCliente -= 1;
  }
}

async function adicionarCarrinho(email, produto) {
  if (email == undefined) {
    alert("Você não pode adicionar um produto pois não está logado");
  } else {
    let adicionarCarrinho = confirm("Você tem certeza de que deseja adicionar este presente ao seu carrinho? Escolha a opção 'OK' (em azul) se você quiser adicionar ao carrinho, ou a opção 'Cancelar' (em cinza) caso não queira adicionar ao carrinho!");
    if (adicionarCarrinho) {
      const addPresente = {email, nome: produto.nome, descricao: produto.descricao, estoque: produto.estoque, quantidadeCliente: produto.quantidadeCliente, confirmado: false, url: produto.url, id_produto: produto.id};
      const atualizarEstoque = (Number(produto.estoque) - produto.quantidadeCliente).toString();
      const atualizarProduto = {descricao: produto.descricao, estoque: atualizarEstoque, nome: produto.nome, url: produto.url};

      await addDoc(collection(db, 'carrinho'), addPresente).then(() => {
        produto.estoque = atualizarEstoque;
        alert("Presente adicionado ao carrinho com sucesso!")
      }).catch((error) => {
        console.error("Erro ao adicionar um produto ao carrinho:", error);
        alert("Erro ao adicionar o presente ao carrinho! Por favor, verifique sua conexão e tente novamente.");
      })

      await updateDoc(doc(db, 'produtos', produto.id), atualizarProduto).catch((error) => {
        console.error("Erro ao atualizar o produto:", error);
      })
    } else {
      alert("Produto não adicionado ao carrinho!");
    }
  }
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
  width: 35%;
}

.containerFinalizar {
  width: 40%;
}

.buttonFinalizar {
  width: 100%;
  padding: 10px 20px 10px 20px;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 1rem;
  background: #1a1a1a;
  color: orangered;
}
.buttonSemEstoque {
  width: 100%;
  padding: 10px 20px 10px 20px;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 1rem;
  background: #1a1a1a;
  color: #6b6664;
  cursor: default;
}
.quantidade-cliente {
  color: #fdfdfd;
  font-size: 14px;
  padding: 10px;
  margin: 0;
}

.disponivel {
  color: #10a310;
}

.esgotado {
  color: #e03333;
}

.status {
  position: absolute;
  top: 10px;
  left: 10px;
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
.card-esgotado {
  margin: 10px;
  background-color: #c3c3c3;
  --bs-card-spacer-y: 1rem;
  --bs-card-spacer-x: 1rem;
  --bs-card-title-spacer-y: 0.5rem;
  --bs-card-title-color: ;
  --bs-card-subtitle-color: ;
  --bs-card-border-width: var(--bs-border-width);
  --bs-card-border-color: var(--bs-border-color-translucent);
  --bs-card-border-radius: var(--bs-border-radius);
  --bs-card-box-shadow: ;
  --bs-card-inner-border-radius: calc(var(--bs-border-radius) -(var(--bs-border-width)));
  --bs-card-cap-padding-y: 0.5rem;
  --bs-card-cap-padding-x: 1rem;
  --bs-card-cap-bg: rgba(var(--bs-body-color-rgb), 0.03);
  --bs-card-cap-color: ;
  --bs-card-height: ;
  --bs-card-color: ;
  --bs-card-bg: var(--bs-body-bg);
  --bs-card-img-overlay-padding: 1rem;
  --bs-card-group-margin: 0.75rem;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    height: var(--bs-card-height);
    color: var(--bs-body-color);
    word-wrap: break-word;
    background-clip: border-box;
    border: var(--bs-card-border-width) solid var(--bs-card-border-color);
    border-radius: var(--bs-card-border-radius);
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
@media screen and (min-width: 320px) and (max-width: 424px) {
  .row {
    flex-direction: column;
    padding: 5px;
  }
  .col {
    margin: 5px 0;
  }
  .card {
    margin: 5px 0;
  }
  .card-img-top {
    min-height: 100vw;
    max-height: 100vw;
  }
  .card-body {
    align-items: center !important;
    text-align: center;
  }
  .status {
    top: 5px;
    left: 5px;
  }
  .buttonFinalizar {
    font-size: 0.8rem;
    padding: 8px 16px;
  }
  .quantidade-cliente {
    font-size: 12px;
    padding: 5px;
  }
  .containerButton {
    width: 50%;
  }
}
@media screen and (min-width: 425px) and (max-width: 560px) {
  .row {
    flex-direction: column;
    padding: 10px;
  }
  .col {
    margin: 5px 0;
  }
  .card {
    margin: 5px 0;
  }
  .card-img-top {
    min-height: 100vw;
    max-height: 100vw;
  }
  .card-body {
    align-items: center !important;
    text-align: center;
  }
  .status {
    top: 5px;
    left: 5px;
  }
  .buttonFinalizar {
    font-size: 0.8rem;
    padding: 8px 16px;
  }
  .quantidade-cliente {
    font-size: 12px;
    padding: 5px;
  }
  .containerButton {
    width: 50%;
  }
}
@media screen and (min-width: 561px) and (max-width: 767px) {
  .row {
    flex-direction: column;
    padding: 10px;
  }
  .col {
    margin: 5px 0;
  }
  .card {
    margin: 5px 0;
  }
  .card-img-top {
    min-height: 100vw;
    max-height: 100vw;
  }
  .card-body {
    align-items: center !important;
    text-align: center;
  }
  .status {
    top: 5px;
    left: 5px;
  }
  .buttonFinalizar {
    font-size: 0.8rem;
    padding: 8px 16px;
  }
  .quantidade-cliente {
    font-size: 12px;
    padding: 5px;
  }
  .containerButton {
    width: 50%;
  }
}
@media screen and (min-width: 768px) and (max-width: 1440px) {
  .row {
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
  }
  .col {
    flex-basis: calc(33.33% - 20px);
    margin: 5px 0;
  }
  .card {
    width: 100%;
    margin: 5px 0;
  }
  .card-footer {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    flex-wrap: wrap;
    padding: 5px;
  }
  .containerButton,
  .containerFinalizar {
    width: 45%; /* ou ajuste conforme desejado */
    margin-top: 5px; /* ou ajuste conforme desejado */
  }
  .buttonFinalizar {
    font-size: 0.8rem;
    padding: 8px 16px;
  }
  .containerButton {
    width: 50%;
  }
  .containerButton > .comprar {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .quantidade-cliente {
    font-size: 12px;
    padding: 5px;
  }
}
</style>