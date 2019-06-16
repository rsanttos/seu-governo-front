<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container fluid grid-list-xl>
          <v-toolbar color="#379392" dark>
            <v-toolbar-title>Seu Governo</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-layout row wrap>
            <v-flex xs3 >
              <select-ano 
              :options = "anos"
              @define-anos="loadGrafico"
              />
            </v-flex>  
            <v-flex xs3 >
              <select-mes 
              :options = "meses"
              @define-meses="loadGrafico"/>
            </v-flex>  
            <v-flex xs6 >
              <select-programa-orcamentario 
              :options = "programas"
              @define-programa="loadGrafico"/>
            </v-flex>  
            <v-flex xs12 >  
              <grafico 
              :data = "data"/>  
            </v-flex>                
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<script>
import Grafico from './componentes/Grafico'
import SelectAno from './componentes/SelectAno'
import SelectMes from './componentes/SelectMes'
import SelectProgramaOrcamentario from './componentes/SelectProgramaOrcamentario'
import { store } from './common/store.js'

export default {
  store,
  components: {
    Grafico,
    SelectAno,
    SelectMes,
    SelectProgramaOrcamentario
  },
  data () {
    return {
      anos: [],
      meses: [],
      programas: [],
      data: []
    }
  },
  mounted() {
    this.loadAnos()
    this.loadMeses()
    this.loadProgramas()
  },
  methods: {
    loadAnos(){ 
      let uri = 'http://192.168.0.10:8080/api/anos'
      this.$http.get(uri)
        .then((result) => {
          this.anos = result.body
        })    
    },
    loadMeses(){
      let uri = 'http://192.168.0.10:8080/api/meses'
      this.$http.get(uri)
        .then((result) => {
          this.meses = result.body
      })  
    },
    loadProgramas(){
      let uri = 'http://192.168.0.10:8080/api/programas'
      this.$http.get(uri)
        .then((result) => {
          this.programas = result.body
      })  
    },
    loadGrafico(){
      let uri = 'http://192.168.0.10:8080/api/orcamentos'
      this.$http.get(uri)
        .then((result) => {
          var orcamentos = result.body
          var traces = orcamentos.map(function(orcamento) {
            var trace = {x: orcamento.meses, y: orcamento.orcamentos}
            return trace
          })
          this.data = traces
      })
    }
  },
}
</script>
<style lang="stylus" scoped>
.preto
  color black
</style>
