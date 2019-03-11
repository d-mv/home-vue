<template>
  <section id='content'>
    <div class='contacts-wrapper'>
      <div class='contacts-icons'>
        <div class="contact-line icon"><i class="fab fa-github-square"></i></div>
        <div class="contact-line icon"><i class="fab fa-linkedin"></i></div>
        <div class="contact-line icon"><i class="fab fa-instagram"></i></div>
      </div>
      <div class='contacts-desc'>
        <div class="contact-line desc t3">GitHub repositories for projects</div>
        <div class="contact-line desc t3">LinkedIn page</div>
        <div class="contact-line desc t3">Instagram account</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.contacts-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-template-areas: "icons description";
  grid-column-gap: 1rem;
  width: 80vw;
  height: 95vh;
  margin: 0 auto;
}
.contacts-icons {
  grid-area: icons;
  padding-left: 40px;
  align-self: center;
  justify-self: end;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  word-wrap: normal;
}
.icon {
  font-size: 3rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  transition-duration: 0.7s;
  &:hover {
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.07);
  }
}
.contacts-desc {
  align-self: center;
  grid-area: description;
  width: 20rem;
}

.desc {
  margin: 38px 0;
}
</style>
