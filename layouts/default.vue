<template>
  <div class="main-wrapper">
    <header>
      <div class="img-container">
        <img class="avatar" src="../assets/markus.jpeg" alt="Markus Johansen" />
        <h1>👋 Markus Johansen</h1>
      </div>
      <hr />
      <p>
        Informatics student with a passion for design and user experience. I am
        currently working as a part-time fullstack software developer at
        Consigli, and always looking for new opportunities to learn and grow. In
        my spare time I enjoy fly-fishing, alpine skiing, playing guitar and
        working on personal dev projects.
      </p>
    </header>

    <slot />

    <footer>
      <hr />
      <p>
        You can reach me at <a href="mailto:markusarj@gmail.com">mail</a>,
        <a href="linkedin.com/in/markus-johansen">LinkedIn</a>,
        <a href="github.com/markusarj">GitHub</a>, or by phone at
        <a href="tel:+4798765432">98765432</a>.
      </p>
    </footer>
    <div class="button-wrapper">
      <ToTopButton />
    </div>
  </div>
</template>

<script>
export default {
  head: {
    link: [
      {
        rel: "stylesheet",
        id: "chimera-blues",
        href: "/node_modules/chimeracss/build/chimera-blues.css",
        disabled: true,
      },
      {
        rel: "stylesheet",
        id: "chimera-reds",
        href: "/node_modules/chimeracss/build/chimera-nightsky.css",
        disabled: false,
      },
    ],
  },
};
import "./assets/style.css";
</script>
