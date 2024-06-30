<template>
  <li>
    <p>
      <strong> {{ education.degree }}</strong> [{{
        education.start_date.split("-")[0]
      }}
      - {{ education.end_date && education.end_date.split("-")[0] }}] <br />
      {{ education.institution }}, {{ education.location }}
    </p>
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
