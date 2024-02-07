<template>
  <footer>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@200&display=swap"
      rel="stylesheet"
    />
    <div class="footer">
      <h3 class="h3-footer">
        <div class="copy">&copy;</div>
        2024 - Todos os direitos reservados.
      </h3>
    </div>
  </footer>
</template>
<style scoped>
footer {
  margin-top: 20px;
  background-color: #bf6f4e;
  width: 100%;
  height: 8vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer {
  margin-top: 20px;
  background-color: #bf6f4e;
  width: 100%;
  height: 8vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.h3-footer {
  color: #2c2c2c;
  font-family: "Kaushan Script";
  font-style: normal;
  font-size: 30px;
  font-weight: 400;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.copy {
  font-family: "Kaushan Script" !important;
}
/* Responsividade */
@media screen and (max-width: 320px) {
  .h3-footer {
    font-size: 18px;
  }
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  .h3-footer {
    font-size: 20px;
  }
}
@media screen and (min-width: 376px) and (max-width: 425px) {
  .h3-footer {
    font-size: 22px;
  }
}
@media screen and (min-width: 426px) and (max-width: 539px) {
  .h3-footer {
    font-size: 24px;
  }
}
@media screen and (min-width: 540px) and (max-width: 768px) {
  .h3-footer {
    font-size: 26px;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .h3-footer {
    font-size: 28px;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1240px) {
  .h3-footer {
    font-size: 30px;
  }
}
@media screen and (min-width: 1241px) and (max-width: 1440px) {
  .h3-footer {
    font-size: 32px;
  }
}
@media screen and (min-width: 1441px) and (max-width: 1620px) {
  .h3-footer {
    font-size: 34px;
  }
}
@media screen and (min-width: 1621px) and (max-width: 1920px) {
  .h3-footer {
    font-size: 36px;
  }
}
</style>