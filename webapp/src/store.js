import Vue from 'vue'
import Vuex from 'vuex'
import json from './config.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photos: json.photos,
    projects: json.projects,
    technology: json.technology
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    photos: state => state.photos,
    projects: state => state.projects,
    technology: state => state.technology
  }
})
