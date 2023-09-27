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

/* LEAVE TILL LAST */
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

/* LEAVE TILL LAST */
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
    <!-- <h1>About me</h1> -->
    <h1>{{ $t("AboutTitle") }}</h1>
    <div>
      <img src="../assets/image/me.jpg" class="profile" />
      <!-- <p id="me_text">
          Actually student in informatic Bachelor at IUT Lyon 1, I am also a
          graduate of the National qualification of Aquatic Security and Rescue
          which allows me to work as a seasonal lifeguard but also to be a
          volunteer at the French Red Cross.
        </p> -->
      <div class="profile-content">
        <p id="me_text">
          <!-- Actuellement étudiant en BUT Informatique à l’IUT Lyon 1, je suis par
          ailleurs diplômé du Brevet National de Sécurité et Sauvetage Aquatique
          qui me permet d’exercer comme saisonnier en tant que sapeur pompier
          nageur sauveur mais également d’être bénévole à La Croix Rouge
          Française. -->
          {{ $t("AboutSummary") }}
        </p>
        <a id="link-cv" href="../assets/doc/voillot_cv.pdf" target="_blank">{{
          $t("AboutResume")
        }}</a>
      </div>
    </div>
    <!-- <h2>Career Path</h2> -->
  </div>

  <!-- <div id="timeline">
    <div class="timeline__component timeline__component--bg">
      <div class="timeline__header">
        <img
          src="../assets/image/crf.svg"
          alt="Logo CRF"
          class="timeline__logo"
        />
        <h2 class="timeline__title">Chef de Secteur Télécom</h2>
      </div>
      <p class="timeline__paragraph">
        En tant que chef de secteur télécom pour la Croix-Rouge française du
        Rhône, être responsable de la gestion des moyens de communication
        nécessaires aux missions d'urgence et de catastrophe mais également de
        dispositifs de premiers secours. Cela inclut des équipements comme les
        radios, les relais radio et d'autres moyens de communication et de
        commandement.
      </p>
    </div>

    <div class="timeline__middle">
      <div class="timeline__point"></div>
    </div>
    <div class="timeline__component">
      <div class="timeline__date timeline__date--left">
        Février 2023 à Septembre 2023
      </div>
    </div>
    <div class="timeline__component">
      <div class="timeline__date timeline__date--right">
        Octobre 2022 à Aujourd'hui
      </div>
    </div>
    <div class="timeline__middle">
      <div class="timeline__point"></div>
    </div>
    <div class="timeline__component timeline__component--bg">
      <div class="timeline__header">
        <img
          src="../assets/image/crf.svg"
          alt="Logo CRF"
          class="timeline__logo"
        />
        <h2 class="timeline__title">Chargé de mission, Missions de Secours</h2>
      </div>
      <p class="timeline__paragraph">
        En tant que chargé de mission, organiser de la planification, la
        coordination et la mise en place de dispositifs de secours. Cela
        implique l'organisation des équipes de bénévoles et la gestion des
        ressources nécessaires pour assurer une intervention efficace mais
        également répondre aux attendues de l'organisateur.
      </p>
    </div>
    <div class="timeline__component timeline__component--bg">
      <div class="timeline__header">
        <img
          src="../assets/image/sdis.svg"
          alt="Logo CRF"
          class="timeline__logo"
        />
        <h2 class="timeline__title">Sapeur Pompier - Chef de Poste</h2>
      </div>
      <p class="timeline__paragraph">
        En qualité de chef de poste, assurer la surveillance de la plage,
        repérer les baigneurs en difficulté et intervenir en cas de besoin.
        Également délimiter les zones de baignade et veiller au respect des
        règles de sécurité. Veiller également à la sécurité d'intervention des
        canadairs à proximité des zones de baignades.
      </p>
    </div>
    <div class="timeline__middle">
      <div class="timeline__point"></div>
    </div>
    <div class="timeline__component">
      <div class="timeline__date">Juillet à Août, 2022</div>
    </div>
    <div class="timeline__component">
      <div class="timeline__date timeline__date--right">
        Avril 2022 à Aujourd'hui
      </div>
    </div>
    <div class="timeline__middle">
      <div class="timeline__point"></div>
    </div>
    <div class="timeline__component timeline__component--bg">
      <div class="timeline__header">
        <img
          src="../assets/image/crf.svg"
          alt="Logo CRF"
          class="timeline__logo"
        />
        <h2 class="timeline__title">Secouriste / Equipier Secouriste</h2>
      </div>
      <p class="timeline__paragraph">
        S'investire en tant que bénévole secouriste au sein de l'associaation et
        tout particulièrement lors de dispositifs de premiers secours mais aussi
        de plan d'urgence.
      </p>
    </div>
    <div class="timeline__component timeline__component--bg">
      <div class="timeline__header">
        <img
          src="../assets/image/origami.svg"
          alt="Logo CRF"
          class="timeline__logo"
        />
        <h2 class="timeline__title">Nageur Sauveteur</h2>
      </div>
      <p class="timeline__paragraph">
        Au sein de la piscine assurer la surveillance du public évoluant dans
        les différents bassins du centre aquatique. Veiller à la sécurité des
        usagers et au respect des règles d'usages et de sécurité.
      </p>
    </div>
    <div class="timeline__middle">
      <div class="timeline__point"></div>
    </div>
    <div class="timeline__component">
      <div class="timeline__date">Février à Mai, 2022</div>
    </div>
    <div class="timeline__component">
      <div class="timeline__date timeline__date--right">
        Septembre 2021 à Aujourd'hui
      </div>
    </div>
    <div class="timeline__middle">
      <div class="timeline__point"></div>
    </div>
    <div class="timeline__component timeline__component--bg">
      <div class="timeline__header">
        <img
          src="../assets/image/lyon1.svg"
          alt="Logo CRF"
          class="timeline__logo"
        />
        <h2 class="timeline__title">BUT Informatique</h2>
      </div>
      <p class="timeline__paragraph">
        Bachelor Universitaire de Technologie Informatique formant au
        développement, à la programmation, la gestion de base de données mais
        également la gestion d'infrastructure réseau.<br />
        Parcours réalisation d'applications : Conception, Développement,
        Validation.
      </p>
    </div>
    <div class="timeline__component timeline__component--bg">
      <div class="timeline__header">
        <img
          src="../assets/image/sdis.svg"
          alt="Logo CRF"
          class="timeline__logo"
        />
        <h2 class="timeline__title">Sapeur Pompier - Nageur Sauveteur</h2>
      </div>
      <p class="timeline__paragraph">
        Assurer la surveillance de la plage, repérer les baigneurs en difficulté
        et intervenir en cas de besoin. Également délimiter les zones de
        baignade et veiller au respect des règles de sécurité.
      </p>
    </div>
    <div class="timeline__middle">
      <div class="timeline__point"></div>
    </div>
    <div class="timeline__component">
      <div class="timeline__date">Juillet à Août, 2021</div>
    </div>
    <div class="timeline__component">
      <div class="timeline__date timeline__date--right">Juin 2021</div>
    </div>
    <div class="timeline__middle">
      <div class="timeline__point"></div>
    </div>
    <div class="timeline__component timeline__component--bg">
      <div class="timeline__header">
        <img
          src="../assets/image/occitanie.svg"
          alt="Logo CRF"
          class="timeline__logo"
        />
        <h2 class="timeline__title">Baccalauréat Scientifique</h2>
      </div>
      <p class="timeline__paragraph">
        Spécialisation Mathématiques et Informatique
      </p>
    </div>
  </div> -->

  <TimelineComponent />
</template>

<script setup>
import TimelineComponent from "./TimelineComponent.vue";
</script>
