<template>
<section id='photo'>
    <div class="web-content">
      <div class="web-project">
        <img src='https://res.cloudinary.com/diciu4xpu/image/upload/v1551733286/home/newsletter_app.jpg'
             class="web-project-screenshot">
        <div class="web-project-details">
          <div class="web-proj-line-one text t4">The Newsletter</div>
          <div class="web-proj-line-two text t5">Newspaper-style news reader proof of concept</div>
          <div class='web-proj-line-icons text'><a href='https://github.com/d-mv/newsletter'><i
                 class="fab fa-github-alt icons"></i></a></div>
        </div>
      </div>
      <div class="web-project">
        <img src='https://res.cloudinary.com/diciu4xpu/image/upload/v1551734444/home/chaserz_1.jpg'
             class="web-project-screenshot">
        <div class="web-project-details">
          <div class="web-proj-line-one text t4">Chaserz</div>
          <div class="web-proj-line-two text t5">Scooter race web game</div>
          <div class='web-proj-line-icons text'><a href='https://github.com/ronitalvi/chazers'><i
                 class="fab fa-github-alt icons"></i></a></div>
        </div>
      </div>
    </div>
  </section></template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.web-content {
  position: absolute;
  top: 38px;
  left: 170px;
  right: 40px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
}

.web-project {
  width: auto;
  height: 620px;
  margin: 20px;
  border-radius: 3px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
  background-color: #EDEDED;
}

.web-project-screenshot {
  object-fit: scale-down;
  width: auto;
  height: 70%;
  border-bottom: 2px solid grey;
  border-radius: 3px 3px 0 0;
}

.web-project-details {
  width: inherit;
  padding: 10px;
}

.web-proj-line-one {
  margin-top: 10px;
}

.web-proj-line-two {
  margin-top: 10px;
}

.web-proj-line-icons {
  margin-top: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}

.web-proj-line-icons a {
  text-decoration: none;
  color: black;
}

.icons {
  font-size: 3rem;
  color: grey;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.3)
}

.icons:hover {
  color: black;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transform: scale(1.1)
}
</style>
