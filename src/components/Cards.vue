<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div
      v-for="(produto, produtoIndex) in dadosProduto"
      :key="produtoIndex"
      class="col"
    >
      <div class="card h-100">
        <img :src="produto.url" class="card-img-top" alt="..." />
        <div class="status">
            <p v-if="Number(produto.estoque) > 0" class="disponivel">Em estoque</p>
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
            <button @click="adicionarCarrinho(usuarioStore.trueUsuario.email, produto.nome, produto.quantidadeCliente, produto.estoque, produto.url, produto.id, produto.descricao)" class="buttonFinalizar">Escolher presente</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useProdutoStore } from "../stores/produtoEscolhido";
import { useUsuarioStore } from "../stores/usuario"
import { doc, collection, getDocs, addDoc, updateDoc } from "firebase/firestore";
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
  } else {
    console.log("Nenhum documento encontrado");
  }
  console.log(dadosProduto.value);
});
function decrementarQuantidade(produto) {
  if (produto.quantidadeCliente > 1) {
    produto.quantidadeCliente -= 1;
  }
}
function incrementarQuantidade(produto) {
  produto.quantidadeCliente += 1;
}

async function adicionarCarrinho(email, nomeProduto, quantidadeCliente, estoque, url, id, descricao) {
  if (email == undefined) {
    console.log("Você não pode adicionar um produto pois não está logado");
  } else {
    const addPresente = {email, nome: nomeProduto, quantidadeCliente, url, id};
    const atualizarEstoque = (Number(estoque) - quantidadeCliente).toString();
    const atualizarProduto = {descricao, estoque: atualizarEstoque, nome: nomeProduto, url};
    console.log(atualizarEstoque)
    console.log(atualizarProduto);

    await addDoc(collection(db, 'carrinho'), addPresente).then((res) => {
      console.log("Produto adicionado com sucesso!");
    }).catch((error) => {
      console.error("Erro ao adicionar um produto ao carrinho:", error);
    })

    await updateDoc(doc(db, 'produtos', id), atualizarProduto).then((res) => {
      console.log("Produto atualizado com sucesso");
    }).catch((error) => {
      console.error("Erro ao atualizar o produto:", error);
    })
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