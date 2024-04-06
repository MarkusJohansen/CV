<template>
  <Card>
    <p>
      <strong> {{ experience.title }}</strong>
      <br />
      [{{ experience.date }}]
      <br />
      <italic>{{ experience.company }}</italic>
    </p>
    <p>
      {{ experience.description }}
    </p>
  </Card>
</template>

<script>
export default {
  props: {
    experience: {
      type: Object,
      required: true,
    },
  },
};
</script>
