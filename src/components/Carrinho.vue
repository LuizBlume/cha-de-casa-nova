<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
    rel="stylesheet"
  />
  <div class="grid">
    <div
      v-for="(produto, produtoIndex) in produtosEscolhidos"
      :key="produtoIndex"
      class="g-col-6"
    >
      <div class="conteudo-produto">
        <img :src="produto.url" alt="" width="100px" height="100px" />
        <div class="nomes">
          <h3>{{ produto.nome }}</h3>
          <p>{{ produto.descricao }}</p>
        </div>
      </div>

      <div class="direita">
        <button class="confirmar" title="Confirmar compra de presente">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check2 comprarPresente" viewBox="0 0 16 16">
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
          </svg>
        </button>

        <button @click="removerPresente(produto.id, produto.id_produto)" class="remover" title="Remover presente do carrinho">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x removerPresente" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { useUsuarioStore } from "../stores/usuario";
import { query, where, collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const usuario = useUsuarioStore();
const produtosEscolhidos = ref([]);

onMounted(async () => {
  // Crie a consulta após o componente ter sido montado
  let q = query(collection(db, 'carrinho'), where('email', "==", usuario.email));
  let snapShoot = await getDocs(q);

  if (snapShoot) {
    snapShoot.forEach((presente) => {
      produtosEscolhidos.value.push({
        ...presente.data(),
        id: presente.id
      });
    });

    console.log(produtosEscolhidos.value);
  } else {
    console.log("Nenhum produto escolhido", typeof(produtosEscolhidos.value));
  }
});

async function removerPresente(id_presente, id_produto) {
  let estoque_produto = ''
  produtosEscolhidos.value.forEach((produto) => {
    if (produto.id === id_presente) {
      estoque_produto = produto.quantidadeCliente.toString()
      console.log(estoque_produto, id_produto, id_presente)
    }
  })

  await deleteDoc(doc(db, 'carrinho', id_presente))

  await updateDoc(doc(db, 'produtos', id_produto), {
    estoque: estoque_produto
  }).then(() => {
    console.log("Estoque atualizado");
    location.reload();
  })
}
</script>

<style scoped>
.g-col-6 {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 5px #c7a995;
}

.grid {
  margin-top: 40px;
}

.conteudo-produto {
  display: flex;
  align-items: center;
}
.nomes {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.direita {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 15px;
  column-gap: 20px;
}
.confirmar, .remover {
  color: #fdfdfd;
  background-color: #202020;
  border: none;
  padding: 5px;
  text-align: center;
  margin-top: 8px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.comprarPresente{
  color: rgb(10, 179, 10);
}
.removerPresente {
  color: red;
}
.titulo {
  margin-top: 20px;
  font-family: "Kaushan Script";
  text-align: center;
  font-size: 3rem;
}
.produtos {
  display: flex;
}
.produto {
  display: flex;
  border-top: 2.5px solid #ccc;
}
.divisoria {
  width: 100%;
}
.quantidade {
  display: flex;
}
.remover > button {
  border: none;
  outline: none;
  background: transparent;
  color: #ccc;
}
</style>