<template>
  <section id='content'>
    <div class='home-wrapper'>
      <div class='home-message'>
        <div class='first-line t0'>WELCOME,</div>
        <div class='second-line t1'>I'm Dmitry</div>
        <div class='third-line t2'>FULL-STACK DEVELOPER</div>
        <div class='third-line t6'>Ruby, Rails, Vue.js & etc. Learning something new and make photos when free.</div>
        <div
          class='fourth-line'
          @click='sendMessage ()'
        >{ send message }</div>
      </div>
      <img
        class='home-photo'
        src="https://res.cloudinary.com/diciu4xpu/image/upload/v1552251001/home/avatar_photo.jpg"
      >
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    sendMessage () {
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
    }
  }
}
</script>

<style lang='scss' scoped>
.third-line {
  margin-bottom: 5px;
}
.fourth-line {
  margin: 10px 0;
  color: #878787;
  &:hover {
    color: black;
  }
}
@media (max-width: 350px) {
  .home-wrapper {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
    text-align: center;
    width: 100%;
    margin: 0;
    padding: 20px 0;
  }
  .home-photo {
    margin: 20px 0;
    align-self: center;
    grid-area: photo;
    width: 100vw;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
  }
}
@media (min-width: 351px) and (max-width: 699px) {
  .home-wrapper {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
    text-align: center;
    width: 80%;
    margin: 0 auto;
    padding: 20px 0;
  }
  .home-message {
    margin: 10px 0;
  }
  .home-photo {
    margin: 10px 0;
    align-self: center;
    grid-area: photo;
    width: 20rem;
    border-radius: 3px;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
    animation: 1s ease-out 0s 1 growLarge;
  }
}
@media (min-width: 700px) {
  .home-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: "message photo";
    grid-column-gap: 3rem;
    width: 80vw;
    height: 95vh;
    margin: 0 auto;
  }
  .home-message {
    grid-area: message;
    padding-left: 40px;
    align-self: center;
    justify-self: end;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    word-wrap: normal;
  }
  .home-photo {
    align-self: center;
    grid-area: photo;
    width: 20rem;
    border-radius: 3px;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
    animation: 1s ease-out 0s 1 growLarge;
  }
}
</style>
