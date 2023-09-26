<template>
  <div id="language-selector">
    <a id="fr_toggle" @click="toggleLanguage('fr')">FR</a>
    <p>|</p>
    <a id="en_toggle" @click="toggleLanguage('en')">EN</a>
  </div>
</template>

<script setup>
import { i18n } from "../assets/locales/i18n"; // Assurez-vous d'importer correctement Vue-i18n depuis le chemin approprié

const toggleLanguage = (language) => {
  i18n.global.locale = language; // Utilisez i18n.global.locale pour changer la langue
};
</script>

<style scoped>
#language-selector {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  width: 100%;
  gap: 0.5rem;
  margin-right: 3rem;
  color: rgba(255, 255, 255, 0.71);
}

#language-selector a {
  transition: all 0.2s linear;
}

#language-selector a:hover {
  color: white;
  text-decoration: none;
  transition: all 0.2s linear;
  cursor: pointer;
  user-select: none;
}
</style>
