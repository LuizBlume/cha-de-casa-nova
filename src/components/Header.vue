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
  <ul class="dropdown-menu">
    <li><router-link to="/cadastro" class="dropdown-item">Registrar-se</router-link></li>
    <li><router-link to="/login" class="dropdown-item">Conectar-se</router-link></li>
  </ul>
</div>
    </div>
  </div>
</template>
<style scoped>
.btn {
  background: linear-gradient(#ad5631, #bf6f4e);
  border: none;
  margin-right: 10px;
}
.dropdown-menu.show {
  background-color: #c58f78;
}
.dropdown-item:hover {
  background-color: #c59682;
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
    .dropdown, .btn {
      top: 15px;
      width: 173px;
      font-size: 14px;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .dropdown-menu.show {
      width: 170px;
    }
    .dropdown-item {
      font-size: 16px;
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
    .dropdown, .btn {
      top: 12px;
      width: 173px;
      font-size: 14px;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .dropdown-menu.show {
      width: 170px;
    }
    .dropdown-item {
      font-size: 16px;
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
    }
    .dropdown-menu.show {
      width: 170px;
    }
    .dropdown-item {
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
    .dropdown-menu.show {
      width: 193px;
    }
    .dropdown-item {
      font-size: 20px;
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
    .dropdown-menu.show {
      width: 192px;
    }
    .dropdown-item {
      font-size: 20px;
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
    }
    .dropdown-menu.show {
      width: 200px;
    }
    .dropdown-item {
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
    }
    .dropdown-menu.show {
      width: 240px;
    }
    .dropdown-item {
      font-size: 24px;
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
    }
    .dropdown-menu.show {
      width: 290px;
    }
    .dropdown-item {
      font-size: 30px;
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
    .dropdown-item {
      font-size: 32px;
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
    .dropdown-item {
      font-size: 40px;
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
    .dropdown-item {
      font-size: 40px;
    }
  }
</style>
<script setup>
</script>