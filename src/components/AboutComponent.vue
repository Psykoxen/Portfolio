<style scoped>
#timeline {
  margin: 0 auto;
  max-width: 60%;
  padding: 25px;
  display: grid;
  grid-template-columns: 1fr 3px 1fr;
  font-family: "Fira Sans", sans-serif;
  color: #ffffff;
}

.timeline__component {
  margin: 0 20px 20px 20px;
}

.timeline__component--bg {
  padding: 1.5em;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.timeline__component--bottom {
  margin-bottom: 0;
}

.timeline__middle {
  position: relative;
  background: #ffffff;
}

.timeline__point {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 15px;
  height: 15px;
  background: #ffffff;
  border-radius: 50%;
}

.timeline__point--bottom {
  top: initial;
  bottom: 0;
}

.timeline__date--right {
  text-align: right;
}

.timeline__title {
  margin: 0;
  font-size: 1.15em;
  font-weight: bold;
}

.timeline__paragraph {
  line-height: 1.5;
  text-align: justify;
}

.timeline__logo {
  width: 50px;
  height: 50px;
  margin-right: 1em;
}

.timeline__header {
  display: flex;
  align-items: center;
  margin-bottom: 1em;
}

#me {
  margin: 5vh 0;
  width: 60vw;
  display: flex;
  flex-direction: column;
}

#me h1 {
  font-size: 5em;
  margin: 0.6em 0;
  font-weight: bold;
  padding: 0;
  text-align: center;
}

#me h2 {
  margin-top: 3em;
  text-align: center;
}
#me div {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding-bottom: 5vh;
}
#me_text {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 32px;
  padding: 2.5vh;
  display: flex;
  align-content: center;
  align-items: center;
  width: 55%;
  height: 50%;
  text-align: justify;
}
.profile {
  border-radius: 50%;
  width: 30vh;
  height: 30vh;
  border: 3px solid #ffffff;
}

#link-cv {
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid #ffffff;
  border-radius: 32px;
  padding: 1.5vh 2.5vh;
  font-size: 1.5em;
  font-weight: bold;
  color: white;
  text-decoration: none;
  transition: 0.3s ease-out;
}

.profile-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<template>
  <div id="me">
    <h1>{{ $t("AboutTitle") }}</h1>
    <div>
      <img src="../assets/image/me.jpg" class="profile" />
      <div class="profile-content">
        <p id="me_text">
          {{ $t("AboutSummary") }}
        </p>
        <a
          id="link-cv"
          href="../assets/doc/voillot_cv.pdf"
          download="VOILLOT Antoine - CV.pdf"
          >{{ $t("AboutResume") }}</a
        >
      </div>
    </div>
  </div>
  <TimelineComponent />
</template>

<script setup>
import TimelineComponent from "./TimelineComponent.vue";
</script>
