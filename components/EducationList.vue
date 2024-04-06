<template>
  <h2>🎓 Education</h2>
  <p>
    This is my education — a collection of degrees, certificates, and diplomas.
    Will be expanded with the feature to access documentation and new expansions
    in the future.
  </p>
  <ul>
    <Education
      v-for="education in educationEntries"
      :key="education.degree"
      :education="education"
    />
  </ul>
</template>

<script>
export default {
  props: {
    educationEntries: {
      type: Array,
      required: true,
    },
  },
};
</script>
