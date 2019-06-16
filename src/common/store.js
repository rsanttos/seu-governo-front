import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    anos : [
      {
        value: null
      }
    ],
    meses : [
      {
        value: null
      }
    ],
    programa : {
      value: null
    }    
  },
  mutations: {
    addAnos (state , valor) {
      state.anos = valor
    },
    addMeses (state , valor) {
      state.meses = valor
    },
    addPrograma (state , valor) {
      state.programa = valor
    }
  },
  actions:{
    addAnos(context, valor){
      context.commit('addAnos', valor)
    },
    addMeses(context, valor){
      context.commit('addMeses', valor)
    },
    addPrograma (context, valor) {
        context.commit('addPrograma', valor)
    }
  }
})
