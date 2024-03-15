<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
    rel="stylesheet"
  />
  <div class="grid">
    <div
      v-for="(produto, produtoIndex) in dadosProduto"
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
        <button class="confirmar">Confirmar</button>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { heightAdjust } from "../functions/functions";
import { useProdutoStore } from "../stores/produtoEscolhido";
import { doc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const escolhaComponente = ref(null);
const data = ref([]);
const produto = useProdutoStore();
const dadosProduto = ref([]);
const produtoStore = useProdutoStore();

onMounted(async () => {
  await nextTick();
  data.value = (await produto).dadosProduto;
  console.log(data.value);
});

onMounted(async () => {
  let docSnapshot = await getDocs(collection(db, "produtos"));

  if (docSnapshot) {
    docSnapshot.forEach((produto) => {
      dadosProduto.value.push({ ...produto.data(), id: produto.id });
    });

    console.log(dadosProduto.value);
  } else {
    console.log("Nenhum documento encontrado");
  }
});
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
.confirmar {
  color: #fdfdfd;
  background-color: #202020;
  border: none;
  padding: 10px 20px 10px 20px;
  text-align: center;
  margin-top: 8px;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.direita {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 15px;
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