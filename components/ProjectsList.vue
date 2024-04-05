<template>
  <h2>🧑‍💻 Projects</h2>
  <p>
    Here's a glimpse into my coding journey - public projects born from work,
    school, and personal curiosity. Each one a stepping stone towards becoming a
    better developer. Feel free to check them out!
  </p>
  <ul>
    <li v-for="project in projects" :key="project.name">
      <a :href="project.link">{{ project.name }}</a> - {{ project.description }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
};
</script>
