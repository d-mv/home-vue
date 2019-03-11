<template>
  <section id='content'>
    <div class='contacts-wrapper'>
      <div class='contacts-icons'>
        <div
          class="contact-line icon"
          @click='goGitHub ()'
        ><i class="fab fa-github-square"></i></div>
        <div
          class="contact-line icon"
          @click='goLinkedIn ()'
        ><i class="fab fa-linkedin"></i></div>
        <div
          class="contact-line icon"
          @click='goSkype ()'
        ><i class="fab fa-skype"></i></div>
        <div
          class="contact-line icon"
          @click='goInstagram ()'
        ><i class="fab fa-instagram"></i>
        </div>
      <div
          class="contact-line icon"
          @click='goMail ()'
        ><i class="fas fa-envelope"></i>
        </div>
      <div
          class="contact-line icon"
          @click='goWhatsApp ()'
        ><i class="fas fa-phone"></i>
        </div>
      </div>
      <div class='contacts-desc'>
        <div class="contact-line desc t3">GitHub repositories for projects</div>
        <div class="contact-line desc t3">LinkedIn page</div>
        <div class="contact-line desc t3">Skype</div>
        <div class="contact-line desc t3">Instagram account</div>
        <div class="contact-line desc t3">Mail</div>
        <div class="contact-line desc t3">WhatsApp</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    goGitHub () {
        window.open('https://github.com/d-mv', '_blank').focus()
    },
    goLinkedIn () {
        window.open('https://www.linkedin.com/in/dmitry-melnikov-pm/', '_blank').focus()
    },
    goSkype () {
        window.location.href = 'skype:dmitry.melnikov?chat'
    },
    goInstagram () {
        window.open('https://www.instagram.com/melnikov_dm/', '_blank').focus()
    },
    goMail () {
      // set  details
      const messageDetails = {
        email: 'd.dash.mv@gmail.com',
        subj: 'From your web-site',
        body: 'Hi Dmitry,'
      };
      // from url
      const sendMessage = `mailto:${messageDetails.email}?subject=${messageDetails.subj}&body=${messageDetails.body}`
      // open default mail client
      window.location.href = sendMessage
    },
    goWhatsApp () {
        window.open('https://wa.me/972586297491', '_blank').focus()
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
  grid-column-gap: 1.5rem;
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
  font-size: 2.5rem;
  color: #878787;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  transition-duration: 0.4s;
  cursor: pointer;
  animation: 1s ease-out 0s 1 growLarge;
  &:hover {
    color:black;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.07);
  };
  &:active {
    color:black;
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
    transform: scale(0.7);
  };
  &:focus {
outline: none;
}}
.contacts-desc {
  align-self: center;
  grid-area: description;
  width: 20rem;
  animation: 1s ease-out 0s 1 growLarge;
}

.desc {
  margin: 1.8rem 0;
}
</style>
