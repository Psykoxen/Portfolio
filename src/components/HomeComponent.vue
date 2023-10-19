<script setup>
import { onMounted, ref } from "vue";

onMounted(() => {
  let arrow = document.getElementById("arrow-scroll");
  arrow.addEventListener("click", (e) => {
    projects.scrollIntoView();
  });
});
</script>

<template>
  <div id="home">
    <div id="introduction">
      <h1>Antoine Voillot</h1>
      <p>{{ $t("HomeQuote") }}</p>
      <p id="subtitle">{{ $t("SearchingQuote") }}</p>
    </div>
    <div id="icons">
      <div id="icons-link">
        <a href="https://www.linkedin.com/in/antoine-voillot/" target="_blank">
          <img
            src="../assets/ico/linkedin.svg"
            height="60"
            width="60"
            alt="linkedin"
          />
        </a>
        <a href="mailto:antoine.voillot@yahoo.fr">
          <img src="../assets/ico/mail.svg" height="60" width="60" alt="mail" />
        </a>
        <a href="https://github.com/Psykoxen" target="_blank">
          <img
            src="../assets/ico/github.svg"
            height="60"
            width="60"
            alt="github"
          />
        </a>
      </div>
      <a id="arrow-scroll">
        <div class="arrow-down">
          <span></span>
          <span></span>
        </div>
      </a>
    </div>
  </div>
  <div id="projects">
    <a
      href="https://github.com/Psykoxen/ResidenceKeeper"
      target="_blank"
      class="projects_box"
      id="projects_box_1"
    >
      <p class="projects_box_uptitle">Flutter</p>
      <h3 class="projects_box_title">ResidenceKeeper</h3>
      <img
        src="../assets/image/residencekeeper_demo.svg"
        alt="ResidenceKeeper"
      />
    </a>
    <a
      href="https://github.com/Psykoxen/Twitter-Lhebdo"
      target="_blank"
      class="projects_box"
      id="projects_box_2"
    >
      <p class="projects_box_uptitle">Python</p>
      <h3 class="projects_box_title">Bot Twitter</h3>
      <img src="../assets/image/lhebdo_demo.svg" alt="lhebdo" />
    </a>
    <a
      href="https://github.com/Psykoxen/Rainbow"
      target="_blank"
      class="projects_box"
      id="projects_box_3"
    >
      <p class="projects_box_uptitle">Kotlin</p>
      <h3 class="projects_box_title">Rainbow</h3>
      <img src="../assets/image/rainbow_demo.svg" alt="Rainbow" />
    </a>
    <a
      href="https://github.com/icepick4/nuit-de-l-info2022"
      target="_blank"
      class="projects_box"
      id="projects_box_4"
    >
      <p class="projects_box_uptitle">Javascript</p>
      <h3 class="projects_box_title">PacSida</h3>
      <img src="../assets/image/pacsida_demo.svg" alt="PacSida" />
    </a>

    <a
      href="https://github.com/icepick4/sae-sncf"
      target="_blank"
      class="projects_box"
      id="projects_box_5"
    >
      <p class="projects_box_uptitle">Web</p>
      <h3 class="projects_box_title">Tchoutchou</h3>
      <img src="../assets/image/tchoutchou_demo.svg" alt="tchoutchou" />
    </a>
  </div>
</template>

<style scoped>
#projects {
  height: 150vh;
  width: 60%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, auto);
  grid-gap: 2%;
  padding-bottom: 7%;
  margin-top: 17vh;
}

.projects_box {
  border-radius: 32px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  text-decoration: none;
}

.projects_box img {
  top: 40%;
}
.projects_box_uptitle {
  font-size: 1.5rem;
  padding-left: 2%;
  color: rgba(255, 255, 255, 0.71);
  margin-bottom: 1%;
}

.projects_box_title {
  font-size: 2rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.71);
}
#projects_box_1 {
  background-color: #eba88a;
  grid-column-start: 1;
  grid-column-end: span 1;
  grid-row-start: 1;
  grid-row-end: span 2;
}

#projects_box_1 img {
  position: absolute;
  top: 30%;
  width: 100%;
  right: 0;
}

#projects_box_1 h3,
#projects_box_1 p {
  padding-left: 5%;
}

#projects_box_2 {
  background-color: #e0ffe1;
}

#projects_box_2 .projects_box_uptitle,
#projects_box_2 .projects_box_title,
#projects_box_3 .projects_box_uptitle,
#projects_box_3 .projects_box_title,
#projects_box_4 .projects_box_uptitle,
#projects_box_4 .projects_box_title,
#projects_box_5 .projects_box_uptitle,
#projects_box_5 .projects_box_title {
  text-align: center;
  color: rgb(131 131 131 / 64%);
}

#projects_box_2 img {
  position: absolute;
  bottom: 0;
  width: 100%;
}

#projects_box_3 {
  background-color: #e0f4ff;
  grid-column-start: 2;
  grid-row-start: 2;
  grid-row-end: span 2;
}

#projects_box_3 img {
  position: absolute;
  bottom: 0;
  top: 30%;
  width: 100%;
}

#projects_box_4 {
  background-color: #ffe0ea;
}

#projects_box_4 img {
  position: absolute;
  bottom: 0;
  width: 100%;
}

#projects_box_5 {
  background-color: #fff5e0;
  grid-column-start: 1;
  grid-column-end: span 2;
  grid-row-start: 4;
  grid-row-end: span 1;
  text-align: right;
}

#projects_box_5 .projects_box_uptitle,
#projects_box_5 .projects_box_title {
  padding-right: 2%;
  text-align: right;
  color: rgb(131 131 131 / 64%);
}

#projects_box_5 img {
  position: absolute;
  top: 30%;
  width: 70%;
  left: 0;
}

#icons-link a img {
  width: 20%;
  height: 20%;
}

#home {
  height: 88vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 10rem;
  text-align: center;
  margin-bottom: 0;
  font-weight: bold;
}

#introduction {
  margin: 5% 0;
}

#introduction p {
  font-size: 2rem;
  text-align: center;
}

#icons {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
}

#icons-link {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 100%;
}

#icons-link a {
  display: flex;
  justify-content: center;
  width: 100%;
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

#introduction #subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.81);
  text-align: center;
  font-style: italic;
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
