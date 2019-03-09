<template>
  <section id='photo'>
    <div
      class='photo-main'
      v-bind:style="{ background: `url(${this.photos[this.chosenPhoto]['large']}) no-repeat center/cover`}"
    >
      <div class='photo-title-block'>
        <div class='photo-title-row-one'>
          {{this.photos[this.chosenPhoto]['title']}}
        </div>
        <div class='photo-title-row-two'>
          {{this.photos[this.chosenPhoto]['location']}}
        </div>

      </div>
    </div>
    <div class='belt'>
      <i
        @click='left ()'
        class="fas fa-angle-left"
      ></i>
      <PhotoCard v-bind:photoId='leftPhoto' />
      <PhotoCard
        class='m0'
        v-bind:photoId='leftPhoto+1'
      />
      <PhotoCard
        class='m0'
        v-bind:photoId='leftPhoto+2'
      />
      <PhotoCard
        class='m0'
        v-bind:photoId='leftPhoto+3'
      />
      <PhotoCard
        class='m0'
        v-bind:photoId='leftPhoto+4'
      />
      <i
        @click='right ()'
        class="fas fa-angle-right"
      ></i>
    </div>
  </section>
</template>

<script>
import { EventBus } from '../../event-bus.js'
import { mapGetters } from 'vuex';
import PhotoCard from './PhotoCard'

export default {
  components: {
    PhotoCard
  },
  data () {
    return {
      chosenPhoto: 1,
      leftPhoto: 1,
    }
  },
  computed: {
    ...mapGetters([
      'photos',
    ]),
  },
  mounted () {
    EventBus.$on('choice', content => {
      this.chosenPhoto = content
    })
  },
  methods: {
    switchPhoto (position) {
      console.log(`method run with ${position}`)
      this.chosenPhoto = position
      return this.mainPhoto
    },
    left () {
      if (this.leftPhoto - 1 != 0) {
        this.leftPhoto = this.leftPhoto - 1
      }
    }, right () {
      if (this.leftPhoto + 5 <= Object.keys(this.photos).length) {
        this.leftPhoto = this.leftPhoto + 1
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@media (max-width: 499px) {
  .photo-main {
    background-color: white;
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: contain;
    background-size: contain;
    object-fit: cover;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-content: flex-end;
    top: 80px;
    left: 0;
    right: 0;
    height: 60%;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
  }
  .belt {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 10%;
    height: 15%;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
  }
  .fas {
    font-size: 2rem;
    color: rgba(0, 0, 0, 0.2);
    align-self: center;
    padding: 10px;
    transition-duration: 0.7s;
  }
}
@media (min-width: 500px) {
  .photo-main {
    background-color: white;
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: contain;
    background-size: contain;
    object-fit: cover;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-content: flex-end;
    top: 38px;
    width: 80%;
    right: 40px;
    bottom: 150px;
    border-radius: 3px;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
  }
  .belt {
    position: absolute;
    width:80%;
    right: 40px;
    bottom: 20px;
    height: 110px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
  }
  .fas {
    font-size: 2rem;
    color: rgba(0, 0, 0, 0.2);
    align-self: center;
    padding: 10px;
    transition-duration: 0.7s;
    &:hover {
      transform: scale(1.2);
      text-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    }
  }
}
.photo-title-block {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 0;
  border-radius: 0 0 3px 3px;
}
.photo-title-row-one,
.photo-title-row-two {
  padding: 5px 10px;
  font-weight: 300;
}
.photo-title-row-one {
  font-size: 1.5rem;
  font-weight: 300;
}
.photo-title-row-two {
  font-size: 1rem;
  font-style: italic;
}
</style>
