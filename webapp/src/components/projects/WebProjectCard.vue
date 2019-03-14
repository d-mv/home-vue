<template>
  <div class="web-project-card">
    <div
      class="web-project-photo"
      v-bind:style="{ background: `url(${this.project.photo}) no-repeat center/cover`}"
    >
      <div class="web-project-title-block">
        <div class="web-project-title">{{this.project.title}}</div>
        <div class="web-project-description">{{this.project.description}}</div>
      </div>
    </div>
    <div class='web-project-details t6'>
      {{this.project.details}}
    </div>
    <div class="web-project-tech-logos">
      <div
        v-for="value in getTechLinks(this.project.technology)"
        :key='value[0]'
      >
        <WebProjectTechLogo
          :link='value[0]'
          class='web-project-tech-links'
        />
      </div>
    </div>
    <div class="web-project-links">
      <div
        class='web-project-link'
        @click='goLink ("git")'
      >github</div>
      <div
        class='web-project-link'
        @click='goLink ("deploy")'
        v-if='this.project.links.deploy != ""'
      >deployed</div>
      <div
        class='web-project-link'
        @click='goLink ("video")'
        v-if='this.project.links.video != ""'
      >video</div>
      <div
        class='web-project-link'
        @click='goLink ("other")'
        v-if='this.project.links.other != ""'
      >other</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import WebProjectTechLogo from './WebProjectTechLogo'

export default {
  components: {
    WebProjectTechLogo
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      'technology',
    ]),
  },
  methods: {
    goLink (target) {
      let url = ''
      switch (target) {
        case 'git':
          url = this.project.links.github
          break
        case 'deploy':
          url = this.project.links.deploy
          break
        case 'video':
          url = this.project.links.video
          break
        default:
          url = this.project.links.other
      }
      if (url != '') { window.open(url, '_blank').focus() }
    },
    getTechLinks (links) {
      const linksArray = []
      if (typeof links !== 'undefined') {
        links.forEach((link) => {
          linksArray.push(this.technology[link])
        })
      }
      return linksArray
    },
    cons (smth) {
      console.log(smth)
    }
  }}
</script>

<style lang="scss" scoped>
.web-project-card {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas: "photo" "details" "logos" "links";
  grid-column-gap: 1rem;
  border-radius: 3px;
  transition-duration: 0.5s;
  width: 300px;
  margin: 10px;
  background-color: #ececec;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
}
.web-project-photo {
  grid-area: photo;
  background-color: white;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  object-fit: cover;
  height: 250px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: flex-end;
  border-radius: 3px 3px 0 0;
}

.web-project-title-block {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 0;
  border-bottom: 2px solid grey;
}
.web-project-title,
.web-project-description {
  padding: 5px 10px;
  font-weight: 300;
}
.web-project-title {
  font-size: 1.5rem;
  font-weight: 300;
}
.web-project-description {
  font-size: 1rem;
  font-style: italic;
}
.web-project-details {
  grid-area: details;
  padding: 10px;
}

.web-project-links {
  grid-area: links;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
}
.web-project-link {
  font-size: 0.8rem;
  font-style: italic;
  color: #878787;
  &:hover {
    color: black;
  }
}
.web-project-tech-logos{
  grid-area: logos;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-content: center;
  padding: 10px 5px;
}
</style>

