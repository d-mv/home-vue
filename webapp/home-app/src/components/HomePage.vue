<template>
  <section id='content'>
    <div class='home-wrapper'>
      <div class='home-message'>
        <div class='first-line t0'>WELCOME,</div>
        <div class='second-line t1'>I'm Dmitry</div>
        <div class='third-line t2'>FULL-STACK DEVELOPER</div>
        <div class='fourth-line'>{send message}</div>
      </div>
      <!-- <div class='home-photo'> -->
      <img
        class='home-photo'
        src="https://res.cloudinary.com/diciu4xpu/image/upload/v1552051743/home/avatar_photo.jpg"
      >
      <!-- </div> -->
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang='scss' scoped>
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
    filter: sepia(0.5);
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
    filter: sepia(0.5);
    border-radius: 3px;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
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
    filter: sepia(0.5);
    border-radius: 3px;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
  }
}
</style>
