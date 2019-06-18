<template>
    <v-container>
        <v-select
            :items="options"
            item-text="value"
            item-value="value"
            v-model="selected"
            label="Escolha o Estado"
            attach
            :clearable="true"
            @change="selectUf"
        ></v-select>
    </v-container>
</template>
<script>
export default {
    props: ['options'],
    data: function () {
        return {
            selected: null
        }
    },
    methods: {
        selectUf(){
            this.$store.dispatch('addUf', this.selected)
            this.$emit('define-uf', this.selected)
        }
    },
}
</script>
<style lang="stylus" scoped>
</style>