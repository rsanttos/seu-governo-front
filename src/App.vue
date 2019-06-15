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
            <v-flex xs4 >
              <select-ano />
            </v-flex>  
            <v-flex xs4 >
              <select-mes />
            </v-flex>  
            <v-flex xs4 >
              <select-programa-orcamentario />
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
export default {
  components: {
    Grafico,
    SelectAno,
    SelectMes,
    SelectProgramaOrcamentario
  },
  data () {
    return {
      data: [{ x: [1, 3, 10, 40], y: [2, 4, 56, 20] }, { x: [5, 6, 18, 35], y: [6, 12, 80, 10] }]
    }
  },
}
</script>
<style lang="stylus" scoped>
.preto
  color black
</style>
