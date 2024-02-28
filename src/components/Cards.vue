<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div v-for="(produto, produtoIndex) in dadosProduto" :key="produtoIndex" class="col">
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
            <router-link to="/escolha" class="escolher">Escolher</router-link>
          </button>
          <button class="comprar">
            <router-link to="" class="escolher esg disp">Disponível</router-link>
          </button>
        </div>
        <div class="card-footer">
          <p>lorem</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { doc, collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"

const dadosProduto = ref([]);

onMounted(async () => {
  let docSnapshot = await getDocs(collection(db, 'produtos'));

  if (docSnapshot) {
    docSnapshot.forEach((produto) => {
      dadosProduto.value.push({...produto.data(), id: produto.id})
    });

    console.log(dadosProduto.value);
  } else {
    console.log("Nenhum documento encontrado");
  }
})
</script>


<style scoped>
.esg {
  background-color: #202020;
  color: #e03333 !important;
  text-align: center;
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
  background-color: #D5B6A2;
}
.g-4, .gx-4 {
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
  color: #D5B6A2;
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