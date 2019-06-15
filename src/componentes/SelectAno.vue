<template>
    <v-container>
        <h3 class=".headline">Escolha os anos</h3>
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
                { text: '2014', value: '2014' },
                { text: '2015', value: '2015' },
                { text: '2016', value: '2016' },
                { text: '2017', value: '2017' },
                { text: '2018', value: '2018' }
            ]
        }
  }
}
</script>
<style lang="stylus" scoped>
</style>