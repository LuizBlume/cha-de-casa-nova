<template>
    <div>
        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet">
        <header>
          <h1 class="h1-header">Chá de Casa Nova</h1>
          <h3 class="h3-v">Victor</h3>
          <h3 class="h3-i">&</h3>
          <h3 class="h3-r">Raissa</h3>
        </header>
        <div class="subheader">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Registrar ou Conectar
            </button>

            <ul v-if="verificacaoUsuario.usuario" class="dropdown-menu">
              <li class="dropdown-item email">{{ verificacaoUsuario.usuario.email }}</li>
              <li class="dropdown-item-logout ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-box-arrow-right svg-logout" viewBox="0 0 16 16">
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
import { ref, defineProps } from "vue"
import { useUsuarioStore } from "../stores/usuario"

const verificacaoUsuario = useUsuarioStore();
</script>

<style scoped>
.btn {
  background: linear-gradient(#ad5631, #bf6f4e);
  border: none;
  margin-right: 10px;
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
  font-size: 1.2rem !important;
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
.h3-v, .h3-i, .h3-r {
  color: #2c2c2c q   ;
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
.g-4, .gx-4 {
  --bs-gutter-x: 0;
  --bs-gutter-y: 0;
}
@media (max-width: 320px) {
    .h1-header {
      font-size: 300px;
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
      top: 15px;
      width: 173px;
      font-size: 14px;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
 @media (max-width: 375px) {
    .h1-header {
      font-size: 34px;
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

    .col {
      margin: 20px 0 5px 0;
    }

    .dropdown, .btn {
      top: 15px;
      width: 200px;
      font-size: 14px;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      right: 22px;
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
      top: 12px;
      width: 200px;
      font-size: 14px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .dropdown {
      margin-top: 5px;
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
      top: 15px;
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
      margin-top: 20px;
      position: relative;
      right: 22px;
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
      margin-top: 20px;
      position: relative;
      right: 22px;
    }

    .dropdown-menu.show {
      width: 192px;
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
      right: 10px;
    }
    .dropdown-menu.show {
      width: 240px;
    }
    .dropdown-item, .dropdown-item-logout {
      font-size: 24px;
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
      width: 350px;
      font-size: 24px;
      height: 55px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .dropdown-menu.show {
      width: 340px;
    }
    .dropdown-item, .dropdown-item-logout {
      font-size: 1.2rem;
    }
    .email {
      font-size: 1rem!important;
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
<script setup>
</script>