<template>
  <h2>🎓 Education</h2>
  <p>
    This is my educational journey — a collection of degrees, certificates, and
    diplomas. Will be expanded with the opportunity to access documentation.
  </p>
  <ul>
    <li v-for="educationEntry in educationEntries" :key="educationEntry.name">
      <strong> {{ educationEntry.degree }}</strong> [{{ educationEntry.date }}]
      | <italic>{{ educationEntry.institution }}</italic
      >,
      {{ educationEntry.location }}
    </li>
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
