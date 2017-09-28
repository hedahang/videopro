import Vue from 'vue'
import Vuex from 'vuex'

import ResModules from './modules/ResModules'
import UsersModule from './modules/UsersModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ResModules,
    UsersModule,
  }
})
