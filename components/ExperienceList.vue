<template>
  <h2>🧑🏻‍💼 Work Experience</h2>
  <p>
    During my professional journey, I have mostly worked part-time jobs as
    fullstack software developer and store clerk. I also worked full-time as a
    developer intern for two months. During each of my jobs, I have learned a
    lot and aquired new skills. I am always looking for new opportunities to
    grow and learn.
  </p>
  <ExperienceCard
    v-for="experience in experiences"
    :key="experience.title"
    :experience="experience"
  />
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
