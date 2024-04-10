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
      <div class="quantidade">
        <div class="buttons">
          <p class="quantidadeEscolhida">Quantidade:</p>
          <button class="aumentar" @click="aumentarQuantidade(produto.id, produto.id_produto)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-plus-circle"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm4.5 7.5a.5.5 0 0 1-.5.5h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3V4.5a.5.5 0 0 1 1 0v3h3a.5.5 0 0 1 .5.5Z"
              />
            </svg>
          </button>
          <p class="quantidadeEscolhida">{{ produto.quantidadeCliente }}</p>
          <button class="diminuir" @click="diminuirQuantidade(produto.id, produto.id_produto)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-dash-circle"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM4.5 7.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1H4.5Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="direita">
        <p>Confirmar: </p>
        <button class="confirmar" title="Confirmar compra de presente">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-check2 comprarPresente"
            viewBox="0 0 16 16"
          >
            <path
              d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"
            />
          </svg>
        </button>
        <button
          @click="removerPresente(produto.id, produto.id_produto)"
          class="remover"
          title="Remover presente do carrinho"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-x removerPresente"
            viewBox="0 0 16 16"
          >
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { useUsuarioStore } from "../stores/usuario";
import {
  query,
  where,
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const usuario = useUsuarioStore();
const produtosEscolhidos = ref([]);

onMounted(async () => {
  // Crie a consulta após o componente ter sido montado
  let q = query(
    collection(db, "carrinho"),
    where("email", "==", usuario.email)
  );
  let snapShoot = await getDocs(q);

  if (snapShoot) {
    snapShoot.forEach((presente) => {
      produtosEscolhidos.value.push({
        ...presente.data(),
        id: presente.id,
      });
    });

    console.log(produtosEscolhidos.value);
  } else {
    console.log("Nenhum produto escolhido", typeof produtosEscolhidos.value);
  }
});

async function removerPresente(id_presente, id_produto) {
  let estoque_produto = "";
  produtosEscolhidos.value.forEach((produto) => {
    if (produto.id === id_presente) {
      estoque_produto = produto.quantidadeCliente.toString();
      console.log(estoque_produto, id_produto, id_presente);
    }
  });

  await deleteDoc(doc(db, "carrinho", id_presente));

  await updateDoc(doc(db, "produtos", id_produto), {
    estoque: estoque_produto,
  }).then(() => {
    console.log("Estoque atualizado");
    location.reload();
  });
}
</script>

<style scoped>
.g-col-6 {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 5px #c7a995;
  width: 100vw;
  height: 100vh;
  background-color: #d5b6a2;
}
.buttons {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  column-gap: 10px;
}
.diminuir, .aumentar {
  background-color: #fdfdfd;
  color: #202020;
  border: none;
  border-radius: 50%;
}
.buttons > p {
  margin: 0;
  font-size: 24px;
}
.direita > p {
  margin: 0;
  font-size: 24px;
}
.quantidade {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.quantidadeEscolhida {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0;
}
.grid {
  margin-top: 40px;
  --bs-gutter-x: 0 !important;
}
.grid-container[data-v-f4fe258e] {
    display: grid;
    grid-template-areas:
        "header"
        "main"
        "footer";
    grid-template-rows: 1fr 5fr 1fr !important;
    background-color: #D5B6A2;
}
.conteudo-produto {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 30px;
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
  align-items: flex-start;
  justify-content: center;
  margin-right: 15px;
  column-gap: 20px;
}
.confirmar,
.remover {
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
.comprarPresente {
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
@media (max-width: 425px) {
  .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 100% !important;
  }
  .g-col-6 {
    width: 100vw;
    height: 50vh !important;
    flex-wrap: wrap;
  }
  .conteudo-produto {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
  .nomes {
    width: 100%;
    margin-top: 10px;
  }
  .direita {
    margin-bottom: 20px;
    justify-content: center;
  }
  .buttons {
    justify-content: center;
  }
  .quantidade {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .remover > button {
    margin-top: 8px; 
  }
  .direita > p {
    margin-right: 7px;
  }
}
</style>