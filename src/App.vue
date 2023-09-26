<template>
  <LanguageSelector />
  <Navbar
    :tabs="tabs"
    :currentIndex="currentIndex"
    @tab-clicked="setCurrentTab"
  />
  <div id="main">
    <HomeComponent v-if="currentIndex === 0" />
    <SkillsComponent v-if="currentIndex === 1" />
    <AboutComponent v-if="currentIndex === 2" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import HomeComponent from "./components/HomeComponent.vue";
import SkillsComponent from "./components/SkillsComponent.vue";
import AboutComponent from "./components/AboutComponent.vue";
import LanguageSelector from "./components/LanguageSelector.vue";

export default {
  data() {
    return {
      tabs: ["Home", "Skills", "About me"],
      currentIndex: 0,
    };
  },
  methods: {
    setCurrentTab(index) {
      this.currentIndex = index;
    },
  },
  components: {
    Navbar,
    HomeComponent,
    SkillsComponent,
    AboutComponent,
    LanguageSelector,
  },
};
</script>

<style scoped>
#main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
