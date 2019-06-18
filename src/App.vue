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
            <v-flex xs6 >
              <select-categoria 
              :options = "categorias"
              @define-categoria="loadGrafico"/>
            </v-flex>  
            <v-flex xs6 >
              <select-programa-orcamentario 
              :options = "programas"
              @define-programa="loadGrafico"/>
            </v-flex>  
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
            <v-flex x6 >
              <select-uf 
              :options = "ufs"
              @define-uf="loadGrafico"/>
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
import SelectUf from './componentes/SelectUf'
import SelectCategoria from './componentes/SelectCategoria'
import { store } from './common/store.js'

export default {
  store,
  components: {
    Grafico,
    SelectAno,
    SelectMes,
    SelectProgramaOrcamentario,
    SelectUf,
    SelectCategoria
  },
  data () {
    return {
      anos: [],
      meses: [],
      programas: [],
      ufs: [],
      categorias: [],
      data: []
    }
  },
  mounted() {
    this.loadAnos()
    this.loadMeses()
    this.loadProgramas()
    this.loadCategorias()
    this.loadUfs()
  },
  methods: {
    loadAnos(){ 
      let uri = 'http://10.7.160.36:8080/api/anos'
      this.$http.get(uri)
        .then((result) => {
          this.anos = result.body
        })    
    },
    loadMeses(){
      let uri = 'http://10.7.160.36:8080/api/meses'
      this.$http.get(uri)
        .then((result) => {
          this.meses = result.body
      })  
    },
    loadProgramas(){
      let uri = 'http://10.7.160.36:8080/api/programas'
      this.$http.get(uri)
        .then((result) => {
          this.programas = result.body
      })  
    },
    loadUfs(){
      let uri = 'http://10.7.160.36:8080/api/ufs'
      this.$http.get(uri)
        .then((result) => {
          this.ufs = result.body
      })  
    },
    loadCategorias(){
      let uri = 'http://10.7.160.36:8080/api/categorias'
      this.$http.get(uri)
        .then((result) => {
          this.categorias = result.body
      })  
    },
    loadGrafico(){
      var requestBody = {}

      if(this.$store.state.anos != null && this.$store.state.anos.length > 0){
        requestBody.anos = this.$store.state.anos        
      }

      if(this.$store.state.meses != null && this.$store.state.meses.length > 0){
        requestBody.meses = this.$store.state.meses        
      }

      if(this.$store.state.programa != null){
        requestBody.programa_orcamentario = this.$store.state.programa        
      }

      if(this.$store.state.categoria != null){
        requestBody.categoria = this.$store.state.categoria        
      }

      if(this.$store.state.uf != null){
        console.log('possui uf', this.$store.state.uf)
        requestBody.uf = this.$store.state.uf        
      }

      let uri = 'http://10.7.160.36:8080/api/orcamentos'

      this.$http.post(uri, requestBody)
        .then((result) => {
          var orcamentos = result.body
          var traces = orcamentos.map(function(orcamento) {
            var trace = {
              name: orcamento.ano, 
              x: orcamento.meses, 
              y: orcamento.orcamentos
            }
            return trace
          })
          this.data = traces
      })
    },
    isEmpty(obj){

      if(obj == 'undefined'){
        return true
      }

      for (var i in obj) {
        if(obj.hasOwnProperty(i)) {
            return false;
        }
      }
      return true;
    },
  },
}
</script>
<style lang="stylus" scoped>
.preto
  color black
</style>
