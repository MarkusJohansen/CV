<template>
  <li>
    <strong> {{ education.degree }}</strong> [{{ education.date }}],
    <italic>{{ education.institution }}</italic
    >,
    {{ education.location }}
  </li>
</template>

<script>
export default {
  props: {
    education: {
      type: Object,
      required: true,
    },
  },
};
</script>
