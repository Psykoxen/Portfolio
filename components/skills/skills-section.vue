<template>
  <div class="flex flex-col items-center gap-2 w-fit" id="skills">
    <h2 class="text-5xl w-full font-semibold pb-4">Compétences</h2>
    <div class="md:flex grid grid-cols-3 flex-row md:gap-3 gap-1 w-full">
      <p
        class="rounded-md font-semibold text-center pl-4 pr-4 text-xs button borders"
        v-on:click="showSkills('Languages')"
        :class="{ 'bg-[#191e4e79]': currentSection === 'Languages' }"
      >
        Langages
      </p>
      <p
        class="rounded-md font-semibold text-center pl-4 pr-4 text-xs button borders"
        v-on:click="showSkills('Frameworks')"
        :class="{ 'bg-[#191e4e79]': currentSection === 'Frameworks' }"
      >
        Frameworks
      </p>
      <p
        class="rounded-md font-semibold text-center pl-4 pr-4 text-xs button borders"
        v-on:click="showSkills('Libraries')"
        :class="{ 'bg-[#191e4e79]': currentSection === 'Libraries' }"
      >
        Librairies
      </p>
      <p
        class="rounded-md font-semibold text-center pl-4 pr-4 text-xs button borders"
        v-on:click="showSkills('Database')"
        :class="{ 'bg-[#191e4e79]': currentSection === 'Database' }"
      >
        Base de données
      </p>
      <p
        class="rounded-md font-semibold text-center pl-4 pr-4 text-xs button borders"
        v-on:click="showSkills('Tools')"
        :class="{ 'bg-[#191e4e79]': currentSection === 'Tools' }"
      >
        Outils
      </p>
    </div>
    <div
      class="grid 2xl:grid-cols-5 md:grid-cols-3 grid-cols-2 md:gap-2 gap-1"
      :class="{ hidden: currentSection !== 'Languages' }"
      id="Languages"
    >
      <SkillsItem v-for="language in languages" :item="language" />
    </div>
    <div
      class="grid 2xl:grid-cols-5 md:grid-cols-3 grid-cols-2 md:gap-2 gap-1"
      :class="{ hidden: currentSection !== 'Frameworks' }"
      id="Frameworks"
    >
      <SkillsItem v-for="framework in frameworks" :item="framework" />
    </div>
    <div
      class="grid 2xl:grid-cols-5 md:grid-cols-3 grid-cols-2 md:gap-2 gap-1"
      :class="{ hidden: currentSection !== 'Libraries' }"
      id="Libraries"
    >
      <SkillsItem v-for="library in libraries" :item="library" />
    </div>
    <div
      class="grid 2xl:grid-cols-5 md:grid-cols-3 grid-cols-2 md:gap-2 gap-1"
      :class="{ hidden: currentSection !== 'Database' }"
      id="Database"
    >
      <SkillsItem v-for="database in database" :item="database" />
    </div>
    <div
      class="grid 2xl:grid-cols-5 md:grid-cols-3 grid-cols-2 md:gap-2 gap-1"
      :class="{ hidden: currentSection !== 'Tools' }"
      id="Tools"
    >
      <SkillsItem v-for="tool in tools" :item="tool" />
    </div>
  </div>
</template>

<style scoped>
.button {
  transition: ease-in-out 0.2s;
}

.button:hover {
  cursor: pointer;
  background-color: #191e4e79;
}

.borders {
  border: 2px solid #191e4e;
}

.box {
  background-color: #010314;
}
</style>

<script>
export default {
  data() {
    return {
      currentSection: "Languages",
      languages: [
        "Javascript",
        "Typescript",
        "HTML",
        "CSS",
        "PHP",
        "Kotlin",
        "Flutter",
        "Java",
        "Python",
        "C",
      ],
      frameworks: [
        "Nuxt.js",
        "Vue.js",
        "Salesforce",
        "Next.js",
        "Node.js",
        "Symfony",
      ],
      libraries: ["React", "TailwindCSS", "NuxtUI", "Express.js"],
      database: ["Oracle", "MySQL", "MongoDB", "PostgreSQL"],
      tools: [
        "VsCode",
        "Figma",
        "Github",
        "Gitlab",
        "Docker",
        "Postman",
        "Jira",
        "Power BI",
      ],
    };
  },
  methods: {
    showSkills(section) {
      this.currentSection = section;
    },
  },
};
</script>
