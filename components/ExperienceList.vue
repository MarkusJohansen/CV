<template>
  <h2>🧑🏻‍💼 Work Experience</h2>
  <p>
    During my professional journey, I have mostly worked part-time jobs as
    fullstack software developer and store clerk. I also worked full-time as a
    developer intern for two months. During each of my jobs, I have learned a
    lot and aquired new skills. I am always looking for new opportunities to
    grow and learn.
  </p>
  <ul>
    <li v-for="experience in experiences" :key="experience.title">
      <strong> {{ experience.title }}</strong> [{{ experience.date }}],
      <italic>{{ experience.company }}</italic
      >:
      <br />
      {{ experience.description }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    experiences: {
      type: Array,
      required: true,
    },
  },
};
</script>
