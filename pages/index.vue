<template>
  <main class="main-wrapper">
    <TopSection />
    <ProjectsList :projects="projects" />
    <EducationList />
    <ExperienceList />
    <Skills />
    <Footer />
  </main>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: "CV page 📝",
          description:
            "The webpage you are currently looking at! Built with Nuxt.js and ChimeraCSS!",
          link: "https://github.com/MarkusJohansen/CV",
        },
        {
          name: "ChimeraCSS 🦁",
          description:
            "Classless, lightweight and themebased CSS framework for building responsive websites; such as this one!",
          link: "https://github.com/MarkusJohansen/ChimeraCSS",
        },
        {
          name: "Dagens ord 🔡",
          description:
            "A Tribute to the Norwegian language and some of its funny words and terms.",
          link: "https://github.com/Dagens-ord/dagens-ord",
        },
        {
          name: "Blue-sector 🥽",
          description:
            "Contributed to a open source VR career-guidance application as a part of my bachelor thesis.",
          link: "https://github.com/vr4vet/Blue-Sector",
        },
        {
          name: "Sprik 🐛",
          description:
            "Error Reporting Application developed during my internship at the Norwegian work and welfare administration.",
          link: "https://github.com/navikt/helse-sprik",
        },
        {
          name: "Pokepedia 🎮",
          description: "Pokedex implementation using PokeAPI.",
          link: "https://github.com/MarkusJohansen/pokepedia",
        },
        {
          name: "BeerBuddy 🍺",
          description:
            "A website where you can find, vote on, and review beers. The website displays craft beers from the US.",
          link: "https://github.com/ErikMLysfjord/beerbuddy",
        },
        {
          name: "DiscoGolf 🥏",
          description:
            "A companion application for discgolfing at the Trondheim local courses; Lade and Dragvoll.",
          link: "https://github.com/MarkusJohansen/IT1901-DiscoGolf",
        },
      ],
    };
  },
};
</script>
