<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
    rel="stylesheet"
  />
  <div v-if="presenteResponsivo == false" class="container-presentes">
    <div v-for="(produto, produtoIndex) in produtosEscolhidos" :key="produtoIndex" class="presentes">
      <div class="conteudo-produto">
        <img :src="produto.url" alt="" width="100px" height="100px" />
      </div>
      <div class="container-baixo">
        <div class="container-nome-opcoes">
          <div class="nome-descricao">
            <h3 class="nome-produto">{{ produto.nome }}</h3>
            <p>{{ produto.descricao }}</p>
          </div>
          
          <div v-if="produto.confirmado == false" class="opcoes">
            <p>Confirmar: </p>
            <button @click="confirmarPresente(produto)" class="confirmar" title="Confirmar compra de presente">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check2 comprarPresente" viewBox="0 0 16 16">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
              </svg>
            </button>
            <button @click="removerPresente(produto.id, produto.id_produto)" class="remover" title="Remover presente do carrinho">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x removerPresente" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
              </svg>
            </button>
          </div>
        </div>

        <div v-if="produto.confirmado == false" class="buttons">
            <p class="quantidade">Quantidade:</p>
            <button class="aumentar" @click="alterarQuantidade(produto, true)">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus svg-quantidade" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
              </svg>
            </button>
            <p class="quantidadeEscolhida">{{ produto.quantidadeCliente }}</p>
            <button class="diminuir" @click="alterarQuantidade(produto, false)">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-dash svg-quantidade" viewBox="0 0 16 16">
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
              </svg>
            </button>
          </div>

          <div v-else>
            <h2 class="presenteConfirmado">Presente confirmado!!!</h2>
          </div>
      </div>
    </div>
  </div>

  <div v-else class="container-presentes-responsivo">
    <div v-for="(produto, produtoIndex) in produtosEscolhidos" :key="produtoIndex" class="presentes-responsivo">
      <div class="conteudo-produto">
        <img :src="produto.url" alt="" width="100px" height="100px" class="imagem-responsiva" />

        <div class="container-nome-opcoes">
          <div class="nome-descricao">
            <h3 class="nome-produto">{{ produto.nome }}</h3>
            <p class="descricao-responsiva">{{ produto.descricao }}</p>
          </div>
        </div>
      </div>
      <div class="quantidade-opcoes">
          <div v-if="produto.confirmado == false" class="container-quantidade-responsiva">
            <button class="aumentar" @click="alterarQuantidade(produto, true)">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus svg-quantidade" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
              </svg>
            </button>
            <p class="quantidadeEscolhida">{{ produto.quantidadeCliente }}</p>
            <button class="diminuir" @click="alterarQuantidade(produto, false)">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-dash svg-quantidade" viewBox="0 0 16 16">
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
              </svg>
            </button>
          </div>

          <div v-if="produto.confirmado == false" class="opcoes-responsiva">
            <p>Confirmar: </p>
            <button @click="confirmarPresente(produto)" class="confirmar-responsiva" title="Confirmar compra de presente">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check2 comprarPresente" viewBox="0 0 16 16">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
              </svg>
            </button>
            <button @click="removerPresente(produto.id, produto.id_produto)" class="remover-responsiva" title="Remover presente do carrinho">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x removerPresente" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
              </svg>
            </button>
        </div>

        <div v-else class="presenteConfirmado">
          <h2>Presente confirmado!!!</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { useUsuarioStore } from "../stores/usuario";
