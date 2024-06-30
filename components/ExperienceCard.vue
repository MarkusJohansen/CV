<template>
  <Card>
    <p>
      <strong> {{ experience.position }}</strong
      >, {{ experience.employer }}
      <br />
      [{{ experience.start_date }} - {{ experience.end_date }}]
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
