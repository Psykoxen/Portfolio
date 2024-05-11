<template>
  <div class="w-full flex flex-col">
    <h2 class="text-5xl font-semibold pb-4">A propos</h2>
    <div class="w-full flex lg:flex-row flex-col items-center gap-2">
      <div class="lg:w-1/2 w-full h-full flex flex-col items-center gap-2">
        <TimelinePart
          class="w-full"
          :title="education.title"
          :experiences="education.experiences"
        />
        <TimelinePart
          class="w-full"
          :title="work.title"
          :experiences="work.experiences"
        />
      </div>
      <div
        class="lg:w-1/2 w-full h-full flex lg:flex-col items-center gap-6 flex-col-reverse"
      >
        <button
          class="font-semibold text-2xl bg-[#191e4e] rounded-md p-6 pt-2 pb-2"
        >
          <a href="/docs/VOILLOT_CV.pdf" target="_blank">Mon CV</a>
        </button>
        <TimelinePart
          class="h-full"
          :title="volunteer.title"
          :experiences="volunteer.experiences"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      education: {
        title: "Formation",
        experiences: [
          {
            entity: "ETS Montréal",
            url: "https://www.etsmtl.ca/",
            argument: "Génie logiciel (3.77/4.30)",
            startDate: "2023",
            endDate: "2024",
            description: "Echange Universitaire",
          },
          {
            entity: "IUT Lyon 1",
            url: "https://iut.univ-lyon1.fr/formation/offre-de-formations/informatique-villeurbanne-doua",
            argument: "BUT Informatique",
            startDate: "2021",
            endDate: "2024",
            description: "Parcours Réalisation d’applications",
          },
        ],
      },
      volunteer: {
        title: "Bénévolat",
        experiences: [
          {
            entity: "Auxiliaire",
            url: "https://asj.ca/fr",
            argument: "Ambulande Saint Jean",
            startDate: "2024",
            endDate: "Now",
            description: "",
          },
          {
            entity: "Directeur Local Adjoint aux Missions de Secours",
            url: "https://www.croix-rouge.fr/",
            argument: "Croix-Rouge Française",
            startDate: "2023",
            endDate: "Now",
            description:
              "Accompagner les organisateurs dans la mise en place de dispositifs de premiers secours pour leurs évènements. Préparer l’ensemble de la documentation administrative relative aux dispositifs tout en organisant les activités des bénévoles.",
          },
          {
            entity: "Chef de Secteur Télécommunication",
            url: "https://www.croix-rouge.fr/",
            argument: "Croix-Rouge Française",
            startDate: "2022",
            endDate: "2023",
            description:
              "Assurer le bon fonctionnement des infrastructures de télécommunication du département. Gérer le budget et les différents frais liés à la maintenance.",
          },
          {
            entity: "Secouriste",
            url: "https://www.croix-rouge.fr/",
            argument: "Croix-Rouge Française",
            startDate: "2022",
            endDate: "Now",
            description:
              "Participer aux actions de l’association comme le secours, l’action social et la logistique. Se former et maintenir ses acquis dans les différents domaines d’actions.",
          },
        ],
      },
      work: {
        title: "Professionnel",
        experiences: [
          {
            entity: "Développeur Fullstack",
            url: "https://soumissionrenovation.ca/fr/accueil/",
            argument: "Soumission Rénovation",
            startDate: "2024",
            endDate: "",
            description:
              "",
          },
          {
            entity: "Développeur Salesforce",
            url: "https://anap.fr/s/",
            argument: "ANAP",
            startDate: "2023",
            endDate: "",
            description:
              "Développer des composants personnalisés pour le site web, fournir des analyses statistiques sur la consommation des sites, et participer à la gestion de projets. ",
          },
          {
            entity: "Sapeur-Pompier Nautique",
            url: "https://www.sdis34.fr/",
            argument: "SDIS 34",
            startDate: "2021, 2022, 2023",
            endDate: "",
            description:
              "Assurer la surveillance de la baignade en espace naturel, appliquer les premiers secours et évalue les urgences vitales. Encadrer les opérations de secours et une équipe.",
          },
          {
            entity: "Nageur Sauveteur",
            url: "https://piscine-origami.fr/",
            argument: "Origami - Groupe Opalia",
            startDate: "2022",
            endDate: "",
            description:
              "Assurer la surveillance de baignade au sein d’une piscine disposant de trois bassins et prodiguer les gestes de premiers secours et le bilan d’urgences vitales.",
          },
        ],
      },
    };
  },
};
</script>
