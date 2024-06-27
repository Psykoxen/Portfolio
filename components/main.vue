<template>
  <div class="flex flex-col items-center text-center justify-center main">
    <h1 class="lg:text-9xl text-7xl font-semibold">Antoine Voillot</h1>
    <p id="typed-text" class="text-4xl">
      Hey. Je suis
      <span class="text-[#988eff] font-semibold">{{ typedText }}</span>
    </p>
    <!-- <p>
      Actuellement en recherche d'un stage en développement informatique pour
      l'été 2024
    </p> -->
    <a id="arrow-scroll">
      <div class="arrow-down">
        <span></span>
        <span></span>
      </div>
    </a>
  </div>
</template>

<style scoped>
.main {
  height: 100vh;
  width: 100%;
  font-family: "Metropolis";
}

.arrow-down:hover {
  cursor: pointer;
}

.arrow-down {
  padding-top: 2em;
}
.arrow-down span {
  display: block;
  width: 20px;
  height: 20px;
  border-bottom: 5px solid #fff;
  border-right: 5px solid #fff;
  transform: rotate(45deg);
  animation: scroll 2s infinite;
}

.arrow-down span:nth-child(2) {
  animation-delay: +0.2s;
}

@keyframes scroll {
  00% {
    opacity: 0;
    transform: translateY(0) rotate(45deg);
  }
  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translateY(0) rotate(45deg);
  }
}
</style>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const typedText = ref("");
    const textArray = [
      "Développeur Web FullStack",
      "Secouriste et Nageur Sauveteur",
    ];
    let index = 0;
    let isDeleting = false;
    let delay = 100; // Ajustez le délai au besoin

    function type() {
      const currentText = textArray[index];
      if (isDeleting) {
        typedText.value = currentText.substring(0, typedText.value.length - 1);
      } else {
        typedText.value = currentText.substring(0, typedText.value.length + 1);
      }

      let typeSpeed = delay;

      // Pause à la fin de la frappe ou de la suppression
      if (isDeleting && typedText.value === "") {
        isDeleting = false;
        index = (index + 1) % textArray.length;
        typeSpeed = 500; // Pause plus longue avant de retaper
      } else if (!isDeleting && typedText.value === currentText) {
        isDeleting = true;
        typeSpeed = 500; // Pause après la frappe
      }

      setTimeout(type, typeSpeed);
    }

    // Commencer l'animation de frappe
    onMounted(() => {
      let arrow = document.getElementById("arrow-scroll");
      arrow.addEventListener("click", () => {
        document.getElementById("projects").scrollIntoView({
          behavior: "smooth",
        });
      });

      type();
    });

    // Retourner les réactifs
    return { typedText };
  },
};
</script>
