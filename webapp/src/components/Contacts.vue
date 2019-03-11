<template>
  <section id='content'>
    <div class='contacts-wrapper'>
      <div class='contacts-icons'>
        <div
          class="contact-line icon"
          id='github-link'
          @click='goGitHub ()'
        ><i class="fab fa-github-square"></i></div>
        <div
          class="contact-line icon"
          id='linkedin-link'
          @click='goLinkedIn ()'
        ><i class="fab fa-linkedin"></i></div>
        <div
          class="contact-line icon"
          id='instagram-link'
          @click='goInstagram ()'
        ><i class="fab fa-instagram"></i></div>
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
export default {
  methods: {
    goGitHub () {
      const gitHubIcon = document.getElementById('github-link')
      gitHubIcon.addEventListener('click', event => {
        window.open('https://github.com/d-mv', '_blank').focus()
      })
    },
    goLinkedIn () {
      const linkedInIcon = document.getElementById('linkedin-link')
      linkedInIcon.addEventListener('click', event => {
        window.open('https://www.linkedin.com/in/dmitry-melnikov-pm/', '_blank').focus()
      })
    },
    goInstagram () {
      const instagramIcon = document.getElementById('instagram-link')
      instagramIcon.addEventListener('click', event => {
        window.open('https://www.instagram.com/melnikov_dm/', '_blank').focus()
      })
    }
  }
}
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
  color: #878787;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  transition-duration: 0.4s;
  cursor: pointer;
  animation: 1s ease-out 0s 1 growLarge;
  &:hover {
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.07);
  }
}
.contacts-desc {
  align-self: center;
  grid-area: description;
  width: 20rem;
  animation: 1s ease-out 0s 1 growLarge;
}

.desc {
  margin: 38px 0;
}
</style>
