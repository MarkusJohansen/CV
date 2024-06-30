<template>
  <div class="main-wrapper">
    <header>
      <div class="img-container">
        <img class="avatar" src="../assets/markus.jpeg" alt="Markus Johansen" />
        <h1 class="main-heading">Markus Aleksander Råkil Johansen</h1>
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

<style scoped>
.main-wrapper {
  display: flex;
  flex-direction: column;
  padding: 5rem 20vw;
}

/* Topsection */
.avatar {
  width: 15rem;
  height: 15rem;
  border-radius: 100%;
  object-fit: cover;
  box-shadow: rgba(70, 0, 102, 0.2) 0px 5px 15px 0px;
}

.img-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

/* scroll-to-top button */
.button-wrapper {
  margin: 1rem auto;
}

.main-heading {
  margin: 0;
  text-align: center;
}
/* Media Queries */

@media screen and (max-width: 700px) {
  .main-wrapper {
    padding: 5rem 10vw;
  }

  .avatar {
    width: 10rem;
    height: 10rem;
  }
}

@media screen and (max-width: 550px) {
  .main-wrapper {
    padding: 5rem 5vw;
  }
}
</style>
