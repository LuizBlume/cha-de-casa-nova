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
        <button class="confirmar">Confirmar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { doc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const produtosEscolhidos = ref([]);

onMounted(async () => {
  let snapShoot = await getDocs(collection(db, 'carrinho'));

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