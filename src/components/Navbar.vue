<template>
  <nav>
    <ul>
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        @click="tabClicked(index)"
        :class="{ active: currentIndex === index }"
      >
        {{ tab }}
      </li>
      <div class="background" :style="backgroundStyle"></div>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    tabs: Array,
    currentIndex: Number,
  },
  data() {
    return {
      backgroundStyle: {},
    };
  },
  methods: {
    tabClicked(index) {
      this.$emit("tab-clicked", index);
      this.updateBackgroundStyle(index);
    },
    updateBackgroundStyle(index) {
      const button = this.$el.querySelectorAll("li")[index];
      const style = {
        width: button.offsetWidth + "px",
        height: button.offsetHeight + "px",
        left: button.offsetLeft + "px",
      };
      this.backgroundStyle = style;
    },
  },
  mounted() {
    // Appeler la méthode pour positionner le background sur l'index 0 au chargement
    this.updateBackgroundStyle(0);
  },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.71);
  padding: 10px;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 3vh;
}

ul {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  position: relative;
}

li {
  cursor: pointer;
  padding: 5px 15px;
  transition: color 0.2s;
  font-size: 1.25rem;
  user-select: none;
}

.background {
  position: absolute;
  border-radius: 15px;
  bottom: 0;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.2);
  transition: transform 0.2s, width 1s, height 1s, left 1s;
  width: 100%;
}
</style>
