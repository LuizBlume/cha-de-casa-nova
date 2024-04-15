<template>
  <div class="container-header" ref="headerElement">
      <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet">
      <header>
        <router-link to="/" class="link-header">
          <h1 class="h1-header">Chá de Casa Nova</h1>
          <h3 class="h3-v">Victor</h3>
          <h3 class="h3-i">&</h3>
          <h3 class="h3-r">Raissa</h3>
        </router-link>
      </header>
      <div class="subheader">
        <div class="dropdown">
          <button v-if="verificacaoUsuario.trueUsuario === null" class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Registrar ou Conectar
          </button>

          <button v-else class="btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Configurações
            <span class="icon-settings">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
              <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
              <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
            </svg>
            </span>
          </button>

          <ul v-if="verificacaoUsuario.trueUsuario" class="dropdown-menu">
            <li class="dropdown-item email">{{ verificacaoUsuario.trueUsuario.email }}</li>
            <li v-if="verificacaoUsuario.isAdmin" class="dropdown-item add"><router-link to="/add-produto">Adicionar novo produto</router-link></li>
            <li class="dropdown-item-logout" @click="deslogarUsuario.logoutUsuario = true; deslogarUsuario.handleLogout()">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-box-arrow-right svg-logout" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                </svg>Sair</li>
          </ul>

          <ul v-else class="dropdown-menu">
            <li><router-link to="/cadastro" class="dropdown-item">Registrar-se</router-link></li>
            <li><router-link to="/login" class="dropdown-item">Conectar-se</router-link></li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue"
import { useUsuarioStore } from "../stores/usuario"
import { useLogoutStore } from "../stores/logout"

const verificacaoUsuario = useUsuarioStore();
const deslogarUsuario = useLogoutStore();

onMounted(async () => {
await nextTick();
console.log(verificacaoUsuario.trueUsuario)
})


</script>

