<template>
  <section id='web'>
    <div class="web-content">
      <div
        v-for="value in projects"
        :key='value.title'
      >
        <WebProjectCard
          :project='value'
          class='web-project-card'
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import WebProjectCard from './WebProjectCard'

export default {
  components: {
    WebProjectCard
  },
  computed: {
    ...mapGetters([
      'projects',
    ]),
  }
}
</script>

<style lang="scss" scoped>
.web-content {
  position: absolute;
  top: 38px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}
.web-project-card {
  animation: 1s ease-out 0s 1 growLarge;
}
@media (max-width: 499px) {
.web-content {
  left: 0;
  right: 0;
}
}
@media (min-width: 500px) {
.web-content {
  left: 170px;
  right: 20px;
}
}
</style>
