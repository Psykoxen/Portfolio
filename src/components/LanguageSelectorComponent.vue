<script setup></script>

<template>
  <div id="language-selector">
    <a id="fr_toggle">FR</a>
    <p>|</p>
    <a id="en_toggle">EN</a>
  </div>
</template>

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
