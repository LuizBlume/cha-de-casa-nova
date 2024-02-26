<template>
  <div class="add-container" ref="addProductElement">
    <link
      href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
      rel="stylesheet"
    />

    <div>
      <form @submit.prevent="adicionarProduto" class="form-add-product">
        <div class="title-container">
          <legend class="title-add">Novo produto</legend>
        </div>

        <div class="container-input">
          <input type="text" id="nomeProduto" class="inputProduct" v-model="dados.nome" required />
          <label for="nomeProduto" class="labelProduct">Nome</label>
        </div>
        <div class="container-input">
          <input type="text" id="estoqueProduto" class="inputProduct" v-model="dados.estoque" required />
          <label for="estoqueProduto" class="labelProduct">Estoque</label>
        </div>
        <div class="container-input">
          <input type="file" id="imagemProduto" class="imageProduct" @change="handleImage" required />
          <label for="imagemProduto" class="labelImage">Imagem</label>
        </div>
        <div class="container-input">
          <label for="descricaoProduto" class="labelDescription">Descrição</label>
          <textarea cols="30" rows="10" id="descricaoProduto" class="textareaProduct" v-model="dados.descricao" placeholder="Descreva o produto..." required></textarea>
        </div>
        <div class="container-submit">
            <button type="submit" class="btn btn-secondary btn-reg">Adicionar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue"
import { db } from "../firebase"
import { doc, collection, addDoc, updateDoc, deleteDoc } from "firebase/firestore"
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage"
import { firebaseApp, storage } from "../firebase"

const dados = ref({
  nome: '',
  estoque: 0,
  descricao: '',
  url: '',
})

const url = ref([]);

const upload = ref({});

const listImages = ref(storage, 'produtos/')

function handleImage(event) {
    upload.value = event.target.files[0]
    console.log(upload.value)
}

async function uploadImages() {
  if (upload.value) {
          const storageRef = ref(storage, 'produtos/' + upload.value.name);

          const metadata = {
              contentType: 'image/jpeg',
          };

          try {
              await uploadBytes(storageRef, upload.value, metadata)
              console.log("Imagem enviada", upload.value.name);
              getImages();
          } catch (error) {
              console.error("Erro ao enviar a imagem:", error);
          }
      } else {
          console.log("No file selected");
      }
}

async function getImages() {
  listAll(listImages).then(async (res) => {

    for (const item of res.items) {
      if (item.name === upload.value.name) {
        if (!Array.isArray(url.value)) {
          url.value = [];
        }
        const downloadURL = await getDownloadURL(item);
    
        url.value.push(downloadURL);

        // if (Array.isArray(url.value) && url.value.length > 0) {
        //   dados.value.url = url.value[0];
        // }

        addOuAtualizarProduto();
      }
    }
  }).catch((error) => {
    console.error("Erro ao pegar URL da imagem:", error);
  })
}

async function addOuAtualizarProduto() {
  await addDoc(collection(db, 'produtos'), dados.value).then((res) => {
    console.log("Post concluído com sucesso!");
  }).catch((error) => {
    console.error("Erro ao tentar realizar o post:", error);
  })
}

async function adicionarProduto() {
    uploadImages();
}
</script>

<style scoped>
* {
  font-family: "Kaushan Script";
}

.form-add-product {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.title-container {
    margin-bottom: 30px;
}

.title-add {
  text-align: center;    
  font-size: 3rem;
}

.container-input, .container-submit {
  position: relative;
  width: 600px;
  font-size: 1.8rem;
  margin-left: 50px;
  margin-top: 50px;
}

.inputProduct {
  background: none;
  border: none;
  border-bottom: 1px solid #bf9d87;
  color: #2c2c2c;
  outline: none;
  font-size: 20px;
  width: 100%;
  letter-spacing: 2px;
  font-family: Arial, Helvetica, sans-serif;
}

.imageProduct {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.4rem;
    margin-top: 20px;
}

.textareaProduct {
    border-radius: 10px;
    outline: 0;
    width: 600px;
    height: 200px;
    padding: 20px;
    margin-bottom: 20px;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    background: #e6b696;
    resize: none;
}

.labelProduct {
  position: absolute;
  top: 0px;
  left: 0px;
  pointer-events: none;
  transition: 0.5s;
  font-size: 25px;
  font-family: "Kaushan Script";
}

.labelImage {
  position: absolute;
  bottom: 45px;
  left: 0px;
  pointer-events: none;
  transition: 0.5s;
  font-size: 25px;
  font-family: "Kaushan Script";
}

.labelDescription {
  position: absolute;
  bottom: 235px;
  left: 0px;
  pointer-events: none;
  transition: 0.5s;
  font-size: 25px;
  font-family: "Kaushan Script";
}

.inputProduct:focus ~ .labelProduct,
.inputProduct:valid ~ .labelProduct {
  top: -20px;
  font-size: 20px;
  color: #161616;
}

.container-input > input::placeholder {
  position: relative;
  left: 5px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
}

.container-submit {
    margin-bottom: 50px;
}

.container-submit > button {
    padding: 0;
    width: 300px;
    height: 50px;
    font-size: 30px;
    border-radius: 10px;
    background-color: #bf9d87;
    border: none;
    color: #2c2c2c;
}

.container-submit > button:hover {
    background-color: #a88b77;
}
</style>
