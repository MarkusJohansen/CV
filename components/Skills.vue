<template>
  <h2>💪 Skills</h2>
  <p>
    While studying IT at the university, at work, and in my free time, I have
    acquired a variety of skills and competencies. Here are some of them:
  </p>
  <ul class="splitted-list">
    <li v-for="skill in skills" :key="skill">{{ skill.skill }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    skills: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
/* break list into columns */
.splitted-list {
  column-count: 3;
  column-gap: 1rem;
}

@media screen and (max-width: 700px) {
  .splitted-list {
    column-count: 2;
  }
}
</style>
