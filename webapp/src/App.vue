<template>
  <div id='app'>
    <NavBar />
    <HomePage v-if='this.show===0' />
    <WebProjects v-if='this.show===1' />
    <Photos v-if='this.show===2' />
    <Contacts v-if='this.show===3' />
  </div>
</template>

<script>
import { EventBus } from './event-bus.js'
import NavBar from './components/NavBar.vue'
import HomePage from './components/HomePage.vue'
import WebProjects from './components/WebProjects.vue'
import Photos from './components/photos/Photos'
import Contacts from './components/Contacts.vue'

export default {
  data () {
    return {
      show: 0
    }
  },
  name: 'app',
  components: {
    NavBar,
    HomePage,
    WebProjects,
    Photos,
    Contacts,
  },
  mounted () {
    EventBus.$on('show', content => {
      this.show = content
    })
  }
}
</script>

<style>
@import url('./assets/stylsheets/animations.scss');
@import url('./assets/stylsheets/typography.scss');
@import url('./assets/stylsheets/utility.scss');

#app {
  font-family: 'Rubik', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none;
}
</style>
