<template>
  <div class="flex flex-col gap-2 w-fit" id="projects">
    <h2 class="text-5xl font-semibold pb-4">Projets</h2>
    <div class="flex flex-col items-center gap-4">
      <div class="flex md:flex-row flex-col gap-4">
        <ProjectHighlighted
          v-for="(project, index) in projects.slice(0, 3)"
          :key="index"
          :title="project.title"
          :alt="project.alt"
          :img="project.img"
          :url="project.url"
          :code="project.code"
          :language="project.language"
          :status="project.status"
        />
      </div>
      <div
        class="grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 md:gap-4"
      >
        <ProjectItem
          v-for="(project, index) in projects.slice(3)"
          :key="index"
          :title="project.title"
          :alt="project.alt"
          :img="project.img"
          :url="project.url"
          :code="project.code"
          :language="project.language"
          :status="project.status"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "SauverDesVies",
          alt: "Projet visant à démocratiser les compétences en premiers secours grâce à une plateforme interactive.",
          img: "/svg/SauverDesVies.svg",
          url: "https://sauverdesvies.avoillot.com/",
          code: "https://github.com/Psykoxen/SauverDesVies",
          language: "Nuxt.js",
          status: "Development",
        },
        {
          title: "Interventions Montréal",
          alt: "Application web permettant de visualiser les interventions des services d'urgence à Montréal à partir de l'OpenData",
          img: "/svg/InterventionsMontreal.svg",
          url: "https://911-montreal.avoillot.com/",
          code: "https://github.com/Psykoxen/interventions-montreal",
          language: "Nuxt.js",
          status: "Available",
        },
        {
          title: "GeoRisk",
          alt: "Une puissante application web qui vous permet de connaitre les risques d'un lieu en France, avec un historique des catastrophes.",
          img: "/img/Georisk.png",
          url: "https://georisk.avoillot.com/",
          code: "https://github.com/Psykoxen/GeoRisk",
          language: "Nuxt.js",
          status: "Available",
        },
        // {
        //  title: "Planify",
        //  alt: "Une application web intuitive conçue pour simplifier la gestion de projets, favorisant la collaboration et la productivité.",
        //  img: "/svg/Planify.svg",
        //  url: "",
        //  code: "https://github.com/Psykoxen/Planify",
        //  language: "Nuxt.js",
        //  status: "Development",
        // },
        {
          title: "ResidenceKeeper",
          alt: "Residence Keeper, le meilleur allié pour la vie en communauté.",
          img: "",
          url: "",
          code: "https://github.com/Psykoxen/ResidenceKeeper",
          language: "Flutter",
          status: "Development",
        },
        {
          title: "Rainbow",
          alt: "Application mobile open source utilisée pour consulter les prévisions météorologiques.",
          img: "",
          url: "",
          code: "https://github.com/Psykoxen/Rainbow",
          language: "Kotlin",
          status: "Available",
        },
        {
          title: "Tchoutchou",
          alt: "Outil de gestion ferroviaire pour la gestion d'un réseau et les achats clients.",
          img: "https://github.com/icepick4/TchouTchou/raw/main/web/assets/images/fav.png",
          url: "",
          code: "https://github.com/icepick4/TchouTchou",
          language: "PHP, Oracle SQL, Docker",
          status: "Available",
        },
        {
          title: "PacSida",
          alt: "Jeu inspiré du jeu Pac-Man pour un jeu sérieux sur le thème du virus du SIDA lors de la NDLI 2022.",
          img: "https://github.com/icepick4/TchouTchou/raw/main/web/assets/images/fav.png",
          url: "https://ndli.rabec.eu/",
          code: "https://github.com/icepick4/nuit-de-l-info2022",
          language: "Javascript",
          status: "Available",
        },
      ],
    };
  },
};
</script>

<style></style>
