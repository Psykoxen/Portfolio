<template>
  <div id="skills">
    <h1>{{ $t("SkillsTitle") }}</h1>
    <div id="skills-content">
      <div class="card-wrap">
        <div class="card-front">
          <div class="card-header one">
            <i class="fas fa-code"></i>
          </div>
          <div class="card-content">
            <h1 class="card-title">{{ $t("SkillsSubtitleBuild") }}</h1>
            <p class="card-text">
              {{ $t("SkillsSubtitleBuildText") }}
            </p>
          </div>
        </div>
        <div class="card-back">
          <div class="card-header one">
            <i class="fas fa-code"></i>
          </div>
          <div class="card-content">
            <ul>
              <li>
                <span>Rainbow :</span>
                {{ $t("SkillsSubtitleBuildTextRainbow") }}
                <a href="https://github.com/Psykoxen/Rainbow" target="_blank">{{
                  $t("SeeMoreLink")
                }}</a>
              </li>
              <li>
                <span>GraphMapAnalysis :</span>
                {{ $t("SkillsSubtitleBuildTextGraphMapAnaysis") }}
                <a
                  href="https://github.com/Psykoxen/GraphMapAnalysis"
                  target="_blank"
                  >{{ $t("SeeMoreLink") }}</a
                >
              </li>
              <li>
                <span>Tchoutchou :</span>
                {{ $t("SkillsSubtitleBuildTextTchoutchou") }}
                <a
                  href="https://github.com/icepick4/sae-sncf"
                  target="_blank"
                  >{{ $t("SeeMoreLink") }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card-wrap">
        <div class="card-front">
          <div class="card-header two">
            <i class="fab fa-css3-alt"></i>
          </div>
          <div class="card-content">
            <h1 class="card-title">{{ $t("SkillsSubtitleImprove") }}</h1>
            <p class="card-text">
              {{ $t("SkillsSubtitleImproveText") }}
            </p>
          </div>
        </div>
        <div class="card-back">
          <div class="card-header two">
            <i class="fas fa-code"></i>
          </div>
          <div class="card-content">
            <ul>
              <li>
                <span>{{ $t("SkillsSubtitleDirectory") }} :</span>
                {{ $t("SkillsSubtitleImproveTextDirectory") }}
                <a
                  href="https://github.com/Psykoxen/Directory"
                  target="_blank"
                  >{{ $t("SeeMoreLink") }}</a
                >
              </li>
              <li>
                <span>GraphMapAnalysis :</span>
                {{ $t("SkillsSubtitleImproveTextGraphMapAnaysis") }}
                <a
                  href="https://github.com/Psykoxen/GraphMapAnalysis"
                  target="_blank"
                  >{{ $t("SeeMoreLink") }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card-wrap">
        <div class="card-front">
          <div class="card-header three">
            <i class="fab fa-html5"></i>
          </div>
          <div class="card-content">
            <h1 class="card-title">{{ $t("SkillsSubtitleAdminister") }}</h1>
            <p class="card-text">
              {{ $t("SkillsSubtitleAdministerText") }}
            </p>
          </div>
        </div>
        <div class="card-back">
          <div class="card-header three">
            <i class="fas fa-code"></i>
          </div>
          <div class="card-content">
            <ul>
              <li>
                <span>{{ $t("SkillsSubtitleNetwork") }} :</span>
                {{ $t("SkillsSubtitleAdministerTextNetwork") }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card-wrap">
        <div class="card-front">
          <div class="card-header four">
            <i class="fab fa-js-square"></i>
          </div>
          <div class="card-content">
            <h1 class="card-title">{{ $t("SkillsSubtitleManage") }}</h1>
            <p class="card-text">
              {{ $t("SkillsSubtitleManageText") }}
            </p>
          </div>
        </div>
        <div class="card-back">
          <div class="card-header four">
            <i class="fas fa-code"></i>
          </div>
          <div class="card-content">
            <ul>
              <li>
                <span>{{ $t("SkillsSubtitleDatabase") }} :</span>
                {{ $t("SkillsSubtitleManageTextDatabase") }}
              </li>
              <li>
                <span>Tchoutchou :</span>
                {{ $t("SkillsSubtitleManageTextTchoutchou") }}
                <a
                  href="https://github.com/icepick4/sae-sncf"
                  target="_blank"
                  >{{ $t("SeeMoreLink") }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card-wrap">
        <div class="card-front">
          <div class="card-header five">
            <i class="fab fa-js-square"></i>
          </div>
          <div class="card-content">
            <h1 class="card-title">{{ $t("SkillsSubtitleDrive") }}</h1>
            <p class="card-text">
              {{ $t("SkillsSubtitleDriveText") }}
            </p>
          </div>
        </div>
        <div class="card-back">
          <div class="card-header five">
            <i class="fas fa-code"></i>
          </div>
          <div class="card-content">
            <ul>
              <li>
                <span>Tchoutchou :</span>
                {{ $t("SkillsSubtitleDriveTextTchoutchou") }}
                <a
                  href="https://github.com/icepick4/sae-sncf"
                  target="_blank"
                  >{{ $t("SeeMoreLink") }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card-wrap">
        <div class="card-front">
          <div class="card-header six">
            <i class="fab fa-js-square"></i>
          </div>
          <div class="card-content">
            <h1 class="card-title">{{ $t("SkillsSubtitleTeamworking") }}</h1>
            <p class="card-text">
              {{ $t("SkillsSubtitleTeamworkingText") }}
            </p>
          </div>
        </div>
        <div class="card-back">
          <div class="card-header six">
            <i class="fas fa-code"></i>
          </div>
          <div class="card-content">
            <ul>
              <li>
                <span>{{ $t("SkillsSubtitleTeamwork") }} :</span>
                {{ $t("SkillsSubtitleTeamworkingTextTeamwork") }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <h2>{{ $t("SkillsTitleHard") }}</h2>
    <div class="language">
      <a href="https://html.spec.whatwg.org/multipage/"
        ><img src="../assets/image/language/html.svg"
      /></a>
      <a href="https://developer.mozilla.org/fr/docs/Web/CSS"
        ><img src="../assets/image/language/css.svg"
      /></a>
      <a href="https://fr.reactjs.org/"
        ><img src="../assets/image/language/react.svg"
      /></a>
      <a href="https://kotlinlang.org/"
        ><img src="../assets/image/language/kotlin.svg"
      /></a>
      <a href="https://www.oracle.com/database/sqldeveloper/"
        ><img src="../assets/image/language/oracle.svg"
      /></a>
      <a href="https://dev.java/"
        ><img src="../assets/image/language/java.svg"
      /></a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

onMounted(() => {
  const buttons = document.getElementsByClassName("card-wrap");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {
      console.log("click");
      buttons[i].classList.toggle("card-wrap--active");
    });
  }
});
</script>

<style scoped>
#skills {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
#skills-content {
  gap: 4vh 2vw;
  width: 70%;
  padding-bottom: 1%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
}

#skills > h1 {
  font-size: 5em;
  margin: 1.5em 0;
  font-weight: bold;
  padding: 0;
}

#skills > h2 {
  margin-top: 3em;
  text-align: center;
}
.container {
  height: 60vh;
  width: 80vw;
  top: 60px;
  left: calc(50% - 300px);
  display: flex;
  align-self: center;
  padding: 2% 0;
}
.card {
  display: flex;
  flex-direction: column;
  height: 60vh;
  width: 40vw;
  background-color: #1e1e1e;
  border-radius: 10px;
  box-shadow: -1rem 0 1rem #151515;
  transition: 0.4s ease-out;
  position: relative;
  left: 0px;
}
.card:not(:first-child) {
  margin-left: -50px;
}
.card:hover {
  transform: translateY(-20px);
  transition: 0.4s ease-out;
}
.card:hover ~ .card {
  position: relative;
  left: 50px;
  transition: 0.4s ease-out;
}
.title {
  color: white;
  font-weight: 400;
  font-weight: bold;
  text-align: center;
  width: 100%;
  padding-top: 4vh;
}
*::-webkit-scrollbar {
  display: none;
}
.card img {
  border-radius: 100%;
  margin-top: 5vh;
  max-width: 128px;
  max-height: 128px;
}
.card * {
  align-self: center;
}
.card a {
  display: flex;
  justify-content: center;
}
.card-front,
.card-back {
  position: absolute;
  height: 100%;
  width: 100%;
  background: #fff;
  border-radius: 20px;
  border: 5px solid #fff;
  overflow: hidden;
  color: rgb(97, 97, 97);
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  transition: all 0.2s ease-in-out;
  -webkit-backface-visibility: hidden;
  /* Safari */
  backface-visibility: hidden;
}
.card-back .card-content {
  width: 90%;
}
.card-back .card-content ul {
  padding: 0;
}
.card-back .card-content ul li {
  text-align: justify;
  list-style: none;
  font-size: 1.25vh;
}
.card-back .card-content ul li span {
  text-decoration: underline;
}
.card-back .card-content ul li a {
  color: rgb(97, 97, 97);
  text-decoration: none;
  font-weight: bold;
}
.card-back .card-content ul li:not(:last-child) {
  margin-bottom: 5%;
}
.card-back {
  transform: rotateY(180deg);
}
.card-back .card-header {
  transform: rotateY(180deg);
}
.card-wrap--active {
  transform: rotateY(180deg);
}
.card-wrap {
  text-align: center;
  cursor: pointer;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  perspective: 400px;
  height: 42vh;
  width: 16vw;
}
.card-header {
  height: 200px;
  width: 100%;
  border-radius: 100% 0% 100% 0% / 0% 50% 50% 100%;
  display: grid;
  place-items: center;
}
.card-header i {
  color: #fff;
  font-size: 72px;
}
.card-content {
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 50%;
  margin: 0 auto;
}
.card-title {
  margin-top: 3vh;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.75vh;
  margin-bottom: 1vh;
}
.card-text {
  text-align: center;
  font-size: 1.3vh;
  margin-bottom: 20px;
}
.card-header.one {
  background: linear-gradient(to bottom left, #f12711, #f5af19);
}
.card-header.two {
  background: linear-gradient(to bottom left, #7f00ff, #e100ff);
}
.card-header.three {
  background: linear-gradient(to bottom left, #3f2b96, #a8c0ff);
}
.card-header.four {
  background: linear-gradient(to bottom left, #11998e, #38ef7d);
}
.card-header.five {
  background: linear-gradient(to bottom left, #979d25, #fff200);
}
.card-header.six {
  background: linear-gradient(to bottom left, #29a357, #38ef5d);
}
.card-btn.one {
  background: linear-gradient(to left, #f12711, #f5af19);
}
.card-btn.two {
  background: linear-gradient(to left, #7f00ff, #e100ff);
}
.card-btn.three {
  background: linear-gradient(to left, #3f2b96, #a8c0ff);
}
.card-btn.four {
  background: linear-gradient(to left, #11998e, #38ef7d);
}
.card-btn.five {
  background: linear-gradient(to left, #979d25, #fff200);
}
.card-btn.six {
  background: linear-gradient(to left, #29a357, #38ef5d);
}

.language {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 1vw;
  height: 40vh;
}

.language a {
  width: 25vh;
  height: 25vh;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lavender;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  animation: floating 2.5s ease-in-out infinite;
}

.language a:first-child {
  animation-delay: 0ms;
}

.language a:nth-child(2) {
  animation-delay: 400ms;
}

.language a:nth-child(3) {
  animation-delay: 600ms;
}

.language a:nth-child(4) {
  animation-delay: 800ms;
}

.language a:nth-child(5) {
  animation-delay: 1000ms;
}

.language a:nth-child(6) {
  animation-delay: 1200ms;
}

.language a img {
  width: 15vh;
  height: 15vh;
}

@keyframes floating {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-50px);
  }
  100% {
    transform: translatey(0px);
  }
}
</style>
