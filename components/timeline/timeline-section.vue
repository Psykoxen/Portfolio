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
        title: "Formations Universitaires",
        experiences: [
          {
            entity: "ETS Montréal",
            url: "https://www.etsmtl.ca/",
            argument: "Génie logiciel (3.52/4.30)",
            startDate: "2023",
            endDate: "2024",
            description:
              "Année d’échange dans une école d’ingénierie appliquée. Approfondissement des compétences en développement logiciel, avec un accent sur l’analyse, l’architecture logicielle et la gestion de projet.",
          },
          {
            entity: "IUT Lyon 1",
            url: "https://iut.univ-lyon1.fr/formation/offre-de-formations/informatique-villeurbanne-doua",
            argument: "BUT Informatique",
            startDate: "2021",
            endDate: "2024",
            description:
              "Formation professionnalisante en trois ans axée sur le développement logiciel, la gestion de bases de données, les systèmes et réseaux, et la conduite de projets. Acquisition de compétences techniques (Web, Java, C, SQL) et travail en équipe autour de projets concrets encadrés par des professionnels.",
          },
        ],
      },
      volunteer: {
        title: "Engagements",
        experiences: [
          {
            entity: "Cadre Opérationnel",
            url: "https://www.croix-rouge.fr/",
            argument: "Croix-Rouge Française",
            startDate: "2021",
            endDate: "Now",
            description:
              "Engagé tout au long de l’année sur des Dispositifs Prévisionnels de Secours (DPS) comme chef de poste. Coordination et organisation opérationnelle d’une unité locale de 90 bénévoles avec une équipe de 8 personnes. Contribution active aux missions d’encadrement lors de situations d’exception : cadre de permanence, soutien aux populations sinistrées, hébergement d’urgence, coordination des équipes sur le terrain ou avec les pouvoirs publics (COD, PCC, etc.).",
          },
          // {
          //   entity: "Directeur Local Adjoint aux Missions de Secours",
          //   url: "https://www.croix-rouge.fr/",
          //   argument: "Croix-Rouge Française",
          //   startDate: "2023",
          //   endDate: "2024",
          //   description:
          //     "Accompagner les organisateurs dans la mise en place de dispositifs de premiers secours pour leurs évènements. Préparer l’ensemble de la documentation administrative relative aux dispositifs tout en organisant les activités des bénévoles.",
          // },
          {
            entity: "Secouriste Général",
            url: "https://asj.ca/fr",
            argument: "Ambulande Saint Jean (Canada)",
            startDate: "2024",
            endDate: "",
            description:
              "Comme Secouriste Général, j'ai eu l'opportunité de pratiqué les premiers soins lors de nombreux grands évènements tels que le Grand Prix de Formule 1 à Montréal, les évènements du Centre Bell ou bien encore les festivals d'été du Parc Jean Drapeau (Osheaga, Lasso, ÎleSoniq). Cette expérience m'a également permis d'être formé comme répartiteur et de prendre part à la gestion logistique des premiers soins lors de grands rassemblements.",
          },

          // {
          //   entity: "Chef de Secteur Télécommunication",
          //   url: "https://www.croix-rouge.fr/",
          //   argument: "Croix-Rouge Française",
          //   startDate: "2022",
          //   endDate: "2023",
          //   description:
          //     "Assurer le bon fonctionnement des infrastructures de télécommunication du département. Gérer le budget et les différents frais liés à la maintenance.",
          // },
          // {
          //   entity: "Chef de Poste",
          //   url: "https://www.croix-rouge.fr/",
          //   argument: "Croix-Rouge Française",
          //   startDate: "2022",
          //   endDate: "Now",
          //   description:
          //     "En tant que chef de poste, superviser les équipes de secouristes lors des interventions. Assurer la sécurité des lieux et la coordination des actions de secours.",
          // },
          {
            entity: "Saisonnier Nautique",
            url: "https://www.sdis34.fr/",
            argument: "SDIS 34",
            startDate: "2021, 2022, 2023",
            endDate: "",
            description:
              "En tant qu’équipier puis chef de poste, encadrement d’une équipe et coordination des interventions. Surveillance de la baignade en espaces naturels sur les plages de l'Hérault. Application des gestes de premiers secours, évaluation des urgences vitales et gestion des opérations de secours. ",
          },
        ],
      },
      work: {
        title: "Experiences Professionelles",
        experiences: [
          {
            entity: "Développeur Fullstack (Freelance)",
            url: "https://alceva.fr/",
            argument: "Alceva",
            startDate: "2024",
            endDate: "Now",
            description:
              "En tant que freelance, développement et optimisation de fonctionnalités sur des architectures existantes ou nouvelles avec Next.js, React, Node.js et TypeScript. Amélioration et refonte d’applications afin de garantir la robustesse et l’adaptabilité des systèmes informatiques. ",
          },
          {
            entity: "Développeur Fullstack (Stage)",
            url: "https://renoquotes.com/en/home",
            argument: "Renoquotes",
            startDate: "2024",
            endDate: "",
            description:
              "Au sein d’une équipe de développement, conception et intégration de nouvelles fonctionnalités (sur une architecture SOA avec Next.js/React  pour le frontend et Node.js/TypeScript pour le backend). Contribution à la maintenance des applications, à l’automatisation des processus et à l’amélioration continue de l’expérience utilisateur, en s’appuyant sur des principes tels qu’Atomic Design.",
          },
          {
            entity: "Développeur Salesforce (Stage)",
            url: "https://anap.fr/s/",
            argument: "ANAP",
            startDate: "2023",
            endDate: "",
            description:
              "Au sein du Département Diffusion et Appropriation, participation à l’amélioration du site web Salesforce à l’aide de composants personnalisés. Tout en apportant un soutien statistique sur la consommation des différents sites web et outils. Prendre part à la gestion de projets et au suivi de la tierce maintenance applicative.",
          },
          // {
          //   entity: "Nageur Sauveteur",
          //   url: "https://piscine-origami.fr/",
          //   argument: "Origami - Groupe Opalia",
          //   startDate: "2022",
          //   endDate: "",
          //   description:
          //     "Assurer la surveillance de baignade au sein d’une piscine disposant de trois bassins et prodiguer les gestes de premiers secours et le bilan d’urgences vitales.",
          // },
        ],
      },
    };
  },
};
</script>