<style scoped>
a {
text-decoration: none;
color: #2c2c2c;
}
.link-header {
  text-decoration: none;
  height: 100px !important;
}
header {
background-color: #bf6f4e;
width: 100%;
height: 6vw;
}
.subheader {
background: linear-gradient(#bf6f4e, #d5b6a2);
width: 100%;
height: 3vw;
display: flex;
justify-content: flex-end;
align-items: center;
}

.icon-settings {
position: relative;
left: 10px;
bottom: .5px;
}

.btn {
background: linear-gradient(#ad5631, #bf6f4e);
border: none;
margin-right: 10px;
}
.link-home {
text-decoration: none;
color: #2c2c2c;
}
.dropdown-menu.show {
background-color: #c58f78;
}

.dropdown-menu.show > li {
margin-bottom: 5px;
}
.dropdown-item:hover, .dropdown-item-logout:hover {
background-color: #c59682;
cursor: pointer;
}
.dropdown-item {
color: #fdfdfd;
font-style: normal;
font-size: 20px;
font-weight: 400;
line-height: normal;
display: flex;
justify-content: center;
align-items: flex-start;
}

.dropdown-item-logout {
color: #fdfdfd;
font-style: normal;
font-size: 1.2rem;
font-weight: 400;
line-height: normal;
display: flex;
justify-content: center;
align-items: center;
gap: 8px;
}

.email {
font-size: 1.2rem;
}

.add > a {
color: #fdfdfd!important;
}

.h1-header {
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
.h3-v,
.h3-i,
.h3-r {
color: #2c2c2c q;
font-family: "Kaushan Script";
font-style: normal;
font-size: 30px;
font-weight: 400;
line-height: normal;
display: flex;
justify-content: center;
align-items: flex-start;
position: relative;
}
.h3-v {
right: 70px;
bottom: 14px;
}
.h3-i {
bottom: 50px;
right: 5px;
}
.h3-r {
padding-left: 124px;
bottom: 89px;
}
.g-4,
.gx-4 {
--bs-gutter-x: 0;
--bs-gutter-y: 0;
}
@media (max-width: 320px) {
  .h1-header {
    font-size: 30px;
  }
  .h3-v, .h3-i, .h3-r {
    font-size: 20px;
  }
  header {
    height: 18vw;
  }
  .subheader {
    height: 8vw !important;
  }

  .col {
    margin: 20px 0 5px 0;
  }

  .dropdown, .btn {
    top: 30px;
    width: 200px;
    font-size: 14px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
  }

  .dropdown-menu.show {
    width: 175px;
  }

  .email {
    font-size: 0.7rem;
  }

  .dropdown-item {
    font-size: 0.9rem;
  }
}
@media (min-width: 321px) and (max-width: 375px) {
  .h1-header {
    font-size: 28px;
  }
  .h3-v, .h3-i, .h3-r {
    font-size: 20px;
  }
  header {
    height: 18vw;
  }
  .subheader {
    height: 6vw;
  }
  .dropdown, .btn {
    top: 40px;
    margin-bottom: 22px;
    width: 200px;
    font-size: 14px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    right: 22px;
    margin-top: 5px;
  }
  .dropdown-menu.show {
    position: absolute!important;
    right: 10px!important;
    width: 190px!important;
  }
  .dropdown-item, .dropdown-item-logout {
    font-size: 1rem!important;
  }
  .email {
    font-size: 0.8rem!important;
  }
}
 @media (min-width: 376px) and (max-width: 425px) {
  .h1-header {
    font-size: 28px;
  }
  .h3-v, .h3-i, .h3-r {
    font-size: 20px;
  }
  header {
    height: 14vw;
  }
  .subheader {
    height: 6vw;
  }

  .col {
    margin: 20px 0 5px 0;
  }

  .dropdown, .btn {
    top: 40px;
    width: 200px;
    font-size: 14px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dropdown {
    position: relative;
    right: 22px;
  }

  .dropdown-menu.show {
    width: 190px;
  }
  .dropdown-item, .dropdown-item-logout {
    font-size: 1rem!important;
  }
  .email {
    font-size: 0.8rem!important;
  }
}
@media (min-width: 426px) and (max-width: 539px) {
  .h1-header {
    font-size: 36px;
  }
  .h3-v, .h3-i, .h3-r {
    font-size: 22px;
  }
  header {
    height: 14vw;
  }
  .subheader {
    height: 8vw;
  }
  .dropdown, .btn {
    width: 173px;
    font-size: 14px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    position: relative;
    right: 22px;
  }
  .dropdown-menu.show {
    width: 198px;
  }
  .dropdown-item, .dropdown-item-logout {
    font-size: 16px;
  }

  .icon-settings {
    left: 15px;
  }
}
@media (min-width: 540px) and (max-width: 768px) {
  .h1-header {
    font-size: 40px;
  }
  .h3-v, .h3-i, .h3-r {
    font-size: 28px;
  }
  header {
    height: 12vw;
  }
  .subheader {
    height: 7vw;
  }

  .dropdown {
    top: 60px;
    position: relative;
    right: 60px;
  }

  .btn {
    width: 200px!important;
  }

  .btn {
    width: 200px!important;
  }

  .icon-settings {
    left: 5px;
  }

  .dropdown-menu.show {
    width: 198px;
  }
  .dropdown-item, .dropdown-item-logout {
    font-size: 1rem!important;
  }
  .email {
    font-size: 0.8rem!important;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .h1-header {
    font-size: 50px;
  }
  .h3-v, .h3-i, .h3-r {
    font-size: 36px;
  }
  header {
    height: 12vw;
  }
  .subheader {
    height: 6vw;
  }

  .dropdown {
    position: relative;
    top: 60px;
    right: 90px;
  }

  .btn {
    width: 200px;
  }

  .icon-settings {
    left: 5px;
  }

  .dropdown-menu.show {
    width: 200px!important;
  }
  .dropdown-item, .dropdown-item-logout {
    font-size: 1rem;
  }
  .email {
    font-size: 0.8rem!important;
  }
}
@media (min-width: 1025px) and (max-width: 1240px) {
  .h1-header {
    font-size: 50px;
  }
  .h3-v, .h3-i, .h3-r {
    font-size: 38px;
  }
  header {
    height: 12vw;
  }
  .subheader {
    height: 6vw;
  }
  .container-header {
    max-height: 220px;
  }
  .link-header {
    height: 100px;
  }
  .dropdown, .btn {
    width: 200px;
    font-size: 18px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    position: relative;
    right: 10px;
  }
  .dropdown-menu.show {
    width: 200px;
  }
  .dropdown-item, .dropdown-item-logout {
    font-size: 22px;
  }
  .add > a {
    font-size: 1.1rem;
  }
  .email {
    font-size: 0.9rem;
  }
}
@media (min-width: 1241px) and (max-width: 1440px) {
  .h1-header {
    font-size: 60px;
  }
  .h3-v, .h3-i, .h3-r {
    font-size: 45px;
  }
  header {
    height: 11vw;
  }
  .subheader {
    height: 5vw;
  }
  .dropdown, .btn {
    width: 250px;
    font-size: 20px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    position: relative;
    top: 40px;
    right: 50px;
  }

  .dropdown-menu.show {
    width: 240px;
  }
  .dropdown-item, .dropdown-item-logout {
    font-size: 24px;
  }
  .add > a {
    font-size: 1.3rem;
  }
  .email {
    font-size: 1rem!important;
  }
}
@media (min-width: 1441px) and (max-width: 1620px) {
  .h1-header {
    font-size: 80px;
  }
  .h3-v, .h3-i, .h3-r {
    font-size: 45px;
  }
  header {
    height: 12vw;
  }
  .subheader {
    height: 6vw;
  }
  .dropdown, .btn {
    width: 300px;
    font-size: 22px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    position: relative;
    right: 10px;
  }
  .dropdown-menu.show {
    width: 290px;
  }
  .dropdown-item, .dropdown-item-logout {
    font-size: 1.4rem;
  }
  .email {
    font-size: 1.2rem!important;
  }
}
@media (min-width: 1621px) and (max-width: 1920px) {
  .h1-header {
    font-size: 83px;
  }
  .h3-v, .h3-i, .h3-r {
    font-size: 54px;
  }
  header {
    height: 12vw;
  }
  .subheader {
    height: 6vw;
  }
  .dropdown, .btn {
    width: 330px;
    font-size: 28px;
    height: 45px;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    right: 10px;
  }
  .dropdown-menu.show {
    width: 320px;
  }
  .dropdown-item, .dropdown-item-logout {
    /* display: flex;
    justify-content: flex-start; */
    font-size: 1.8rem;
  }

  .dropdown-menu.show > .dropdown-item-logout {
    display: flex;
    justify-content: center;
  }

  .email {
    font-size: 1.3rem!important;
  }

  .add {
    font-size: 1.5rem!important;
  }
}
@media (min-width: 1921px) and (max-width: 2200px) {
  .h1-header {
    font-size: 100px;
  }
  .h3-v, .h3-i, .h3-r {
    font-size: 60px;
  }
  header {
    height: 12vw;
  }
  .subheader {
    height: 6vw;
  }
  .dropdown, .btn {
    width: 450px;
    font-size: 26px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dropdown-menu.show {
    width: 440px;
  }
  .dropdown-item, .dropdown-item-logout {
    font-size: 1.2rem;
  }
}
@media (min-width: 2201px) and (max-width: 2560px) {
  .h1-header {
    font-size: 120px;
  }
  .h3-v, .h3-i, .h3-r {
    font-size: 66px;
  }
  header {
    height: 12vw;
  }
  .subheader {
    height: 6vw;
  }
  .dropdown, .btn {
    width: 450px;
    font-size: 28px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dropdown-menu.show {
    width: 440px;
  }
  .dropdown-item, .dropdown-item-logout {
    font-size: 40px;
  }
}
</style>