<template>
  <div v-if="isVisible" class="popup-overlay">
    <div class="popup-content">
      <button @click="closePopup">Fechar</button>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isVisible = ref(false);

const openPopup = () => {
  isVisible.value = true;
};

const closePopup = () => {
  isVisible.value = false;
};
</script>

<style>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}
</style>