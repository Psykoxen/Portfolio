<style scoped>
nav {
  margin: 3vh 0;
  height: 40px;
  padding: 1vh 1vw;
  border-radius: 32px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
}

nav ul {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding-inline-start: 0px;
  margin: 0;
}

nav ul li {
  color: rgba(255, 255, 255, 0.71);
  padding: 10px;
  margin: 0 5px;
  font-size: 2vh;
}

nav ul li#active {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
}

nav ul li {
  text-decoration: none;
  transition: all 0.2s linear;
  cursor: pointer;
  user-select: none;
}

#shadow {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 32px;
  z-index: -2;
  position: absolute;
}

#main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<template>
  <nav>
    <ul>
      <li @click="toggleHome" id="home_link">Home</li>
      <li @click="toggleSkills" id="skills_link">Skills</li>
      <li @click="toggleAbout" id="about_link">About me</li>
    </ul>

    <!-- <div id="shadow" :style="shadowStyles"></div> -->
  </nav>
  <div id="main">
    <HomeComponent v-if="showHomeComponent" />
    <SkillsComponent v-if="showSkillsComponent" />
    <AboutComponent v-if="showAboutComponent" />
  </div>
</template>

<script setup>
import AboutComponent from "./AboutComponent.vue";
import HomeComponent from "./HomeComponent.vue";
import SkillsComponent from "./SkillsComponent.vue";
import { ref, computed } from "vue";

const showHomeComponent = ref(true);
const showAboutComponent = ref(false);
const showSkillsComponent = ref(false);

const toggleHome = () => {
  showHomeComponent.value = true;
  showAboutComponent.value = false;
  showSkillsComponent.value = false;
};

const toggleAbout = () => {
  showAboutComponent.value = true;
  showHomeComponent.value = false;
  showSkillsComponent.value = false;
};

const toggleSkills = () => {
  showSkillsComponent.value = true;
  showHomeComponent.value = false;
  showAboutComponent.value = false;
};

// const shadowStyles = computed(() => {
//   return {
//     width: showHomeComponent.value ? `${home_toggle.offsetWidth}px` : "0px",
//     height: showHomeComponent.value ? `${home_toggle.offsetHeight}px` : "0px",
//     left: showHomeComponent.value ? `${home_toggle.offsetLeft}px` : "0px",
//   };
// });
</script>
