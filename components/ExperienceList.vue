<template>
  <h2>🧑🏻‍💼 Work Experience</h2>
  <p>
    I have worked as a web developer for several companies, including Google,
    Facebook, and Amazon.
  </p>
  <div v-for="experience in experiences" :key="experience.name">
    <h3>
      {{ experience.title }},
      <small>
        <italic>{{ experience.company }}</italic>
      </small>
    </h3>
    <underline>
      {{ experience.date }}
    </underline>
    <br />
    <br />
    {{ experience.description }}
  </div>
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