import { useQuantidadeProdutosStore } from "../stores/quantidadeProdutos";
import { query, where, collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const usuario = useUsuarioStore();
const produtosEscolhidos = ref([]);
const quantidadeProdutos = useQuantidadeProdutosStore();
const presenteResponsivo = ref(false);

onMounted(async () => {
  await nextTick()

  if (document.documentElement.offsetWidth <= 1023) {
    presenteResponsivo.value = true
    console.log(presenteResponsivo.value)
  }

  console.log(usuario.email)

  // Crie a consulta após o componente ter sido montado
  let q = query(collection(db, "carrinho"), where("email", "==", usuario.email));
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
  quantidadeProdutos.quantidadeProdutos = produtosEscolhidos.value.length;
});

function alterarQuantidade(presente, aumentar) {
  if (aumentar) {
    if (Number(presente.estoque) - presente.quantidadeCliente > 0) {
      presente.quantidadeCliente += 1
      console.log(Number(presente.estoque), presente.quantidadeCliente);
    } else {
      if (presente.quantidadeCliente > 1) {
        alert(`Desculpe, mas não é possível aumentar a quantidade que você vai levar deste produto, pois é preferível a compra de no máximo ${presente.quantidadeCliente} unidades deste produto!`);
      } else {
        alert(`Desculpe, mas não é possível aumentar a quantidade que você vai levar deste produto, pois é preferível a compra de no máximo 1 unidade deste produto!`);
      }
    }
  } else {
    if (presente.quantidadeCliente === 1) {
      let remover = confirm("Você deseja remover este presente do carrinho? Escolha 'OK' se deseja remover e 'Cancelar' se deseja manter o presente no carrinho!");

      if (remover) {
        removerPresente(presente.id, presente.id_produto)
      }
    } else {
      presente.quantidadeCliente -= 1;
    }
  }
}

async function confirmarPresente(presente) {
  let confirmarRequest = confirm("Você tem CERTEZA de que quer confirmar o presente? Tenha em mente que depois de confirmar esta ação não poderá ser desfeita, então tenha certeza de que irá comprar (ou já comprou) o presente!!! Se tiver certeza, escolha a opção 'OK' (em azul), se não tiver certeza, escolha a opção 'Cancelar' (em cinza)");

  if (confirmarRequest) {
    await updateDoc(doc(db, 'carrinho', presente.id), {
      confirmado: true
    }).then(() => {
      presente.confirmado = true;
      alert("Presente confirmado com sucesso!");
    }).catch((error) => {
      console.error("Erro ao confirmar o presente:", error);
      alert("Erro ao confirmar o presente!");
    })
  } else {
    alert("A confirmação do presente foi cancelada, conforme escolha da opção 'Cancelar'");
  }
}


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
@import url('../assets/css/responsividade/Carrinho/carrinho.css');

.container-presentes {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
}

.presentes {
  display: flex;
  width: 85%;
}
.conteudo-produto {
  display: flex;
  align-items: flex-start;
  margin: 0 30px 0 20px;
}
.container-baixo {
  display: flex;
  flex-direction: column;
  width: 50%;
}
.quantidade {
  margin: 0;
  font-size: 18px;
}
.buttons {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  column-gap: 10px;
}
.aumentar, .diminuir {
  width: 25px;
  height: 25px;
  background-color: #202020;
  color: #FDFDFD;
  border: none;
  border-radius: 3px;
}
.svg-quantidade {
  position: relative;
  bottom: 2px;
}
.container-nome-opcoes {
  display: flex;
}
.nome-descricao {
  flex-grow: 1;
}
.nome-produto {
  margin: 0;
}
.quantidadeEscolhida {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0;
}
.presenteConfirmado {
  font-size: 1.5rem;
  color: #0ca50c;
}
.opcoes {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  column-gap: 20px;
}
.opcoes > p, .opcoes-responsiva {
  margin: 0;
  font-size: 24px;
}
.confirmar,
.remover {
  background-color: #202020;
  border: none;
  padding: 3px;
  margin-top: 5px;
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
.remover > button {
  border: none;
  outline: none;
  background: transparent;
  color: #ccc;
}

/* @media (max-width: 374px) {
  .presentes {
    margin-top: 10px;
  }
  .conteudo-produto {
    margin-left: 10px;
  }
} */

.container-presentes-responsivo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 50px;
}
.presentes-responsivo {
  display: flex;
  flex-direction: column;
}
.descricao-responsiva {
  width: 65%;
}
.imagem-responsiva {
  margin-right: 10px;
}
.quantidade-opcoes {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  column-gap: 20px;
  margin-top: 20px;
  margin-left: 20px;
}
.container-quantidade-responsiva {
  display: flex;
  gap: 20px;
}
.opcoes-responsiva {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  column-gap: 20px;
  position: relative;
  bottom: 6px;
}
.confirmar-responsiva, .remover-responsiva {
  width: 25px;
  height: 25px;
  background-color: #202020;
  border: none;
  padding: 3px;
  margin-top: 8px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>