<template>
  <div class="flex flex-col gap-2 w-fit" id="projects">
    <h2 class="text-5xl font-semibold pb-4">Projects</h2>
    <div class="flex flex-col items-center gap-4">
      <div class="flex flex-row gap-4">
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
      <div class="grid grid-cols-4 gap-4">
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
          alt: "Project aims to democratize first aid skills through an interactive platform.",
          img: "/svg/SauverDesVies.svg",
          url: "https://sauverdesvies.avoillot.com/",
          code: "https://github.com/Psykoxen/SauverDesVies",
          language: "Nuxt.js",
          status: "Development",
        },
        {
          title: "GeoRisk",
          alt: "Powerful web app that lets you find risks in France, with an historic",
          img: "/img/Georisk.png",
          url: "https://georisk.avoillot.com/",
          code: "https://github.com/Psykoxen/GeoRisk",
          language: "Nuxt.js",
          status: "Available",
        },
        {
          title: "Planify",
          alt: "An intuitive web application designed to streamline project management, enhancing collaboration and productivity.",
          img: "/svg/Planify.svg",
          url: "",
          code: "https://github.com/Psykoxen/Planify",
          language: "Nuxt.js",
          status: "Development",
        },
        {
          title: "ResidenceKeeper",
          alt: "Residence Keeper, the ultimate ally for community living.",
          img: "",
          url: "",
          code: "https://github.com/Psykoxen/ResidenceKeeper",
          language: "Flutter",
          status: "Development",
        },
        {
          title: "Rainbow",
          alt: "Rainbow is an open-source mobile application tend to be used to consult weather previsions.",
          img: "",
          url: "",
          code: "https://github.com/Psykoxen/Rainbow",
          language: "Kotlin",
          status: "Available",
        },
        {
          title: "Tchoutchou",
          alt: "Project managing an entire station system throughout France, employee and customer side.",
          img: "https://github.com/icepick4/TchouTchou/raw/main/web/assets/images/fav.png",
          url: "",
          code: "https://github.com/icepick4/TchouTchou",
          language: "PHP, Oracle SQL, Docker",
          status: "Available",
        },
        {
          title: "PacSida",
          alt: "Game inspired by the Pacman game for a serious game about the Virus Sida during the NDLI 2022.",
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
