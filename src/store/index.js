import Vue from 'vue'
import Vuex from 'vuex'

import ResModules from './modules/ResModules'
import news from './modules/news'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ResModules
  }
})
