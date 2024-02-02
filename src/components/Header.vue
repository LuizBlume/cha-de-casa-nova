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
  color: #2c2c2c;
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
  width: 100vw;
  height: 7vw;
}
.subheader {
  background: linear-gradient(#bf6f4e, #d5b6a2);
  width: 100vw;
  height: 3vw;
}
</style>
<script setup>

</script>
