<template>
  <div
    :class="{ shake: shakeEffect }"
    class="fixed top-1/2 right-6 flex flex-col items-center borders p-2 rounded-full gap-2"
  >
    <a href="https://www.linkedin.com/in/antoine-voillot/"
      ><img class="h-8 w-8" src="/svg/Linkedin.svg"
    /></a>
    <a href="https://github.com/Psykoxen"
      ><img class="h-8 w-8" src="/svg/Github.svg"
    /></a>
    <a href="mailto:antoine.voillot.1@ens.etsmtl.ca"
      ><img class="h-8 w-8" src="/svg/Mail.svg"
    /></a>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const shakeEffect = ref(false);

onMounted(() => {
  setInterval(() => {
    shakeEffect.value = true;
    setTimeout(() => {
      shakeEffect.value = false;
    }, 1000); // Ajustez la durée de l'effet de secousse ici
  }, 2000); // 30 secondes
});
</script>

<style scoped>
/* Ajoutez vos styles pour l'effet de secousse ici */
.shake {
  animation: shake 0.5s ease-in-out;
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  25%,
  75% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
}
</style>
