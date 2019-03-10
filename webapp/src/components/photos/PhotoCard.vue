<template>
  <div
    class='belt-card'
    @click='showPhoto (photoId)'
    v-bind:style="{ background: `url(${this.photos[photoId]['thumb']}) no-repeat center/cover`}"
  ></div>
</template>

<script>
import { EventBus } from '../../event-bus.js'
import { mapGetters } from 'vuex';

export default {
  props: {
    photoId: {
      type: Number,
      required: true
    }
  },
    computed: {
    ...mapGetters([
      'photos',
    ])
  },
  methods: {
    showPhoto (content) {
      EventBus.$emit('choice', content)
    }
  }
}
</script>
<style lang="scss" scoped>
.belt-card {
  background-color: white;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  object-fit: cover;
  border-radius: 3px;
  width: 20%;
  height: 100%;
  transition-duration: 0.5s;
}

.belt-card:hover {
  transform: scale(1.1);
  margin: 0 20px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
}
</style>

