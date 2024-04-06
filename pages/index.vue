<template>
  <main class="main-wrapper">
    <TopSection />
    <ProjectsList :projects="projects" />
    <EducationList :educationEntries="educationEntries" />
    <ExperienceList :experiences="experiences" />
    <Skills :skills="skills" />
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
            "[Soon to be public!] A Tribute to the Norwegian language and some of its funny words and terms.",
          link: "https://github.com/Dagens-ord/dagens-ord",
        },
        {
          name: "Blue-sector 🥽",
          description:
            "[Soon to be public!] Contributed to an open-source VR career-guidance application as a part of my bachelor thesis.",
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
      educationEntries: [
        {
          degree: "Realfagskompetanse",
          institution: "St.Olav Skole",
          location: "Sarpsborg, Norway",
          date: "aug. 2018 - jun. 2021",
          description:
            "High school degree with specialization in mathematics and biology.",
        },
        {
          degree: "Bachelor in Informatics",
          institution: "NTNU - Norwegian University of Science and Technology",
          location: "Trondheim, Norway",
          date: "aug. 2021 - jun. 2024",
          description:
            "Bachelor degree in Informatics. Learning about software development, databases, data analysis, web development, algorithms, datastructures, UX-design and more.",
        },
      ],
      experiences: [
        {
          title: "👨‍💻 Fullstack Developer",
          company: "Consigli",
          description:
            "Part time developer at Consigli AS. Worked as a fullstack platform developer, working with tools such as React, Tailwind, Django, DjangoREST, Sentry and PostgreSQL. The platform is a tool for interacting with our AI engine and analyzing data from the construction industry. I have contributed to building our API's, Component library, Admin panel, Pipelines, Main platform and more.",
          date: "oct. 2023 - Present",
        },
        {
          title: "👨‍💻 Developer intern",
          company: "NAV IT",
          description:
            "Worked as a developer at the Norwegian work and welfare administration.",
          date: "jun. 2023 - jul. 2023",
        },
        {
          title: "🍶 Store clerk",
          company: "Tilbords City Lade",
          description:
            "Worked as a store clerk at Tilbords, a store that sells interior and home decor.",
          date: "nov. 2021 - may. 2022",
        },
        {
          title: "👨‍🍳 Store clerk",
          company: "Meny Sarpsborg - department of fish, meat and cheese",
          description: "Worked as a store clerk at Meny, a grocery store.",
          date: "nov. 2020 - jul. 2021",
        },
        {
          title: "👨🏻‍💼 Comitee leader",
          company: "Linjeforeningen Online - Profil- og Aviskomiteen",
          description:
            "Worked as a comitee leader at the student organization for informatics students at NTNU; Online, in the Profile- and Newspaper comitee.",
          date: "mar. 2023 - mar. 2024",
        },
        {
          title: "🎨 Comitee member",
          company: "Linjeforeningen Online - Profil- og Aviskomiteen",
          description:
            "Worked as a comitee member at the student organization for informatics students at NTNU; Online, in the Profile- and Newspaper comitee. Learned about graphic design, journalism, media production and more.",
          date: "sep. 2022 - present",
        },
      ],
      skills: [
        "React",
        "Vue",
        "Nuxt",
        "Tailwind",
        "ChimeraCSS",
        "Supabase",
        "Kotlin",
        "Java",
        "Python",
        "Django",
        "DjangoREST",
        "PostgreSQL",
        "MySQL",
        "SQLite",
        "TypeScript",
        "Ethical Hacking",
        "UX Design",
        "Postman",
        "Git",
        "GitHub",
        "npm",
        "KTOR",
        "Gradle",
      ],
    };
  },
};
</script>
