<template>
    <link
    href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
    rel="stylesheet"
  />
  <div class="row">
    <div class="col-4">
      <router-link to="/" class="router">
        <h1 class="h1-header">Chá de Casa Nova</h1>
      </router-link>
      <h3 class="h3-v">Victor</h3>
      <h3 class="h3-i">&</h3>
      <h3 class="h3-r">Raissa</h3>
      <div class="inferior">
        <h4>Não tem uma conta?</h4>
        <p>Crie uma aqui!</p>
        <router-link to="/cadastro" class="router">
          <button class="btn btn-secondary btn-reg">Cadastrar-se</button>
        </router-link>
      </div>
    </div>
    <div class="col-8">
      <form @submit.prevent="logar">
        <h1 class="h1-header">Login</h1>
        <div class="box">
          <div class="inputBox">
            <input type="text" name="nome" id="nome" class="inputUser" v-model="email" required />
              <label for="nome" class="labelInput">Email</label>
          </div>
        </div>
        <div class="box2">
          <div class="inputBox">
            <input type="password" name="senha" id="senha" class="inputUser" v-model="senha" required />
              <label for="senha" class="labelInput">Senha</label>
          </div>
        </div>
        <div class="botao-reg">
              <button type="submit" class="btn btn-secondary btn-reg">Conectar-se</button>
        </div>
        <h2 v-if="showError" class="erroCredenciais">Email e/ou senha incorretos!</h2>
        </form>
      </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useReloadStore } from "../stores/reload"
import { firebaseApp } from "../firebase";

const email = ref('');
const senha = ref('');
const router = useRouter();
const reloadStore = useReloadStore();
const showError = ref(false);

async function logar() {
  try {
    const auth = getAuth();

    await signInWithEmailAndPassword(auth, email.value, senha.value).then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        reloadStore.isReload = true;
        router.push({ path: '/' });
    })
  } catch(error) {
    showError.value = true
    console.log(showError)
    console.error("Erro ao logar o usuário:", error);
  }
}
</script>

<style scoped>
.h1-header {
  color: #2c2c2c;
  font-family: "Kaushan Script";
  font-style: normal;
  font-size: 55px;
  font-weight: 400;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.h3-v,
.h3-i,
.h3-r {
  color: #2c2c2c;
  font-family: "Kaushan Script";
  font-style: normal;
  font-size: 50px;
  font-weight: 400;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.h3-v {
  margin: 10px 200px 0 0;
}
.h3-i {
  margin: -20px 20px 0 0;
}
.h3-r {
  margin: -30px 0 0 180px;
}
.col-4 {
  background-color: #d5b6a2;
  height: 100vh;
  box-shadow: 1px 0px 12px 3px rgba(75, 75, 75, 0.75);
  z-index: 1;
}
.col-8 {
  background-color: #d5b6a2;
  height: 100vh;
  padding: 0;
}
.router {
  text-decoration: none;
  color: #2c2c2c;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}
.row {
  --bs-gutter-x: 0;
}
h4,
p {
  position: relative;
  top: 160px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Kaushan Script";
  font-style: normal;
  font-size: 50px;
  font-weight: 400;
  line-height: normal;
}
.btn {
  background-color: #bf9d87;
  border: none;
  border-radius: 50px;
  margin-top: 170px;
  width: 200px;
  height: 50px;
  font-family: "Kaushan Script";
  font-style: normal;
  font-size: 30px;
  font-weight: 400;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2c2c2c;
}
.inputUser {
  background: none;
  border: none;
  border-bottom: 1px solid #bf9d87;
  color: #2c2c2c;
  outline: none;
  font-size: 25px;
  width: 100%;
  letter-spacing: 2px;
}
.labelInput {
  position: absolute;
  top: 0px;
  left: 0px;
  pointer-events: none;
  transition: 0.5s;
  font-size: 20px;
  font-family: "Kaushan Script";
}
.inputUser:focus ~ .labelInput,
.inputUser:valid ~ .labelInput {
  top: -20px;
  font-size: 15px;
  color: #161616;
}
.inputBox {
  position: relative;
  width: 600px;
}
.box,
.box2 {
  position: relative;
  top: 60px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.box2 {
  top: 200px;
}
.botao-reg {
  position: relative;
  top: 250px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.btn-reg:hover {
  background-color: #a88b77;
  color: #2c2c2c;
}

.erroCredenciais {
  color: #91674b;
  margin-left: 210px;
}

@media (max-width: 320px) {
  .h1-header {
    font-size: 40px;
  }
  .h3-v,
  .h3-i,
  .h3-r {
    font-size: 35px;
  }
  h4,
  p {
    font-size: 35px;
  }
  .btn {
    font-size: 25px;
    width: 150px;
    height: 40px;
  }
  .inputUser {
    font-size: 20px;
  }
  .labelInput {
    font-size: 15px;
  }
  .box,
  .box2 {
    top: 40px;
  }
  .box2 {
    top: 150px;
  }
  .botao-reg {
    top: 200px;
  }
}
</style>