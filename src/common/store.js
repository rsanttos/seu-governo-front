import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    anos : {},
    meses : {},
    programa : null ,
    categoria: null,
    uf: null  
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
    },
    addCategoria (state , valor) {
      state.categoria = valor
    },
    addUf (state , valor) {
      state.uf = valor
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
    },
    addCategoria (context, valor) {
        context.commit('addCategoria', valor)
    },
    addUf (context, valor) {
        context.commit('addUf', valor)
    }
  }
})
