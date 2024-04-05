<template>
  <h2>🎓 Education</h2>
  <p>
    This is my education — a collection of degrees, certificates, and diplomas.
    Will be expanded with the feature to access documentation and new expansions
    in the future.
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
