<template>
  <h2>💪 Skills</h2>
  <p>I have experience with the following technologies and tools:</p>
  <ul>
    <li v-for="skill in skills" :key="skill">{{ skill }}</li>
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
