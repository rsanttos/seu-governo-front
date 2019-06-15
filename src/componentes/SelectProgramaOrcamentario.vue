<template>
    <v-container>
        <h3 class=".headline">Escolha os programas orçamentários</h3>
        <select v-model="selected" multiple>
            <option v-for="option in options" v-bind:value="option.value">
                {{ option.text }}
            </option>
        </select>
    </v-container>
</template>
<script>
export default {
    data: function () {
        return {
            selected: null,
            options: [
                { text: 'Múltiplo', value: 'Múltiplo' },
                { text: 'OPERACOES ESPECIAIS: TRANSFERENCIAS CONSTITUCIONAIS E AS DEC', value: 'OPERACOES ESPECIAIS: TRANSFERENCIAS CONSTITUCIONAIS E AS DEC' },
                { text: 'EDUCACAO SUPERIOR - GRADUACAO, POS-GRADUACAO, ENSINO, PESQUI', value: 'EDUCACAO SUPERIOR - GRADUACAO, POS-GRADUACAO, ENSINO, PESQUI' },
                { text: 'EDUCACAO BASICA', value: 'EDUCACAO BASICA' },
                { text: 'EDUCACAO PROFISSIONAL E TECNOLOGICA', value: 'EDUCACAO PROFISSIONAL E TECNOLOGICA' },
                { text: 'PROGRAMA DE GESTAO E MANUTENCAO DO MINISTERIO DA EDUCACAO', value: 'PROGRAMA DE GESTAO E MANUTENCAO DO MINISTERIO DA EDUCACAO' },
                { text: 'EDUCACAO DE QUALIDADE PARA TODOS', value: 'EDUCACAO DE QUALIDADE PARA TODOS' },
                { text: 'QUALIDADE NA ESCOLA', value: 'QUALIDADE NA ESCOLA' }
            ]
        }
  }
}
</script>
<style lang="stylus" scoped>
</style>