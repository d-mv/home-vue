<template>
  <section id='navbar'>
    <div
      @click='toggleNavigation ()'
      class='logo'
      id='logo'
    >DM</div>
    <div
      v-if="this.showNavBar"
      class='navbar-wrapper large'
      id='navbar-wrapper'
    >
      <div
        @click='showContent (0)'
        class='nav-link'
      >
        <span class='link-wrapper mb-home t3'>HOME</span>
      </div>
      <div
        @click='showContent (1)'
        class='nav-link'
      >
        <span class='link-wrapper mb-web t3'>WEB</span>
      </div>
      <div
        @click='showContent (2)'
        class='nav-link'
      >
        <span class='link-wrapper mb-photo t3'>PHOTO</span>
      </div>
      <div
        @click='showContent (3)'
        class='nav-link'
      >
        <span class='link-wrapper t3'>CONTACT</span>
      </div>
    </div>
  </section>
</template>

<script>
import { EventBus } from '../event-bus.js'

export default {
  data () {
    return {
      showNavBar: true,
      screenSmall: false
    }
  },
  mounted () {
    if (window.screen.width < 500) {
      this.showNavBar = false
      this.screenSmall = true
    }
  },
  methods: {
    toggleNavigation () {
      this.showNavBar = !this.showNavBar
    },
    showContent (content) {
      if (this.screenSmall) { this.showNavBar = false }
      EventBus.$emit('show', content)
    }
  }
}
</script>

<style lang='scss' scoped>
#logo {
  z-index: 101;
}
#navbar-wrapper {
  z-index: 100;
}
@media (max-width: 499px) {
  .navbar-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 50px;
    left: 0px;
    background-color: rgba(255, 255, 255, 0.9);
    animation: 1s ease-out 0s 1 slideInFromLeft;
  }
  .link-wrapper {
    display: flex;
    padding: 10px;
    margin-bottom: 0;
    transition-duration: 1s;
    font-size: 20px;
  }
}
@media (min-width: 500px) {
  .navbar-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    position: absolute;
    top: 50px;
    left: -58px;
    animation: 1s ease-out 0s 1 slideInFromTop;
  }
  .link-wrapper {
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 10px 20px;
    margin-top: 30px;
    transform: rotate(-90deg);
    transition-duration: 1s;
    font-size: 20px;
    text-align: center;
    width: 120px;
    &:hover {
      transform: none;
      padding: 30px 20px 30px 80px;
      font-size: 26px;
      background-color: rgba(255, 255, 255, 0.9);
    }
  }
  .mb-photo {
    margin-bottom: 38px;
  }
  .mb-web {
    margin-bottom: 15px;
  }
  .mb-home {
    margin-bottom: 10px;
  }
}
.logo {
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom: 1px solid grey;
  font-size: 18px;
  background-color: white;
}
.nav-link {
  cursor: pointer;
}
</style>
