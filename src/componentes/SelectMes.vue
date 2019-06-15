<template>
    <v-container>
        <h3 class=".headline">Escolha os meses</h3>
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
                { text: 'Janeiro', value: '1' },
                { text: 'Fevereiro', value: '2' },
                { text: 'Março', value: '3' },
                { text: 'Abril', value: '4' },
                { text: 'Maio', value: '5' },
                { text: 'Junho', value: '6' },
                { text: 'Julho', value: '7' },
                { text: 'Agosto', value: '8' },
                { text: 'Setembro', value: '9' },
                { text: 'Outubro', value: '10' },
                { text: 'Novembro', value: '11' },
                { text: 'Dezembro', value: '12' }
            ]
        }
  }
}
</script>
<style lang="stylus" scoped>
</style>