<template>
  <div>
    <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet">
    <header>
      <h1 class="h1-header">Chá de Casa Nova</h1>
      <h3 class="h3-v">Victor</h3>
      <h3 class="h3-i">&</h3>
      <h3 class="h3-r">Raissa</h3>
    </header>
    <div class="subheader"></div>
  </div>
</template>
<style scoped>
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
  right: 60px;
  bottom: 14px;
}
.h3-i {
  bottom: 44px;
  right: 10px;
}
.h3-r {
 padding-left: 84px;
 bottom: 79px;
}
header {
  background-color: #bf6f4e;
  width: 100%;
  height: 7vw;
}
.subheader {
  background: linear-gradient(#bf6f4e, #d5b6a2);
  width: 100%;
  height: 3vw;
}
.g-4, .gx-4 {
  --bs-gutter-x: 0;
  --bs-gutter-y: 0;
}
@media (min-width: 320px) {
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
      height: 6vw;
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
  }
  @media (min-width: 1241px) and (max-width: 1440px) {
    .h1-header {
      font-size: 60px;
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
  }
</style>
<script setup>

</script>
